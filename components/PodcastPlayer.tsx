import React from 'react';

export default function PodcastPlayer({ src, title }: { src: string; title?: string }) {
  return (
    <div className="p-4 border rounded">
      <div className="font-semibold mb-2">{title}</div>
      <audio controls src={src} className="w-full">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
