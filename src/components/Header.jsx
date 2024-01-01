import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./../assets/images/logo.svg";
import { faBars, faCaretDown, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  const [nav, setNav] = useState(false);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Event listener to track window size changes
    window.addEventListener("resize", handleWindowSizeChange);

    // Initial check for screen width
    setIsMobile(window.innerWidth < 768);

    // Clean up the event listener to avoid memory leaks
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <header>
      {/* Mobile header */}
      {isMobile && (
        <div className="md:hidden w-screen relative flex flex-row justify-between items-center p-4">
          <img src={Logo} alt="logo"></img>
          <FontAwesomeIcon
            icon={nav ? faX : faBars}
            size="lg"
            className="absolute right-4 top-4 z-10"
            onClick={() => setNav(!nav)}
          />

          {/* Mobile menu overlay */}
          <div
            onClick={() => setNav(false)}
            className={`${
              nav ? "fixed" : "hidden"
            }  bg-black/40 h-screen w-screen top-0 left-0`}
          ></div>

          {/* Mobile menu collapsed */}
          <MobileMenu nav={nav} />
        </div>
      )}

      {/* Tablet & Desktop header */}
      {!isMobile && (
        <div className="hidden md:flex w-screen items-center justify-between flex-row md:py-8 md:px-10">
          <img src={Logo} className="cursor-pointer" alt="logo"></img>
          <DesktopMenu />
          <div className="flex flex-row gap-6">
            <button className="text-gray-500 hover:text-black duration-200">
              Login
            </button>
            <button className="text-gray-500 border-2 border-gray-500 rounded-md py-2 px-4 hover:border-black hover:text-black duration-200">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
