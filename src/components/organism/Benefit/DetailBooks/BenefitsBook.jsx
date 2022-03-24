import React from "react";
import SubTitleSection from "../../../molecule/SubTitleSection";
import ListBenefit from "./List-Benfits";

const BenefitsBook = ({ listBenefit }) => {
  return (
    <div className="md:w-6/12 w-full">
      <SubTitleSection tiltle={"MANFAAT BUKU"} />
      <div className="flex flex-col">
        <div className="">
          <p className="text-3xl mt-4">
            Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
          </p>
          <p className="text-dark/80 my-5 text-lg">
            "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang
            yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang
            yang jenius." - J.K Rowling
          </p>
        </div>
        {listBenefit.map((li, i) => (
          <ListBenefit key={i} title={li} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsBook;
