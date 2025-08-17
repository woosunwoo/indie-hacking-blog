"use client"
import styles from './NewsletterCTA.module.css'
import { useEffect } from 'react';

export default function NewsletterCTA() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <center>
      <iframe
        src="https://subscribe-forms.beehiiv.com/3dcb0063-f7c8-4623-8468-29531f08d6b2"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "400px",
          height: "146px",
          margin: 0,
          marginLeft: "100px",
          borderRadius: "0px",
          backgroundColor: "transparent",
          boxShadow: "0 0 #0000",
          maxWidth: "100%",
        }}
      />
    </center>
  );
}