import Image from "next/image";
import HeaderChoice from "./HeaderChoice";
import SocialBlock from "./SocialBlock";

function Header() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 bg-white p-1 pr-8 pl-4 rounded-full gap-10 h-15 items-center justify-between shadow-custom">
      <Image
        src="/icon_logo.png"
        className="max-h-full w-auto aspect-square"
        alt=""
        height={536}
        width={536}
      />
      <div className="flex gap-6 items-baseline">
        <HeaderChoice title={"Home"} link={"/"} />
        <HeaderChoice title={"Gallery"} link={"/gallery"} />
        <HeaderChoice title={"Projects"} link={"/projects"} />
        <HeaderChoice title={"Shop"} link={"/shop"} />
        <HeaderChoice title={"Contact"} link={"/contact"} />
      </div>
      <div className="flex h-6 w-full justify-end gap-4">
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
    </div>
  );
}

export default Header;
