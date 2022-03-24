import React from "react";
import ButtonDowload from "./ButtonDowload";
import NavBrand from "./NavBrand";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="mx-auto py-5 bg-primary/95 w-full text-white flex justify-between px-11 font-sans items-center">
      <NavBrand />
      <NavLink />
      <ButtonDowload />
    </div>
  );
};

export default Navbar;
