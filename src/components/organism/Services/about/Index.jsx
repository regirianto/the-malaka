import React from "react";
import SubTitleSection from "../../../molecule/SubTitleSection";

const AboutBooks = ({ subTitle, about }) => {
  return (
    <div className="flex items-center justify-center md:flex-row flex-col gap-8">
      <div className="w-6/12">
        <SubTitleSection tiltle={"Buku ini untuk siapa"} />
        <p className="md:text-[32px] md:leading-[44px] text-2xl text-black mt-3">
          {subTitle}
        </p>
      </div>
      <div className="w-6/12">
        <p className="text-lg text-dark/80">{about}</p>
      </div>
    </div>
  );
};

export default AboutBooks;
