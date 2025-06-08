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
  type,
  images,
}: {
  title: string;
  type: string;
  images: GalleryImage[];
}) {
  const [selectedImage, setSelectedImage] = useState(1);

  return (
    <div className="flex items-center flex-col group uppercase tracking-tight relative">
      <div className="flex flex-col gap-4">
        <div className="bg-white shadow-custom rounded-lg p-4">
          <UiTitle title={title} color="cyan" variant="black" />
        </div>

        <div className="w-full grid grid-cols-5 grid-rows-3">
          <div className="col-span-3 row-span-2 aspect-video rounded-lg overflow-hidden shadow-custom">
            <Image
              src={`/gallery/${type}/${selectedImage}.png`}
              className="w-full"
              alt=""
              height={900}
              width={1600}
            />
          </div>

          {images.map((e, i) => (
            <Image src={`/gallery/${type}/${i}.png`} key={i} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
