import BaseBlock from "./components/BaseBlock";
import BlockContentImage from "./components/BlockContentImage";
import SocialBlock from "./components/SocialBlock";

function HomePage() {
  return (
    <div className="grid w-full grid-cols-6 grid-rows-8 gap-6 my-4 flex-1">
      <BaseBlock customClasses="row-span-2 col-span-2">
        <div className="p-6">
          <p className="text-3xl">Hi I'm Xeleph !</p>
          <br />
          I’m a pixel artist based in France and I specialize in landscapes and
          game art. <br />
          <br />
          Here is some of my work !
        </div>
      </BaseBlock>

      <BaseBlock customClasses="row-span-4 col-span-4">
        <img src="hero_art.png" className="h-full w-full object-cover"/>
      </BaseBlock>

      <BaseBlock customClasses="row-span-1 col-span-2 h-fit">
        <div className="flex min-h-full min-w-1/2 items-center justify-center gap-8 m-8">
          <SocialBlock
            icon="x"
            link="https://x.com/xeleph_"
            title="See on X (formerly Twitter)"
          />
          <SocialBlock
            icon="bluesky"
            link="https://web-cdn.bsky.app/profile/xeleph.bsky.social"
            title="See on Bluesky"
          />
          <SocialBlock
            icon="instagram"
            link="https://www.instagram.com/xeleph.pixel/"
            title="See on Instagram"
          />
          <SocialBlock
            icon="artstation"
            link="https://www.artstation.com/xeleph"
            title="See on Artstation"
          />
        </div>
      </BaseBlock>

      <BaseBlock customClasses="row-span-3 col-span-2">
        <BlockContentImage title="Game art" shadowed image="game_art.png"/>
      </BaseBlock>

      <BaseBlock customClasses="row-span-4 col-span-2">
        <BlockContentImage title="Landscapes" shadowed image="icon_logo.png"/>
      </BaseBlock>

      <BaseBlock customClasses="row-span-2 col-span-1">
        <div className="text-center">Contact</div>
      </BaseBlock>

      <BaseBlock customClasses="row-span-4 col-span-1">
        <BlockContentImage title="And more !" shadowed image="icon_logo.png"/>
      </BaseBlock>

      <BaseBlock customClasses="row-span-2 col-span-1">
        <BlockContentImage title="Buy my asset packs" shadowed image="icon_logo.png"/>
      </BaseBlock>

      <BaseBlock customClasses="row-span-2 col-span-1">
        <div className="text-center">Shop</div>
      </BaseBlock>

      <BaseBlock customClasses="row-span-2 col-span-1">
        <img src=""/>
      </BaseBlock>
    </div>
  );
}

export default HomePage;
