import HeaderChoice from "./HeaderChoice";

function Header() {
  return (
    <div className="flex bg-yellow-50 p-4 px-8 rounded-b-md gap-8 ">
      <img src="vite.svg" className="mr-auto" />
      <HeaderChoice title={"Home"} />
      <HeaderChoice title={"Gallery"} />
      <HeaderChoice title={"Shop"} />
      <HeaderChoice title={"Contact"} />
    </div>
  );
}

export default Header;
