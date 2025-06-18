"use client";
import Image from "next/image";
import UiTitle from "../../../components/UiTitle";
import { useState } from "react";

type GalleryImage = {
  id: number;
  src: string;
  title: string;
  description: string;
};

function GallerySection({
  title,
  images,
  titleColor,
  titlePosition,
}: {
  title: string;
  images: GalleryImage[];
  titleColor: "cyan" | "yellow" | "purple";
  titlePosition: "start" | "end";
}) {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className=" w-full flex items-center flex-col group">
      <div className="w-full h-full flex flex-col gap-4">
        <div
          className={`bg-white shadow-custom rounded-lg h-14 flex items-center px-6 ${
            titlePosition == "end" && "justify-end"
          }`}
        >
          <UiTitle
            title={title}
            color={titleColor}
            variant="black"
            tickPosition={titlePosition}
          />
        </div>

        <div
          className={`flex gap-8 min-h-0 h-fit items-start justify-start ${
            titlePosition === "start" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="flex flex-col gap-4 w-2/3">
            <div className="aspect-video rounded-lg overflow-hidden shadow-custom relative">
              <Image
                src={`${images[selectedImage]?.src}`}
                className="w-full"
                alt=""
                height={900}
                width={1600}
                quality={90}
              />
              <div className="absolute flex bottom-3 w-full justify-center">
                <div className="flex gap-2 w-fit p-2 px-4 bg-black/30 rounded-full">
                  {[...Array(5)].map((_, i) => (
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
            <div className="flex flex-col gap-2 px-8 py-6 h-40 bg-white rounded-xl shadow-custom">
              <p className="uppercase font-semibold text-lg">
                {images[selectedImage]?.title}
              </p>
              <p className="leading-6 overflow-auto">
                {images[selectedImage]?.description}
              </p>
            </div>
          </div>

          <div className=" h-full w-1/3 grid grid-cols-2 grid-rows-3 gap-4">
            {images.map((e, i) => (
              <div
                key={i}
                className={`rounded-xl shadow-custom relative overflow-hidden ${
                  i == 2 ? "col-span-2" : "col-span-1"
                }`}
              >
                <Image
                  src={`${images[i]?.src}`}
                  alt=""
                  fill
                  className="object-cover cursor-pointer hover:scale-102 transition-all motion-ease-in-out ease-in-out duration-500 hover:brightness-85"
                  onClick={() => setSelectedImage(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
