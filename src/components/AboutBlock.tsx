// https://ui.aceternity.com/components/background-gradient-animation
/* https://www.youtube.com/watch?v=Ml-B-W91gtw&t=6s */

import BaseBlockContent from "./BaseBlockContent";

export default function AboutBlock() {
  return (
    <BaseBlockContent title="Hi, I'm Xeleph !" color="purple">
      <p className="px-5 py-4">
        I’m a pixel artist based in France.
        <br />I am mainly an environment artist, I love to make game art such as
        tile sets, landscapes, assets, etc... But I also like to do other things
        like UI or character design.
      </p>
    </BaseBlockContent>
  );
}
