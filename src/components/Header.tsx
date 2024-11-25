import { useState } from "react";
// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Theme
import { ThemeToggle } from "./ThemeToggle";
// Icons
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            {/* Logo and Search */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="text-xl sm:text-2xl font-bold whitespace-nowrap">
                <span className="text-primary">eBook</span>
                <span className="text-foreground"> Marketplace</span>
              </div>

              <div className="relative hidden md:block w-[250px] lg:w-[400px]">
                <Input
                  type="text"
                  placeholder="Search for ebooks..."
                  className="w-full pl-10 bg-background text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-accent"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  0
                </span>
              </Button>

              <ThemeToggle />

              <Button variant="ghost" className="hover:bg-accent">
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-accent"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col gap-3 py-3">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for ebooks..."
                  className="w-full pl-10 bg-background text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>

              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-accent"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart (0)
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-accent"
              >
                Sign In
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
