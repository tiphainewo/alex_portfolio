import BaseBlock from "./components/BaseBlock";
import BlockContentImage from "./components/BlockContentImage";
import SocialBlock from "./components/SocialBlock";

function HomePage() {
  return (
    <div className="grid w-full grid-cols-6 grid-rows-7 gap-4 my-4 flex-1">
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

      <BaseBlock customClasses="row-span-4 col-span-4 aspect-video">
        <img
          src="src/assets/hero_art.png"
          className="h-full w-full object-cover"
        />
      </BaseBlock>

      <BaseBlock customClasses="row-span-3 col-span-2" link={"/gallery"}>
        <BlockContentImage
          title="Gallery"
          shadowed
          image="src/assets/game_art.png"
        />
      </BaseBlock>

      <BaseBlock customClasses="row-span-2 col-span-1" link={"/projects"}>
        <BlockContentImage
          title="Projects"
          shadowed
          image="src/assets/projects_art.jpg"
        />
      </BaseBlock>

      <BaseBlock
        customClasses="row-span-2 col-span-1"
        link={"https://itch.io/xeleph"}
      >
        <BlockContentImage
          title="Shop"
          shadowed
          image="src/assets/game_art.png"
        />
      </BaseBlock>

      <BaseBlock customClasses="row-span-2 col-span-2" link={"/contact"}>
        <div className="text-center">Contact</div>
      </BaseBlock>

      <BaseBlock customClasses="row-span-1 col-span-2">
        <div>little filler</div>
      </BaseBlock>
    </div>
  );
}

export default HomePage;
