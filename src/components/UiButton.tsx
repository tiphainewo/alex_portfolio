import { ReactNode } from "react";

interface UiButtonProps {
  children: ReactNode;
  click: () => void;
}

export default function UiButton({ children, click }: UiButtonProps) {
  return (
    // TODO Button animation
    <div
      className="border-purple rounded-full border-2 border-b-4 text-purple p-2 px-6 hover:border-b-3 cursor-pointer transition-all w-fit"
      onMouseDown={click}
    >
      {children}
    </div>
  );
}
