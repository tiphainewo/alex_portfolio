"use client";
import { useState } from "react";
import BlockContentImage from "./BlockContentImage";

function GalleryBlock() {
  const [selectedCategory, setSelectedCategory] = useState("gameArt");

  const categories = [
    { id: "gameArt", label: "Game art", image: "game_art.png" },
    { id: "landscapes", label: "Landscapes", image: "landscape_art.jpg" },
    { id: "otherStuff", label: "Other stuff", image: "other_stuff_art.png" },
  ];

  return (
    <div className="w-full h-full relative cursor-pointer">
      <BlockContentImage
        title="Gallery"
        titleColor="cyan"
        shadowed
        image={`/${
          categories.find((category) => category.id == selectedCategory)?.image
        }`}
      />

      <div className="absolute right-0 bottom-0 text-white items-end flex flex-col p-4 gap-1 z-10">
        {categories.map((category) => {
          return (
            <div className="relative" key={category.id}>
              <p
                className={`relative z-10 uppercase cursor-pointer hover:font-semibold ${
                  selectedCategory == category.id && "font-semibold"
                }`}
                onMouseEnter={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </p>
              {selectedCategory == category.id && (
                <div
                  className={`z-0 absolute -right-2 bottom-0.5 rounded-full w-5 h-2.5 bg-purple `}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GalleryBlock;
