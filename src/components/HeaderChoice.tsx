import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

function HeaderChoice({ title, link }: { title: string; link: string }) {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="flex items-center flex-col group">
      <NavLink to={link} className={location.pathname === link && "font-bold-shadow"}>
        {title}
      </NavLink>
      <div className={` bg-purple rounded-full h-1 ${location.pathname === link ? "w-6 motion-preset-pop" : "w-0 group-hover:w-2"}`}></div>
    </div>
  );
}

export default HeaderChoice;
