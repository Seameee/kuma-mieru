'use client';

export default function SeayaAnalytics() {
  return (
    <script
      src="https://analytics.seaya.link/api/script.js"
      data-site-id="2"
      crossOrigin="anonymous"
      defer
      dangerouslySetInnerHTML={{__html: ''}}
    />
  );
}
