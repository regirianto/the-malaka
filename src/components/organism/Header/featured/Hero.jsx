import React from "react";

const Hero = () => {
  return (
    <div className=" md:w-6/12 md:relative w-full">
      <div className="md:absolute md:-top-80 md:-right-[9%]">
        <img
          src="/img/book.png"
          alt=""
          className="w-3/4 md:w-3/4 mx-auto md:drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
