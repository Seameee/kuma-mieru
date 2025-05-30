'use client';

export default function SeayaAnalytics() {
  return (
    <script
      src="https://ayano.seaya.link/api/script.js"
      data-site-id="2"
      crossOrigin="anonymous"
      defer
      dangerouslySetInnerHTML={{__html: ''}}
    />
  );
}
