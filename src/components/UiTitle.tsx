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
    <div className="relative w-fit">
      <div
        className={`z-0 absolute bottom-0.5 rounded-full w-5 h-2.5 ${
          colorVariants[color]
        } ${tickPosition == "end" ? "-right-2" : "-left-1"}`}
      ></div>
      <p
        className={`text-2xl z-10 relative font-medium ${
          variant == "white" && "text-white"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default UiTitle;
