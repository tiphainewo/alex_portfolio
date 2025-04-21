/// <reference types="vite-plugin-svgr/client" />
import TwitterIcon from "src/assets/x.svg?react";
import InstagramIcon from "src/assets/instagram.svg?react";
import BlueskyIcon from "src/assets/bluesky.svg?react";
import ArtstationIcon from "src/assets/artstation.svg?react";

type SocialBlockProps = {
  icon: string;
  link: string;
  title: string;
};

export default function SocialBlock({ icon, link, title }: SocialBlockProps) {
  return (
    <a href={link} target="_blank" title={title}>
      {/* <img src={`src/assets/${icon}.svg`} className="!text-cyan h-full" /> */}
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
