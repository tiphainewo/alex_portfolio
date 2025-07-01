import ArrowIcon from "../../public/simple_arrow.svg";

type ImageButtonProps = {
  direction: "left" | "right";
};

export default function ImageButton({ direction }: ImageButtonProps) {
  return (
    <div
      className={`absolute opacity-0 transition-all duration-300 group-hover:opacity-100 flex h-full top-0 items-center justify-center cursor-pointer ${
        direction == "left" ? "left-3" : "right-3"
      }`}
    >
      <div className="p-3 rounded-lg bg-white/90 hover:bg-white/100 shadow flex items-center justify-center">
        <ArrowIcon
          className={`fill-purple h-7 w-7 ${
            direction == "left" ? "rotate-y-180" : ""
          }`}
        />
      </div>
    </div>
  );
}
