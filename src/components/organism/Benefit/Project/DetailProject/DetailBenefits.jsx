import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const DetailBenefits = ({ logo, title, desc }) => {
  return (
    <div className="flex items-center mt-3  justify-evenly rounded-3xl text-seccondary bg-white px-3 py-5  shadow-sm ">
      <div className="md:text-3xl text-2xl">{logo}</div>
      <div className="md:px-1 px-3">
        <p className="text-lg">{title}</p>
        <p className="text-dark/80 max-w-[405px]">{desc}</p>
      </div>
      <div className="md:text-3xl text-2xl">
        <BsFillArrowRightCircleFill className="cursor-pointer" />
      </div>
    </div>
  );
};

export default DetailBenefits;
