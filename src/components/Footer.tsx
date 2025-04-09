// React Router
import { Link } from "react-router-dom";
// Data
import { footerLinks, socialLinks } from "../data/footerData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-light">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-base font-serif text-primary-dark">
              <span className="font-medium tracking-wide italic">
                eBooksMarketplace
              </span>
            </Link>
            <p className="text-text-light text-xs mt-2">
              © {currentYear} eBooksMarketplace. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <ul className="flex justify-center space-x-6 text-xs">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-light hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:text-text transition-all duration-200 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
