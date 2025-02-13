import BaseBlock from "./components/BaseBlock";

function HomePage() {
  return (
    <div className="grid w-full">
      <BaseBlock>
        <div className="text-center">
          Coucou, bienvenue sur mon super site :)
        </div>
      </BaseBlock>
      <BaseBlock>
        <div className="text-center">
          Coucou, bienvenue sur mon super site :)
        </div>
      </BaseBlock>
      <BaseBlock>
        <div className="text-center">
          Coucou, bienvenue sur mon super site :)
        </div>
      </BaseBlock>
    </div>
  );
}

export default HomePage;
