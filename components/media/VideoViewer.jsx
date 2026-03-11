"use client";

import { useState } from "react";
import { VideoOff } from "lucide-react";

export default function VideoViewer({ src, poster, mode = "inline" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full aspect-video rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-400">
        <VideoOff className="w-4 h-4 mr-2" />
        Video niet beschikbaar
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
      >
        Your browser does not support video playback.
      </video>
    </div>
  );
}
