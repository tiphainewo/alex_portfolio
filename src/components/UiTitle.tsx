type UiTitleProps = {
  title: string;
  variant: "black" | "white";
  color: "purple" | "yellow" | "cyan" | "red";
  tickPosition?: "start" | "end";
};

function UiTitle({
  title,
  variant,
  color,
  tickPosition = "start",
}: UiTitleProps) {
  const colorVariants = {
    purple: "bg-purple",
    yellow: "bg-yellow",
    cyan: "bg-cyan",
    red: "bg-red",
  };

  return (
    <div className="relative w-fit flex items-center gap-3">
      <div className={`h-4 aspect-square ${colorVariants[color]}`}></div>
      <p
        className={`text-2xl z-10 relative font-pixel ${
          variant == "white" && "text-white"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default UiTitle;
