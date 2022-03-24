import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import SubTitileSection from "../../../../molecule/SubTitleSection";
const OtherBeneftisSection = () => {
  return (
    <div className="md:w-6/12 w-full">
      <SubTitileSection tiltle="SELAIN ITU" />
      <p className="text-3xl my-3">
        Buku dengan studi kasus nyata, juga komunitas yang ramah
      </p>
      <p className="text-dark/80  ">
        Buku ini diakhiri dengan membangun website yang responsive dengan
        Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk
        bertanya ketika mengalami kesulitan.
      </p>
      <div>
        <div className="flex items-center mt-3  justify-evenly rounded-3xl text-seccondary bg-white px-3 py-5  shadow-sm ">
          <div className="md:text-3xl text-2xl">
            <MdOutlineWeb />
          </div>
          <div className="md:px-1 px-3">
            <p className="text-lg">Live Demo Project</p>
            <p className="text-dark/80 max-w-[405px]">
              Lihat live demo project yang akan kamu buat di akhir buku ini.
            </p>
          </div>
          <div className="md:text-3xl text-2xl">
            <BsFillArrowRightCircleFill className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center mt-3  justify-evenly rounded-3xl text-seccondary bg-white px-3 py-5 shadow-sm ">
          <div className="md:text-3xl text-2xl">
            <FiMessageSquare />
          </div>
          <div className="md:px-1 px-3">
            <p className="text-lg">Dukungan Komunitas</p>
            <p className="text-dark/80 max-w-[405px]">
              Sebuah server Discord berisi teman-teman yang akan membantu kamu.
            </p>
          </div>
          <div className="md:text-3xl text-2xl">
            <BsFillArrowRightCircleFill className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBeneftisSection;
