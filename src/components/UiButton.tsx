import { ReactNode } from "react";

interface UiButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function UiButton({ children, onClick }: UiButtonProps) {
  return (
    // TODO Button animation
    <div
      className="border-purple rounded-full border-2 border-b-4 text-purple p-2 px-8 hover:border-b-3 cursor-pointer transition-all w-fit"
      onMouseDown={onClick}
    >
      {children}
    </div>
  );
}
