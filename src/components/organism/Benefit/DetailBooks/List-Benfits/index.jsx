import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
const ListBenefit = ({ title }) => {
  return (
    <div className="flex items-center mb-3">
      <BsFillCheckCircleFill className="text-4xl mr-2  text-green-400" />
      <p className="text-dark/80 text-base">{title}</p>
    </div>
  );
};

export default ListBenefit;
