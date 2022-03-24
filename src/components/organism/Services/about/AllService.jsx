import React from "react";

const AllService = ({ img, title, desc }) => {
  return (
    <div className="md:w-4/12 w-full rounded overflow-hidden">
      <div className="text-center">
        <img src={`/img/${img}`} className="w-full" alt="" />
        <div className="p-2 mt-3">
          <p className="text-xl text-black">{title}</p>
          <p className="text-dark/80 mt-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AllService;
