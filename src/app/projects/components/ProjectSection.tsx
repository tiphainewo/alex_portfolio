"use client";
import Image from "next/image";
import UiTitle from "../../../components/UiTitle";
import { useState } from "react";
import { Project } from "./types";

function ProjectSection({
  project,
  titleColor,
  flexDirection,
}: {
  project: Project;
  titleColor: "cyan" | "yellow" | "purple";
  flexDirection: "row" | "reverse-row";
}) {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div
      className={`w-full h-full flex gap-4 ${
        flexDirection === "row" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col gap-4 w-2/3">
        <div className="aspect-video rounded-lg overflow-hidden shadow-custom relative">
          <Image
            src={`${project.images[selectedImage]}`}
            className="w-full"
            alt=""
            height={900}
            width={1600}
            quality={90}
          />
          <div className="absolute flex bottom-3 w-full justify-center">
            <div className="flex gap-2 w-fit p-2 px-4 bg-black/30 rounded-full">
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full cursor-pointer h-3 w-3 ${
                    selectedImage === i
                      ? "bg-cyan/100"
                      : "bg-white/70 hover:bg-white/100"
                  }`}
                  onClick={() => setSelectedImage(i)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-1/3">
        <div className="bg-white shadow-custom rounded-lg h-14 flex items-start flex-col gap-4 p-6 flex-1">
          <UiTitle title={project.title} color={titleColor} variant="black" />
          <div>{project.description}</div>
        </div>

        <div className="bg-white shadow-custom rounded-lg h-14 flex items-center px-6"></div>
      </div>
    </div>
  );
}

export default ProjectSection;
