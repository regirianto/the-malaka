import React from "react";
import OtherBeneftisSection from "./OtherBeneftisSection";

import ProjectImg from "./ProjectImg";

const DetailProject = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center mt-16">
      <ProjectImg />
      <OtherBeneftisSection />
    </div>
  );
};

export default DetailProject;
