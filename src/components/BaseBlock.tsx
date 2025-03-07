import { ReactNode } from "react";

type BaseBlockProps = {
  children: ReactNode;
  customClasses?: string;
};

export default function BaseBlock({ children, customClasses }: BaseBlockProps) {
  return (
    <div className={`bg-purple rounded-lg overflow-clip ${customClasses}`}>{children}</div>
  );
}
