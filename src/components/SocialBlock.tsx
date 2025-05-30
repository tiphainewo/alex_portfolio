/// <reference types="vite-plugin-svgr/client" />
import TwitterIcon from "../../public/socials/x.svg";
import InstagramIcon from "../../public/socials/instagram.svg";
import BlueskyIcon from "../../public/socials/bluesky.svg";
import ArtstationIcon from "../../public/socials/artstation.svg";

type SocialBlockProps = {
  icon: string;
  link: string;
  title: string;
};

export default function SocialBlock({ icon, link, title }: SocialBlockProps) {
  return (
    <a href={link} target="_blank" title={title} className="">
      {icon == "x" && (
        <TwitterIcon className="fill-black hover:fill-cyan h-full transition-colors ease-in-out duration-300" />
      )}
      {icon == "instagram" && (
        <InstagramIcon className="fill-black hover:fill-red h-full transition-colors  ease-in-out duration-300" />
      )}
      {icon == "bluesky" && (
        <BlueskyIcon className="fill-black hover:fill-purple h-full transition-colors  ease-in-out duration-300" />
      )}
      {icon == "artstation" && (
        <ArtstationIcon className="fill-black hover:fill-yellow h-full transition-colors ease-in-out duration-300" />
      )}
    </a>
  );
}
