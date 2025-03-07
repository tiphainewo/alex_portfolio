type BlockContentImageProps = {
  title: string;
  shadowed?: boolean;
  image: string;
};

function BlockContentImage({title, shadowed, image}: BlockContentImageProps) {
    return <div className="h-full w-full flex items-end justify-start relative bg-cover p-6" style={{backgroundImage: `linear-gradient(0deg, rgba(46,54,77,1) 0%, rgba(46,54,77,0.34) 17%, rgba(46,54,77,0) 33%), url(${image})`}}>
        <div className={shadowed && "bg-black opacity-15"}></div>
        <p className="text-white text-2xl">{title}</p>
    </div>;
}

export default BlockContentImage;