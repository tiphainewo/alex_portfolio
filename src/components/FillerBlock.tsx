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
        <img
          src="src/assets/filler.gif"
          className="absolute w-full translate-y-[-30%]"
        />
      ) : (
        <img
          src="src/assets/filler.png"
          className="absolute w-full translate-y-[-30%]"
        />
      )}
    </div>
  );
}
