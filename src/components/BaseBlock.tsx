import { ReactNode } from "react";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const handleClick = () => {
    if (!link) return;
    navigate(link);
  };

  return (
    <div
      className={`bg-white shadow-custom rounded-lg overflow-clip ${customClasses}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
