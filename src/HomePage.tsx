import AboutBlock from "./components/AboutBlock";
import BaseBlock from "./components/BaseBlock";
import BlockContentImage from "./components/BlockContentImage";
import GalleryBlock from "./components/GalleryBlock";
import UiButton from "./components/UiButton";
import UiTitle from "./components/UiTitle";
import ArrowIcon from "src/assets/arrow.svg?react";

function HomePage() {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-6 lg:grid-rows-7 gap-4 my-4 flex-1 min-h-0 min-w-0">
      <BaseBlock customClasses="row-span-1 lg:row-span-2 lg:col-span-2">
        <AboutBlock />
      </BaseBlock>

      <BaseBlock customClasses="row-span-1 lg:row-span-5 lg:col-span-4 lg:aspect-video">
        <img
          src="src/assets/hero_art.png"
          className="h-full w-full object-cover"
        />
      </BaseBlock>

      <BaseBlock
        customClasses="row-span-1 lg:row-span-4 lg:col-span-2"
        link={"/gallery"}
      >
        <GalleryBlock />
      </BaseBlock>

      <BaseBlock
        customClasses="row-span-1 lg:row-span-2 lg:col-span-1"
        link={"/projects"}
      >
        <BlockContentImage
          title="Projects"
          titleColor="red"
          tickPosition="end"
          shadowed
          image="src/assets/projects_art.jpg"
        />
      </BaseBlock>

      <BaseBlock
        customClasses="row-span-1 lg:row-span-2 lg:col-span-1"
        link={"/shop"}
      >
        <BlockContentImage
          title="Shop"
          titleColor="yellow"
          shadowed
          image="src/assets/game_art.png"
        />
      </BaseBlock>

      <BaseBlock customClasses="row-span-1 lg:row-span-2 lg:col-span-2 max-h-full overflow-hidden min-h-0 min-w-0">
        <div className="p-4 flex flex-col h-full max-h-full">
          <div className="flex-col">
            <UiTitle
              title="Want to work together ?"
              color="cyan"
              variant="black"
            />
            <p>My commissions are open !</p>
          </div>

          <div className="relative flex justify-between items-end grow max-h-full">
            <UiButton>
              <div className="flex gap-2">
                <ArrowIcon className="fill-purple" />
                Contact me
              </div>
            </UiButton>
            <img
              src="src/assets/hello_emote.png"
              className="absolute object-contain h-full right-0 bottom-0"
            />
          </div>
        </div>
      </BaseBlock>

      <BaseBlock customClasses="hidden lg:block row-span-1 col-span-2 max-h-full">
        <div className="group max-h-full relative">
          <img
            src="src/assets/filler.png"
            className="group-hover:opacity-0 absolute w-full translate-y-[-30%]"
          />
          <img
            src="src/assets/filler.gif"
            className="opacity-0 group-hover:opacity-100 absolute w-full translate-y-[-30%]"
          />
        </div>
      </BaseBlock>
    </div>
  );
}

export default HomePage;
