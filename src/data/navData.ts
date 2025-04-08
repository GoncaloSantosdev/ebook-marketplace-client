import { IconType } from "react-icons";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiBookOpen } from "react-icons/bi";

export interface NavItem {
  path: string;
  label: string;
  icon: IconType;
  mobileLabel?: string;
}

const navData: NavItem[] = [
  {
    path: "/bookmarks",
    label: "Bookmarks",
    icon: BsBookmarkHeart,
    mobileLabel: "Bookmarks",
  },
  {
    path: "/cart",
    label: "Cart",
    icon: HiOutlineShoppingBag,
    mobileLabel: "Cart",
  },
  {
    path: "/auth",
    label: "Register",
    icon: BiBookOpen,
    mobileLabel: "Register",
  },
];

export default navData;
