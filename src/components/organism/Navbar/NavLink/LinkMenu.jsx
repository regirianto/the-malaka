import React from "react";

const LinkMenu = ({ title, href, active }) => {
  return (
    <li
      className={`${active ? "text-white" : "text-white/80"} hover:text-white`}
    >
      <a href={href}>{title}</a>
    </li>
  );
};

export default LinkMenu;
