"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderChoice({ title, link }: { title: string; link: string }) {
  const pathname= usePathname()

  return (
    <div className="flex items-center flex-col group uppercase tracking-tight relative">
      <Link
        href={link}
        className={`z-10 ${pathname === link && "font-semibold"}`}
      >
        {title}
      </Link>
      <div
        className={`z-0 absolute bottom-0 bg-yellow rounded-full w-6 transition-all ease-in-out duration-400 ${
          pathname === link ? "h-2.5 " : "h-0 group-hover:h-2"
        }`}
      ></div>
    </div>
  );
}

export default HeaderChoice;
