"use client";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type BaseBlockProps = {
  children: ReactNode;
  customClasses?: string;
  link?: string;
};
// https://ui.aceternity.com/components/background-gradient-animation
export default function BaseBlock({
  children,
  customClasses,
  link,
}: BaseBlockProps) {
  const router = useRouter();
  const handleClick = () => {
    if (!link) return;
    router.push(link);
  };

  return (
    <div
      className={`bg-white rounded-lg overflow-clip outline-1 outline-black' ${customClasses}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
