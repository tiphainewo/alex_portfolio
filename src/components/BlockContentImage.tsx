import UiTitle from "./UiTitle";

type BlockContentImageProps = {
  title: string;
  shadowed?: boolean;
  image: string;
  titleColor: "purple" | "yellow" | "cyan" | "red";
  tickPosition?: "start" | "end";
};

function BlockContentImage({
  title,
  shadowed,
  image,
  titleColor,
  tickPosition,
}: BlockContentImageProps) {
  // return <div className="h-full w-full flex items-end justify-start relative bg-cover p-6 hover:scale-102 transition-transform duration-500" style={{backgroundImage: `linear-gradient(0deg, rgba(46,54,77,1) 0%, rgba(46,54,77,0.34) 17%, rgba(46,54,77,0) 33%), url(${image})`}}>
  //     <div className={shadowed && "bg-black opacity-15"}></div>
  //     <p className="text-white text-2xl">{title}</p>
  // </div>;

  return (
    <div
      className="group h-full w-full flex items-end justify-start relative bg-cover cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(46,54,77,1) 0%, rgba(46,54,77,0.34) 17%, rgba(46,54,77,0) 33%)`,
      }}
    >
      {/* <div className={shadowed && "bg-black opacity-15"}></div> */}

      <div className="h-full w-full relative group-hover:scale-102 transition-all duration-500">
        {shadowed && (
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/0 to-20% group-hover:translate-y-5 transition-all duration-500"></div>
        )}
        <img
          src={image}
          className="h-full w-full object-cover transition-all"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <UiTitle
          title={title}
          variant="white"
          color={titleColor}
          tickPosition={tickPosition}
        />
      </div>
    </div>
  );
}

export default BlockContentImage;
