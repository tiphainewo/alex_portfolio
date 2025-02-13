import { ReactNode } from "react";

type BaseBlockProps = {
  children: ReactNode;
  width?: string;
  height?: string;
};

export default function BaseBlock({
  children,
  width = "auto",
  height = "auto",
}: BaseBlockProps) {
  return <div className="bg-gray-400 rounded-md">{children}</div>;
}
