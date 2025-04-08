import { IconType } from "react-icons";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

export interface FooterLink {
  path: string;
  label: string;
}

export interface SocialLink {
  url: string;
  label: string;
  icon: IconType;
}

export const footerLinks: FooterLink[] = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/terms",
    label: "Terms",
  },
  {
    path: "/privacy",
    label: "Privacy",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    url: "https://twitter.com",
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    url: "https://instagram.com",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    url: "https://facebook.com",
    label: "Facebook",
    icon: FaFacebookF,
  },
];

export default { footerLinks, socialLinks };
