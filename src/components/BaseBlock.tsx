import { ReactNode } from "react";

type BaseBlockProps = {
  children: ReactNode;
  customClasses?: string;
  link?: string;
};

export default function BaseBlock({ children, customClasses, link }: BaseBlockProps) {
  return (
    <a className={`bg-purple rounded-lg overflow-clip ${customClasses}`} href={link}>{children}</a>
  );
}
