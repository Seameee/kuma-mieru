'use client';

import Script from 'next/script';

interface AnalyticsProps {
  id: string;
}

export default function Analytics({ id }: AnalyticsProps) {
  if (!id) return null;

  return (
    <Script
      strategy="afterInteractive"
      src="https://ayano.seaya.link/script.js"
      data-website-id="859b0512-dbee-4c15-b866-dd8481b6d56a"
    />
  );
}
