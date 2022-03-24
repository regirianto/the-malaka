import React from "react";

const SubTitleSection = ({ tiltle, color }) => {
  return (
    <p
      className={`uppercase text-sm ${
        color ? "text-white" : "text-seccondary"
      } font-bold tracking-widest flex items-center`}
    >
      <span
        className={`inline-block w-8 h-[2px] overflow-hidden ${
          color ? "bg-white" : "bg-seccondary"
        } mr-2`}
      ></span>
      {tiltle}
    </p>
  );
};

export default SubTitleSection;
