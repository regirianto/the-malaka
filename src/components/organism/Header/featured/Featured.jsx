import React from "react";
import Button from "../../../atom/Button";
import { BiDownload } from "react-icons/bi";
import FeaturedTech from "./FeaturedTech";

const Featured = ({ sold, tagline, desc }) => {
  return (
    <div className="md:w-6/12">
      <h1 className="md:text-3xl text-xl">{tagline}</h1>
      <p className="text-white/80 mt-10">{desc}</p>
      <div className="my-8 flex items-center md:justify-start justify-center gap-5">
        <Button title={`Beli Sekarang`} addClassname={"bg-seccondary"} />
        <div>
          <BiDownload className="text-xl mx-auto" />
          <p>{sold}</p>
        </div>
      </div>
      <div>
        <FeaturedTech />
      </div>
    </div>
  );
};

export default Featured;
