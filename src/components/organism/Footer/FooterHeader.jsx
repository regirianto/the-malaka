import React from "react";
import Button from "../../atom/Button";

const FooterHeader = ({ title, desc }) => {
  return (
    <div className="flex gap-5 md:flex-row flex-col">
      <div className="">
        <p className="text-2xl font-medium mb-4 ">{title}</p>
        <p className="text-lg text-white/80 font-normal">{desc}</p>
      </div>
      <div className="flex gap-2 mx-auto ">
        <Button lg addClassname="bg-transparent/20  py-4 px-8">
          Pusat Bantuan
        </Button>
        <Button lg addClassname="bg-seccondary py-4 px-8">
          Mendaftar
        </Button>
      </div>
    </div>
  );
};

export default FooterHeader;
