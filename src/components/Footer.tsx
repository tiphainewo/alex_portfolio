import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col items-end">
      <Image
        src="/footer_character.png"
        className="mx-32 h-3 w-auto object-fit"
        alt=""
        height={50}
        width={520}
      />
      <div className="flex bg-black p-1 pl-4 pr-8 rounded-t-2xl gap-10 h-18 items-center w-full"></div>
    </div>
  );
}

export default Footer;
