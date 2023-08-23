import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import NavbarUser from "./NavbarUser";
import React from "react";
import Logo from "../Logo";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <nav className="bg-white sticky top-0 z-50 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <Logo />
        </Link>
        <NavbarUser
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
        <DropdownMenu
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      </div>
    </nav>
  );
};

export default Navbar;
