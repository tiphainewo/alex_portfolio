import AboutBlock from "../components/AboutBlock";
import BaseBlock from "../components/BaseBlock";
import BlockContentImage from "../components/BlockContentImage";
import ContactBlock from "../components/ContactBlock";
import FillerBlock from "../components/FillerBlock";
import GalleryBlock from "../components/GalleryBlock";
import ParallaxBlock from "../components/ParallaxBlock";

function HomePage() {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-6 lg:grid-rows-7 gap-4 my-4 flex-1 min-h-0 min-w-0 lg:h-fit ">
      <BaseBlock customClasses="row-span-1 lg:row-span-2 lg:col-span-2">
        <AboutBlock />
      </BaseBlock>

      <BaseBlock customClasses="row-span-1 lg:row-span-5 lg:col-span-4 lg:aspect-video">
        <ParallaxBlock />
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
          image="/projects_art.jpg"
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
          image="/shop_art.png"
        />
      </BaseBlock>

      <BaseBlock customClasses="row-span-1 lg:row-span-2 lg:col-span-2 max-h-full overflow-hidden min-h-0 min-w-0">
        <ContactBlock />
      </BaseBlock>

      <BaseBlock customClasses="hidden lg:block row-span-1 col-span-2 max-h-full">
        <FillerBlock />
      </BaseBlock>
    </div>
  );
}

export default HomePage;
