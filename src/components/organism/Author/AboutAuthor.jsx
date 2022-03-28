import React from "react";

const AboutAuthor = ({ title, desc, subTitle }) => {
  return (
    <div className="md:w-6/12">
      <div className="flex flex-col gap-4">
        <p className="text-seccondary font-bold text-lg tracking-widest">
          {title}
        </p>
        <p className="text-3xl text-dark">{subTitle}</p>
        <p className="leading-8 ">{desc}</p>
      </div>
    </div>
  );
};

export default AboutAuthor;
