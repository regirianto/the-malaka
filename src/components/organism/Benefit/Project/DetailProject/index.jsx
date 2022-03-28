import React from "react";
import OtherBeneftisSection from "./OtherBeneftisSection";

import ProjectImg from "./ProjectImg";

const DetailProject = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center mt-16">
      <ProjectImg />
      <OtherBeneftisSection
        title={"Buku dengan studi kasus nyata, juga komunitas yang ramah"}
        desc=" Buku ini diakhiri dengan membangun website yang responsive dengan
        Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk
        bertanya ketika mengalami kesulitan."
      />
    </div>
  );
};

export default DetailProject;
