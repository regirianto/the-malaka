import React from "react";

const TitlePrice = ({ title, desc }) => {
  return (
    <div className="text-center  flex flex-col gap-y-3 items-center">
      <p className="px-5 py-3  bg-[#c6f4f81a] rounded-full text-seccondary uppercase w-[142px] font-bold text-sm">
        Harga Buku
      </p>
      <p className="text-white text-3xl">{title}</p>
      <p className="text-lg text-white/80 ">{desc}</p>
    </div>
  );
};

export default TitlePrice;
