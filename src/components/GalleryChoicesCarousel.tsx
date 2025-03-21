import { useEffect } from "react";

type GalleryChoicesCarouselProps = {
  folder: string;
};

function GalleryChoicesCarousel({ folder }: GalleryChoicesCarouselProps) {
    const modules = import.meta.glob('/public/game_art/*.*')
    const imagePaths = Object.keys(modules).map(path => path.replace('/public', ''));


  return (
    <div className="w-full flex-1 my-4">
        {imagePaths.map((path, index) => (
                <img key={index} src={path} alt={`Image ${index}`} className="w-32 h-32 object-cover" />
            ))}
    </div>
  );
}

export default GalleryChoicesCarousel;
