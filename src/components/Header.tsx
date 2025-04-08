import { useState } from "react";
// React Router
import { Link } from "react-router-dom";
// Data
import navData from "../data/navData";
// React Icons
import { BiSearch, BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-primary-light py-5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-base font-serif text-text cursor-pointer group"
          >
            <span className="font-medium tracking-wide italic">
              eBooksMarketplace
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex relative max-w-md w-full mx-8">
            <input
              type="text"
              placeholder="Discover your next great read..."
              className="w-full py-2 border-b border-primary-light focus:border-primary focus:outline-none bg-transparent text-text placeholder-text-light font-serif text-xs"
            />
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <BiSearch className="text-primary" size={18} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navData.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  item.path === "/auth"
                    ? "text-primary-dark border-b border-primary pb-0.5 text-xs font-serif hover:text-text relative overflow-hidden group"
                    : "text-primary-dark hover:text-text transition-all duration-200 hover:scale-110 block"
                }
              >
                {item.path === "/auth" ? (
                  <>
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text transition-all duration-300 group-hover:w-full"></span>
                  </>
                ) : (
                  <div className="transition-transform duration-200 hover:scale-110">
                    <item.icon size={18} />
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-dark hover:text-text focus:outline-none transition-all duration-200 hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <BiX size={22} /> : <BiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen
              ? "max-h-[195px] opacity-100 border-t border-primary-light mt-4"
              : "max-h-0 opacity-0 border-t border-transparent mt-0"
          }`}
        >
          <div className="py-4 transform transition-transform duration-300 ease-out origin-top">
            {/* Mobile Search */}
            <div
              className="relative transform transition-opacity duration-300 ease-out"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: isMenuOpen ? "75ms" : "0ms",
              }}
            >
              <input
                type="text"
                placeholder="Discover your next great read..."
                className="w-full py-2 border-b border-primary-light focus:border-primary focus:outline-none bg-transparent text-text placeholder-text-light font-serif text-xs"
              />
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <BiSearch className="text-primary" size={18} />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 mt-4">
              {navData.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center text-primary-dark hover:text-text py-1 transform transition-all duration-200 ease-out hover:translate-x-2"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "translateY(0)"
                      : "translateY(-10px)",
                    transitionDelay: isMenuOpen
                      ? `${(index + 1) * 100}ms`
                      : "0ms",
                  }}
                  onClick={toggleMenu}
                >
                  <item.icon
                    size={16}
                    className="mr-2 transition-transform duration-200 hover:scale-110"
                  />
                  <span className="font-serif text-xs">{item.mobileLabel}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
