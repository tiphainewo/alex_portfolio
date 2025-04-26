import { useNavigate } from "react-router-dom";
import UiButton from "./UiButton";
import UiTitle from "./UiTitle";
import ArrowIcon from "src/assets/arrow.svg?react";

export default function ContactBlock() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="p-4 flex flex-col h-full max-h-full">
      <div className="flex-col">
        <UiTitle title="Want to work together ?" color="cyan" variant="black" />
      </div>

      <div className="relative flex justify-between items-end grow max-h-full">
        <div className="flex flex-col justify-between h-full">
          <p>My commissions are open !</p>
          <UiButton onClick={handleClick}>
            <div className="flex gap-2">
              <ArrowIcon className="fill-purple" />
              Contact me
            </div>
          </UiButton>
        </div>

        <img
          src="src/assets/hello_emote.png"
          className="absolute object-contain h-full right-0 bottom-0"
        />
      </div>
    </div>
  );
}
