"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderChoice({ title, link }: { title: string; link: string }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center flex-col group tracking-tight relative">
      <Link
        href={link}
        className={`z-10 font-pixel text-xl ${
          pathname === link && "text-purple"
        }`}
      >
        {title}
      </Link>
      <div
        className={`z-0 absolute -bottom-2 bg-purple w-2 aspect-square transition-all ease-in-out duration-200 ${
          pathname === link ? "h-2 " : "h-0 group-hover:h-2"
        }`}
      ></div>
    </div>
  );
}

export default HeaderChoice;
