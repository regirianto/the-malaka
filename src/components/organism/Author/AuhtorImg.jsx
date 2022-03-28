import React from "react";

const AuhtorImg = ({ name, account }) => {
  return (
    <div className="md:w-6/12">
      <div className="relative">
        <img
          src="/img/author-img.png"
          alt="author"
          className="md:w-[552px]  m-auto drop-shadow-lg"
        />
        <div className="absolute md:w-[292px] md:h-[99px] bottom-[18%] left-[19%] bg-seccondary  md:py-6 md:px-9 py-4 px-5 text-white rounded-md">
          <p className="md:text-xl text:lg">{name}</p>
          <p className="text-white/80">{account}</p>
        </div>
      </div>
    </div>
  );
};

export default AuhtorImg;
