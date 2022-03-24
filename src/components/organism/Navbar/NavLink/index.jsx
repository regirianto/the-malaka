import React from "react";
import LinkMenu from "./LinkMenu";

const NavLink = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "For Everyone ", href: "/" },
    { title: "Benefit", href: "/" },
    { title: "Preview", href: "/" },
    { title: "Author", href: "/" },
  ];

  return (
    <div>
      <ul className="flex gap-6 text-base">
        {links.map((link, i) => {
          return (
            <LinkMenu
              title={link.title}
              href={link.href}
              key={i}
              active={i === 0 && true}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NavLink;
