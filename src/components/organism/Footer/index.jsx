import React from "react";
import About from "./About";
import Copyright from "./Copyright";
import FooterHeader from "./FooterHeader";

const Footer = () => {
  return (
    <div className="mt-32 flex flex-col gap-20 px-12 bg-primary text-white pt-16 pb-6 items-center">
      <FooterHeader
        title={"Sudah siap meningkatkan skill kamu?"}
        desc=" Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
          pertanyaan kamu di halaman bantuan."
      />
      <About />
      <Copyright />
    </div>
  );
};

export default Footer;
