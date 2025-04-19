import { NavLink, useLocation } from "react-router";

function HeaderChoice({ title, link }: { title: string; link: string }) {
  const location = useLocation();

  return (
    <div className="flex items-center flex-col group uppercase tracking-tight relative">
      <NavLink
        to={link}
        className={`z-10 ${location.pathname === link && "font-semibold"}`}
      >
        {title}
      </NavLink>
      <div
        className={`z-0 absolute bottom-0 bg-yellow rounded-full w-6 transition-all ease-in-out duration-400 ${
          location.pathname === link ? "h-2 " : "h-0 group-hover:h-2"
        }`}
      ></div>
    </div>
  );
}

export default HeaderChoice;
