import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StorageIcon from "@mui/icons-material/Storage";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Statistic",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      name: "Invoice",
      path: "invoices",
      icon: <StorageIcon />,
    },
    {
      id: 3,
      name: "Partner",
      path: "partners",
      icon: <ContactPageIcon />,
    },
  ];

  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full rounded-[20px] shadow-3xl px-8 py-4 mt-5">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold">
          <Link to="/">
            Invoices <span className="text-coral-red">app</span>
          </Link>
        </div>

        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <MenuIcon />
        </div>

        <ul className="hidden md:flex justify-center space-x-4 items-center gap-8">
          {links.map(({ id, name, path, icon }) => (
            <li key={id}>
              <Link
                to={path}
                className={`leading-normal font-semibold hover:text-red-500 flex align-middle gap-2`}
              >
                {icon}
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden m-2">
          {links.map(({ id, name, path }) => (
            <Link
              key={id}
              to={path}
              className="block py-2 px-4 hover:text-red-500 hover:rounded-xl"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
