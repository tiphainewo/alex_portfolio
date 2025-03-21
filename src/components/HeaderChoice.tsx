import { NavLink, useLocation } from "react-router";

function HeaderChoice({ title, link }: { title: string; link: string }) {
  const location = useLocation();

  return (
    <div className="flex items-center flex-col group">
      <NavLink to={link} className={location.pathname === link && "font-bold-shadow"}>
        {title}
      </NavLink>
      <div className={` bg-purple rounded-full h-1 transition-all ease-in-out duration-400 ${location.pathname === link ? "w-6 " : "w-0 group-hover:w-2"}`}></div>
    </div>
  );
}

export default HeaderChoice;
