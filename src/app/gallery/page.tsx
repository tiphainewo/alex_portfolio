"use client";

import UiButton from "../../components/UiButton";
import UiTitle from "../../components/UiTitle";
import GallerySection from "./components/GallerySection";
import {
  game_art_images,
  landscape_images,
  other_images,
} from "./components/galleryImages";
import OpenInNewIcon from "../../../public/open_in_new.svg";

function GalleryPage() {
  return (
    <div className="h-full w-full flex-1 flex flex-col my-12 relative items-center">
      <GallerySection
        title="Game art"
        images={game_art_images}
        titleColor="cyan"
        titlePosition="start"
      />

      <div className="bg-purple w-2 h-16 "></div>

      <GallerySection
        title="Landscapes"
        images={landscape_images}
        titleColor="yellow"
        titlePosition="end"
      />

      <div className="bg-purple w-2 h-16"></div>

      <GallerySection
        title="Other stuff"
        images={other_images}
        titleColor="cyan"
        titlePosition="start"
      />

      <div className="bg-purple w-2 h-16"></div>

      <div className="bg-white shadow-custom rounded-lg px-6 h-20 items-center flex justify-between w-full">
        <div className="flex items-center gap-2">
          <UiTitle
            title="If you want to see more of my art"
            color="yellow"
            variant="black"
          />
          {/* <ArrowIcon className="w-10 h-8" /> */}
        </div>

        <UiButton
          click={() => window.open("https://artstation.com/xeleph", "_blank")}
        >
          <div className="flex items-center gap-2 text-lg">
            <OpenInNewIcon className="fill-purple" />
            Go to my artstation
          </div>
        </UiButton>
      </div>
    </div>
  );
}

export default GalleryPage;
