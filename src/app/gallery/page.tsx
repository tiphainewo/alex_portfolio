import GallerySection from "./components/GallerySection";

function GalleryPage() {
  const game_art_images = [
    {
      id: 1,
      src: "/gallery/game_art/1.png",
      title: "RPG Assets",
      description:
        "Assets that I’m building as a personal project.\nThe aim is to create a bright and warm place that you'd like to explore",
    },
    {
      id: 2,
      src: "/gallery/game_art/2.png",
      title: "MiniKnight Mockup",
      description:
        "Here's a mock-up I made in 2022. It's inspired by dungeon crawlers like “The Binding of Isaac”.\n\nMy goal was to practice this kind of perspective.",
    },
    {
      id: 3,
      src: "/gallery/game_art/3.png",
      title: "Side-view dungeon assets",
      description:
        "This is one of my Itch.io asset packs.\nThe pack is relatively low-key, which makes the scenery pop and even more so for the only coloured elements, the collectibles.",
    },
    {
      id: 4,
      src: "/gallery/game_art/4.png",
      title: "Skull Archipelago",
      description:
        "I made this for a monthly challenge, “Pixel encore”.\nThe aim was to give it a treasure map and video game map look.",
    },
    {
      id: 5,
      src: "/gallery/game_art/5.png",
      title: "The abandoned building",
      description:
        "Here's an example of the kind of building I can do.\nThe biggest challenge was to render the roof tiles while maintaining a blocky style.",
    },
  ];
  return (
    <div className="w-full flex-1 my-4">
      <GallerySection
        title="Game art"
        type="game_art"
        images={game_art_images}
      />
    </div>
  );
}

export default GalleryPage;
