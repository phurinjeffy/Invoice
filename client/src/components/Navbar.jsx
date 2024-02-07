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
      path: "/invoices",
      icon: <StorageIcon />,
    },
    {
      id: 3,
      name: "Partner",
      path: "/partners",
      icon: <ContactPageIcon />,
    },
  ];

  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-8 py-4 mt-5">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold">
          <Link to="/">
            Invoice <span className="text-red-400">App</span>
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
                className={`font-semibold hover:text-red-400 flex align-middle gap-2 ${
                  location.pathname === path ? 'text-red-400' : ''
                }`}
              >
                {icon}
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden mt-8 flex justify-center items-center gap-6">
          {links.map(({ id, name, path }) => (
            <Link
              key={id}
              to={path}
              className="font-semibold hover:text-red-400"
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
