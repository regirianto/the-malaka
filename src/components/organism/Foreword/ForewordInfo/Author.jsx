import React from "react";
import SubTitleSection from "../../../molecule/SubTitleSection";

const Author = ({ name, account }) => {
  return (
    <div className="w-4/12  md:px-2">
      <SubTitleSection color={"white"} tiltle="Buku ini untuk siapa" />
      <p className="md:text-3xl text-xl font-bold md:mt-5 my-3">
        Kata Pengantar Dari Penulis Buku
      </p>
      <div className="w-full text-center border-b-2 border-white/30 md:my-12 my-8"></div>
      <div className="flex md:gap-4 gap-x-2 md:justify-start justify-center items-center">
        <img src="/img/avatar.png" alt="avatar" className="w-16" />
        <div className="">
          <p className="text-lg">{name}</p>
          <p className="text-sm text-white/80">{account}</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
