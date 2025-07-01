// https://ui.aceternity.com/components/background-gradient-animation
/* https://www.youtube.com/watch?v=Ml-B-W91gtw&t=6s */

export default function AboutBlock() {
  return (
    <div className="relative h-full">
      <div className=" absolute rounded-full bg-purple w-40 h-26 -right-8 -bottom-10"></div>
      <div className=" absolute rounded-full bg-yellow w-36 h-26 -right-10 -top-10 animate-infinite animate-ease-in-out"></div>

      <div className="absolute top-0 bottom-0 w-full h-full bg-white/50 backdrop-blur-3xl">
        {" "}
      </div>

      <div className="absolute inset-0 p-6 flex flex-col gap-4">
        <p className="text-2xl font-medium">Hi I'm Xeleph !</p>
        <p>
          I’m a pixel artist based in France and I specialize in landscapes and
          game art.
        </p>
      </div>
    </div>
  );
}
