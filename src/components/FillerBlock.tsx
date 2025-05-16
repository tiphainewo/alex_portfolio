"use client"
import Image from "next/image";
import { useState } from "react";

export default function FillerBlock() {
  const [playGif, setPlayGif] = useState(false);

  return (
    <div
      className="group max-h-full relative"
      onMouseEnter={() => setPlayGif(true)}
      onMouseLeave={() => setPlayGif(false)}
    >
      {playGif ? (
        <Image
          src="/filler.gif"
          className="absolute w-full translate-y-[-30%]"
          alt=""
          height={400}
          width={800}
          unoptimized
        />
      ) : (
        <Image
          src="/filler.png"
          className="absolute w-full translate-y-[-30%]"
          alt=""
          height={400}
          width={800}
        />
      )}
    </div>
  );
}
