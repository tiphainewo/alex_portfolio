"use client";
import Image from "next/image";
import { useState } from "react";

export default function ParallaxBlock() {
  const [parallaxTransform, setParallaxTransform] = useState([
    `translateX(0px) translateY(0px)`,
    `translateX(0px) translateY(0px)`,
    `translateX(0px) translateY(0px)`,
    `translateX(0px) translateY(0px)`,
  ]);

  function parallax(event: MouseEvent) {
    const container = event.currentTarget;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const newParallaxTransform = parallaxTransform.map((transform, index) => {
      const x = (mouseX - centerX) * ((5 - index) * 0.015);
      const y = (mouseY - centerY) * ((5 - index) * 0.015);

      return `translateX(${x}px) translateY(${y}px)`;
    });

    console.log(newParallaxTransform);

    setParallaxTransform(newParallaxTransform);
  }

  return (
    <div
      className="parallax-wrap bg-cream relative h-full w-full"
      onMouseMove={parallax}
    >
      <Image
        src="/parallax_landscape/sun.png"
        className="absolute -bottom-0 w-full object-contain scale-110"
        style={{ transform: `${parallaxTransform[3]}` }}
        alt=""
        height={1488}
        width={2560}
      />
      <Image
        src="/parallax_landscape/4.png"
        className="absolute -bottom-0 w-full object-contain scale-110"
        style={{ transform: `${parallaxTransform[3]}` }}
        alt=""
        height={1488}
        width={2560}
      />
      <Image
        src="/parallax_landscape/3.png"
        className="absolute -bottom-0 w-full object-contain scale-110"
        style={{ transform: `${parallaxTransform[2]}` }}
        alt=""
        height={1488}
        width={2560}
      />
      <Image
        src="/parallax_landscape/logo_illu.png"
        className="absolute -bottom-0 w-full object-contain scale-110"
        style={{ transform: `${parallaxTransform[2]}` }}
        alt=""
        height={1488}
        width={2560}
      />
      <Image
        src="/parallax_landscape/2.png"
        className="absolute -bottom-0 w-full object-contain scale-110"
        style={{ transform: `${parallaxTransform[1]}` }}
        alt=""
        height={1488}
        width={2560}
      />
      <Image
        src="/parallax_landscape/1.png"
        className="absolute -bottom-0 w-full object-contain scale-110"
        style={{ transform: `${parallaxTransform[0]}` }}
        alt=""
        height={1488}
        width={2560}
      />
    </div>
  );
}
