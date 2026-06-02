"use client";
import { useRouter } from "next/navigation";
import UiButton from "./UiButton";
import ArrowIcon from "../../public/arrow.svg";
import Image from "next/image";
import BaseBlockContent from "./BaseBlockContent";

export default function ContactBlock() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <BaseBlockContent title="Want to work together?" color="cyan">
      <div className="flex flex-col h-full p-4 gap-4">
        <p>My commissions are open !</p>
        <UiButton click={handleClick}>
          <div className="flex gap-2 items-center font-medium pr-3">
            <ArrowIcon className="fill-black h-5" />
            Contact me
          </div>
        </UiButton>
      </div>
      <Image
        src="/hello_emote.png"
        className="absolute object-contain h-9/10 right-6 bottom-0 w-auto"
        alt=""
        height={470}
        width={360}
        quality={100}
      />
    </BaseBlockContent>
  );
}
