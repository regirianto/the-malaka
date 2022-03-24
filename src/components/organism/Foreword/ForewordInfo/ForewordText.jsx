import React from "react";

const ForewordText = ({ text }) => {
  return (
    <div className="w-8/12 md:px-2 ">
      <p className=" md:text-lg md:leading-[35px] leading-[30px]">{text}</p>
    </div>
  );
};

export default ForewordText;
