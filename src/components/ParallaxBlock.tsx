import { useState } from "react";

export default function ParallaxBlock() {
  const [parallaxTransform, setParallaxTransform] = useState(
    `translateX(0px) translateY(0px)`
  );

  function parallax(event: MouseEvent) {
    const x = (window.innerWidth - event.pageX) / 90;
    const y = (window.innerHeight - event.pageY) / 90;

    setParallaxTransform(`translateX(${x}px) translateY(${y}px)`);
  }

  return (
    <div
      className="parallax-wrap bg-cream relative h-full w-full"
      onMouseMove={parallax}
    >
      <img
        src="src/assets/parallax_landscape/4th.png"
        className="absolute -bottom-0 w-full object-contain"
        style={{ transform: `${parallaxTransform}` }}
      />
      <img
        src="src/assets/parallax_landscape/3rd.png"
        className="absolute -bottom-0 w-full object-contain"
        style={{ transform: `${parallaxTransform}` }}
      />
      <img
        src="src/assets/parallax_landscape/2nd.png"
        className="absolute -bottom-0 w-full object-contain"
        style={{ transform: `${parallaxTransform}` }}
      />
      <img
        src="src/assets/parallax_landscape/1st.png"
        className="absolute -bottom-40 w-full object-contain"
        style={{ transform: `${parallaxTransform}` }}
      />
    </div>
  );
}
