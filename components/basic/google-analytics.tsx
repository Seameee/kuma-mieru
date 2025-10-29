'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <Script
      strategy="afterInteractive"
      src="https://ayano.seaya.link/script.js"
      data-website-id="859b0512-dbee-4c15-b866-dd8481b6d56a"
    />
  );
}
