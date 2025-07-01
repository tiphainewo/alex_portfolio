"use client";
import Image from "next/image";
import UiTitle from "../../../components/UiTitle";
import { useState } from "react";
import { Project } from "./types";
import ImageButton from "../../../components/ImageButton";

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

  const colorVariants = {
    purple: "bg-purple/50",
    yellow: "bg-yellow/70",
    cyan: "bg-cyan/50",
    red: "bg-red/60",
  };

  return (
    <div
      className={`w-full h-full flex gap-4 ${
        flexDirection === "row" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="group flex flex-col gap-4 w-2/3">
        <div className="aspect-video rounded-lg shadow-custom relative">
          <div className="overflow-hidden h-full w-full rounded-lg">
            <Image
              src={`${project.images[selectedImage]}`}
              className="w-full "
              alt=""
              height={900}
              width={1600}
              quality={90}
            />
          </div>
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
          <ImageButton direction="left" />
          <ImageButton direction="right" />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-1/3">
        <div className="bg-white shadow-custom rounded-lg h-14 flex items-start flex-col gap-4 p-6 flex-1">
          <UiTitle title={project.title} color={titleColor} variant="black" />
          <p>{project.description}</p>
        </div>

        <div className="bg-white shadow-custom rounded-lg h-auto flex gap-3 items-center p-6">
          {project.tags.map((tag) => (
            <div
              key={tag.id}
              className={`rounded-full p-1 px-6 ${colorVariants[tag.color]}`}
            >
              {tag.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
