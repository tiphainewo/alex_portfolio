import GallerySection from "./components/GallerySection";
import {
  game_art_images,
  landscape_images,
  other_images,
} from "./components/galleryImages";

function GalleryPage() {
  return (
    <div className="h-full w-full flex-1 flex flex-col gap-16 my-12">
      <GallerySection
        title="Game art"
        images={game_art_images}
        titleColor="cyan"
        titlePosition="start"
      />

      <GallerySection
        title="Landscapes"
        images={landscape_images}
        titleColor="yellow"
        titlePosition="end"
      />

      <GallerySection
        title="Other stuff"
        images={other_images}
        titleColor="cyan"
        titlePosition="start"
      />
    </div>
  );
}

export default GalleryPage;
