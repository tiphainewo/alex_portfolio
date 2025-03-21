import { ReactNode } from "react";

type BaseBlockProps = {
  children: ReactNode;
  customClasses?: string;
  link?: string;
};
// https://ui.aceternity.com/components/background-gradient-animation
export default function BaseBlock({ children, customClasses, link }: BaseBlockProps) {
  return (
    <div className={`bg-purple rounded-lg overflow-clip ${customClasses}`} href={link}>{children}</div>
  );
}
