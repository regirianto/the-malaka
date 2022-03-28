import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineWeb } from "react-icons/md";
import SubTitileSection from "../../../../molecule/SubTitleSection";
import DetailBenefits from "./DetailBenefits";
const OtherBeneftisSection = ({ title, desc }) => {
  return (
    <div className="md:w-6/12 w-full">
      <SubTitileSection tiltle="SELAIN ITU" />
      <p className="text-3xl my-3">{title}</p>
      <p className="text-dark/80  ">{desc}</p>
      <div>
        <DetailBenefits
          logo={<MdOutlineWeb />}
          title="Live Demo Project"
          desc="Lihat live demo project yang akan kamu buat di akhir buku ini."
        />
        <DetailBenefits
          logo={<FiMessageSquare />}
          title="Dukungan Komunitas"
          desc="Sebuah server Discord berisi teman-teman yang akan membantu kamu."
        />
      </div>
    </div>
  );
};

export default OtherBeneftisSection;
