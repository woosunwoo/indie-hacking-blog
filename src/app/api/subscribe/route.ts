import { NextRequest, NextResponse } from 'next/server'

const FORM_ID = process.env.CONVERTKIT_FORM_ID
const API_KEY = process.env.CONVERTKIT_API_KEY

export async function POST(req: NextRequest) {
  if (!FORM_ID || !API_KEY) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }

  try {
    const { email, first_name } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const url = `https://api.convertkit.com/v3/forms/${encodeURIComponent(FORM_ID)}/subscribe`

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        email,
        first_name,
      }),
      // Ensure this does not cache
      cache: 'no-store',
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      return NextResponse.json({ error: 'Subscription failed', details: text }, { status: 502 })
    }

    const data = await res.json().catch(() => ({}))
    return NextResponse.json({ success: true, data })
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
