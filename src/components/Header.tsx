import { useState } from "react";
// Components
import { Button } from ".";
// Icons
import { IoBookSharp } from "react-icons/io5";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemsCount = 1;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with Icon */}
          <div className="flex items-center gap-x-2 text-2xl font-bold">
            <IoBookSharp className="text-2xl text-primary" />
            <span className="text-secondary text-xl">eBook Marketplace</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 mx-8">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for ebooks..."
                className="w-full px-4 py-2 rounded-lg border border-gray-light focus:outline-none focus:border-primary"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-dark" />
            </div>
          </div>

          {/* Desktop Cart & Buttons */}
          <div className="hidden md:flex items-center gap-y-4">
            <div className="relative">
              <button className="p-2 hover:text-primary transition-colors">
                <FiShoppingCart size={24} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
            <div className="space-x-4 ml-8">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for ebooks..."
                className="w-full px-4 py-2 rounded-lg border border-gray-light focus:outline-none focus:border-primary"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-dark" />
            </div>
            <div className="flex items-center gap-2 relative">
              <FiShoppingCart size={24} />
              <span>Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 left-4 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Button variant="ghost" fullWidth>
                Login
              </Button>
              <Button fullWidth>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
