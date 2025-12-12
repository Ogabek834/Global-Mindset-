import React from 'react';

/**
 * Simple Instagram embed component using oEmbed (server-side fetch is recommended for production).
 * For test/demo: user can paste the Instagram reel URL and this component will render an iframe.
 */
export default function InstagramEmbed({ url }: { url: string }) {
  // For quick tests we render Instagram embed via blockquote fallback.
  return (
    <div className="rounded border p-2">
      <a href={url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
        Open Reel
      </a>
      <div className="mt-2 text-sm text-gray-500">Embed preview will appear here after CMS integration / server-side oEmbed fetch.</div>
    </div>
  );
}
