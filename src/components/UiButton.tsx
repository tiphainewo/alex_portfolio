import { ReactNode } from "react";

interface UiButtonProps {
  children: ReactNode;
  click: () => void;
}

export default function UiButton({ children, click }: UiButtonProps) {
  return (
    // TODO Button animation
    <div
      className=" border-b-purple rounded-full border-2 border-b-4 p-1.5 px-3 hover:border-b-3 cursor-pointer transition-all w-fit border-black"
      onMouseDown={click}
    >
      {children}
    </div>
  );
}
