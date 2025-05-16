import GalleryChoicesCarousel from "../../components/GalleryChoicesCarousel";
// import gameArtGif from "game_art/game_art_1.gif"

function GalleryPage() {
  return (
    <div className="w-full flex-1 my-4">
      <div>
        <div>
          <p className="text-xl">Game art</p>
          <div className="h-1 w-6 bg-purple rounded-full"></div>
        </div>

        <div className="w-full flex  gap-6">
          <div className="min-w-2/5 grow flex flex-col gap-6">
            <GalleryChoicesCarousel folder="game_art"/>
            <div className="bg-purple rounded-lg">Liste</div>
            <div className="rounded-lg bg-cream grow">description</div>
          </div>
          <div className="bg-purple rounded-lg overflow-hidden">
            {/* <Image src={gameArtGif.src}/> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
