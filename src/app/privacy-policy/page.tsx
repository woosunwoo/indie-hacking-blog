import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Upwork Job Watcher',
  description:
    'Privacy Policy for the Upwork Job Watcher Chrome extension. We do not collect, store, share, or sell personal information. All processing happens locally in your browser.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 prose prose-neutral dark:prose-invert">
      <h1>Privacy Policy for Upwork Job Watcher</h1>
      <p>
        <strong>Effective date:</strong> August 20, 2025
        <br />
        <strong>Developer:</strong> Sunwoo Yang (Sunwoo Labs)
        <br />
        <strong>Contact:</strong> <a href="mailto:yangsunwoo@gmail.com">yangsunwoo@gmail.com</a> |{' '}
        <a href="https://sunwoolabs.com" target="_blank" rel="noopener noreferrer">
          sunwoolabs.com
        </a>
      </p>
      <p>
        <strong>TL;DR:</strong> Upwork Job Watcher does not collect, store, share, or sell personal
        information. All processing happens locally in your browser to reload your chosen Upwork search
        and notify you about new jobs. No data is transmitted to the developer or any third party.
      </p>

      <h2>Scope</h2>
      <p>
        This policy explains how Upwork Job Watcher (the “Extension,” “we,” “our,” or “us”) handles
        information when you install and use it from the Chrome Web Store.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Personal data:</strong> None.
        </li>
        <li>
          <strong>Sensitive categories</strong> (e.g., authentication info, financial data, health data):
          None.
        </li>
        <li>
          <strong>Web browsing activity / page content:</strong> Not collected, stored, or transmitted.
          To perform its single, user-facing purpose, the Extension may temporarily read content on
          upwork.com pages you open in order to detect new job listings. This processing is in-memory
          only, used solely for the notification feature, and is not logged or sent anywhere.
        </li>
        <li>
          <strong>Identifiers / analytics / ads:</strong> None. We do not use analytics, tracking pixels,
          or advertising SDKs.
        </li>
      </ul>

      <h2>Local processing &amp; storage</h2>
      <p>
        To function, the Extension saves non-personal settings on your device using Chrome’s local
        extension storage:
      </p>
      <ul>
        <li>Your chosen Upwork search URL</li>
        <li>Check/reload interval</li>
        <li>Last-seen job identifiers used to detect what’s new</li>
        <li>Notification preferences</li>
      </ul>
      <p>This information:</p>
      <ul>
        <li>stays on your device (not synced unless you use Chrome’s own sync for extensions),</li>
        <li>is not transmitted to any server controlled by the developer,</li>
        <li>is not shared with third parties.</li>
      </ul>
      <p>
        You can clear these settings any time via the Extension’s options page or by uninstalling the
        Extension.
      </p>

      <h2>Data transmission</h2>
      <p>
        The Extension does not transmit your data to the developer or any third party. When it reloads
        your chosen Upwork search, network requests occur as part of normal browsing to
        <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer"> https://www.upwork.com/</a>.
        We do not add or send personal data beyond what your browser already sends to load that page.
      </p>
      <p>If a future feature ever requires transmitting user data, we will:</p>
      <ul>
        <li>update this policy,</li>
        <li>prominently disclose the data use, and</li>
        <li>obtain your affirmative consent before any collection or transmission.</li>
      </ul>
      <p>
        Any such transmission would use modern cryptography (e.g., HTTPS/TLS) and avoid placing sensitive
        data in headers or URLs.
      </p>

      <h2>Chrome permissions disclosure</h2>
      <p>
        The Extension requests only the permissions necessary for its single purpose. These permissions
        are used solely to provide functionality on-device and do not result in data collection or
        sharing.
      </p>
      <dl>
        <dt><code>tabs</code></dt>
        <dd>Locate or open the Upwork tab that corresponds to your saved search, and refresh it when checks run.</dd>
        <dt><code>storage</code></dt>
        <dd>Save local, non-personal settings (search URL, interval, last-seen jobs, notification preferences).</dd>
        <dt><code>alarms</code></dt>
        <dd>Schedule periodic checks to reload your chosen search at the interval you set.</dd>
        <dt><code>notifications</code></dt>
        <dd>Show system notifications when new job posts are detected.</dd>
        <dt><code>scripting</code></dt>
        <dd>Inject minimal code on upwork.com pages to read page content in-memory and identify new listings.</dd>
      </dl>
      <p>
        <strong>Host permissions:</strong> <code>https://www.upwork.com/*</code>
        <br />
        Restrict functionality to Upwork only. Required to reload your specific search and detect new jobs
        on that domain.
      </p>
      <p>The Extension does not request access to other sites and does not use remote code.</p>

      <h2>Your choices &amp; control</h2>
      <ul>
        <li>Because we do not collect personal data, there’s nothing to opt in or out of regarding data sharing.</li>
        <li>You can adjust or delete your local settings via the options page.</li>
        <li>You can disable notifications in the options page or through your browser’s notification controls.</li>
        <li>
          You may disable or remove the Extension at any time via <code>chrome://extensions</code> → Remove.
          This also deletes its local settings.
        </li>
      </ul>

      <h2>Children’s privacy</h2>
      <p>
        The Extension is not directed to children and does not knowingly collect personal information from
        anyone. Because no personal data is collected, there is nothing to share or sell.
      </p>

      <h2>Security</h2>
      <ul>
        <li>No user data is sent to developer-controlled servers.</li>
        <li>Network activity is limited to loading https://www.upwork.com/ for your chosen search.</li>
        <li>
          If we ever introduce features that transmit user data, they will use modern cryptography and
          avoid placing sensitive information in URLs or headers, and we will first obtain your affirmative
          consent.
        </li>
      </ul>

      <h2>Third parties</h2>
      <p>
        We do not share data with third parties. The Extension does not include analytics, advertising
        networks, or social media plugins.
      </p>

      <h2>Policy changes</h2>
      <p>
        If we change this policy, we will update the “Effective date” above and, when required, provide
        prominent in-product notice and request your consent before any new collection or transmission of
        data.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about this policy or the Extension, contact:
        <br />
        Sunwoo Yang (Sunwoo Labs)
        <br />
        Email: <a href="mailto:yangsunwoo@gmail.com">yangsunwoo@gmail.com</a>
        <br />
        Website: <a href="https://sunwoolabs.com" target="_blank" rel="noopener noreferrer">sunwoolabs.com</a>
      </p>
    </main>
  )
}
