import AboutBlock from "../components/AboutBlock";
import BaseBlock from "../components/BaseBlock";
import BaseBlockContent from "../components/BaseBlockContent";
import BlockContentImage from "../components/BlockContentImage";
import ContactBlock from "../components/ContactBlock";
import FillerBlock from "../components/FillerBlock";
import GalleryBlock from "../components/GalleryBlock";
import ParallaxBlock from "../components/ParallaxBlock";
import TwitterBlock from "../components/TwitterBlock";

function HomePage() {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-10 lg:grid-rows-12 my-8 gap-6 flex-1 min-h-0 min-w-0 lg:h-fit justify-center ">
      <BaseBlock customClasses="row-span-1 lg:row-span-3 row-start-1 lg:col-span-3 lg:col-start-1">
        <AboutBlock />
      </BaseBlock>

      <BaseBlock customClasses="row-span-1 lg:row-span-6 lg:col-span-7 lg:aspect-video row-start-1 lg:col-start-4">
        <ParallaxBlock />
      </BaseBlock>

      <BaseBlock
        customClasses="row-span-1 lg:row-span-4 lg:row-start-4 lg:col-span-3 lg:col-start-1"
        link={"/gallery"}
      >
        <GalleryBlock />
      </BaseBlock>

      <BaseBlock customClasses="hidden lg:block row-span-1 lg:row-start-8 lg:col-start-1 lg:col-span-3 max-h-full">
        <FillerBlock />
      </BaseBlock>

      <BaseBlock customClasses="max-h-full overflow-hidden min-h-0 min-w-0 w-full row-span-1 lg:row-span-2 lg:col-start-4 lg:col-span-4">
        <ContactBlock />
      </BaseBlock>

      <BaseBlock customClasses="row-span-1 lg:row-span-6 lg:col-span-3 lg:col-start-8">
        <TwitterBlock />
      </BaseBlock>

      {/* TODO faut pas que ça dépasse quand ça over */}
      <BaseBlock
        customClasses="row-span-1 lg:row-span-4 lg:row-start-9 lg:col-start-1 lg:col-span-4"
        link={"/projects"}
      >
        <BaseBlockContent title="Projects" color="red">
          <BlockContentImage image="/projects_art.jpg" />
        </BaseBlockContent>
      </BaseBlock>

      <BaseBlock
        customClasses="row-span-1 lg:row-span-4 lg:row-start-9 lg:col-start-5 lg:col-span-3"
        link={"/shop"}
      >
        <BaseBlockContent title="Shop" color="yellow">
          <BlockContentImage image="/shop_art.png" />
        </BaseBlockContent>
      </BaseBlock>
    </div>
  );
}

export default HomePage;
