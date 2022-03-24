import React from "react";
import Featured from "./featured/Featured";
import Hero from "./featured/Hero";

const Header = () => {
  return (
    <div className="bg-primary/95  text-white md:h-screen flex flex-col-reverse items-center justify-center md:relative md:px-12 md:flex-row  text-center md:text-left md:py-28 md:rounded-br-[350px]">
      <Featured
        sold="Sudah Terjual 501,234+"
        tagline="Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS"
        desc="Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan diakhiri dengan membangun sebuah website yang responsive dengan Tailwind CSS."
      />
      <Hero />
    </div>
  );
};

export default Header;
