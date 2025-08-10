"use client";
import { useRouter } from "next/navigation";
import UiButton from "./UiButton";
import UiTitle from "./UiTitle";
import ArrowIcon from "../../public/arrow.svg";
import Image from "next/image";

export default function ContactBlock() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="h-full max-h-full relative">
      <div className="p-6 flex flex-col h-full max-h-full ">
        <div className="flex-col">
          <UiTitle
            title="Want to work together ?"
            color="cyan"
            variant="black"
          />
        </div>

        <div className="relative flex justify-between items-end grow max-h-full">
          <div className="flex flex-col justify-between h-full">
            <p>My commissions are open !</p>
            <UiButton click={handleClick}>
              <div className="flex gap-2 mx-4">
                <ArrowIcon className="fill-purple" />
                Contact me
              </div>
            </UiButton>
          </div>
        </div>
      </div>
      <Image
        src="/hello_emote.png"
        className="absolute object-contain h-3/4 right-2 bottom-0 w-auto"
        alt=""
        height={470}
        width={360}
      />
    </div>
  );
}
