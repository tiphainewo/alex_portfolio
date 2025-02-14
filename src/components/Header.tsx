import HeaderChoice from "./HeaderChoice";

function Header() {
  return (
    <div className="flex bg-cream p-1 pl-4 pr-8 rounded-b-2xl gap-10 h-18 items-center ">
      <img src="icon_logo.png" className="mr-auto max-h-full" />
      <HeaderChoice title={"Home"} link={"/"} />
      <HeaderChoice title={"Gallery"} link={"/gallery"} />
      <HeaderChoice title={"Shop"} link={"/shop"} />
      <HeaderChoice title={"Contact"} link={"/contact"} />
    </div>
  );
}

export default Header;
