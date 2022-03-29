import React from "react";

const FooterLink = ({ title, links }) => {
  return (
    <div className="md:w-4/12">
      <p className="mb-3 text-white/90 text-sm font-bold uppercase ">{title}</p>
      <ul>
        {links.map((link, i) => (
          <li className="text-white/80 mt-1 hover:text-white" key={i}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLink;
