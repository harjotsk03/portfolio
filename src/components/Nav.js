import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logoWebsite.svg";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setOpen(!open);
  };

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative">
      <div className="w-11/12 h-20 flex items-center rounded-2xl justify-between bg-transparent fixed top-4 lg:top-10 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={goHome}
          className="lg:hover:cursor-pointer  transition duration-1000 ease-in-out p-5 rounded-full"
        >
          <img src={logo} className="w-6 h-6" alt="Logo" />
        </button>

        <button
          className={`text-md z-60 lg:hover:bg-black p-5 rounded-full poppins-medium hover:cursor-pointer transition duration-1000 ease-in-out ${
            open
              ? "scale-110 text-black lg:hover:text-white"
              : "scale-90 text-black lg:hover:text-white "
          }`}
          onClick={toggleNav}
        >
          {open ? (
            <AiOutlineClose
              size={22}
              className="transition-transform duration-1000 ease-in-out"
            />
          ) : (
            <AiOutlineMenu
              size={24}
              className="transition-transform duration-1000 ease-in-out"
            />
          )}
        </button>
      </div>
      <div className={`menu__nav ${open ? "menu__nav--open" : ""}`}></div>
      <style jsx>{`
        .menu__nav {
          position: fixed;
          top: 0;
          right: -100vw; /* Hide menu initially */
          height: 100%;
          width: 100vw; /* Default width for desktop */
          overflow: hidden;
          background-color: #f1f1f1;
          transition: all 1.5s ease-in-out; /* Faster transition */
          z-index: 40;
        }
        .menu__nav--open {
          right: 0; /* Slide in */
        }
      `}</style>
    </div>
  );
};
