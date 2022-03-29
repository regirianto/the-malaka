import React from "react";
import FooterLink from "./FooterLink";

const About = () => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-5">
      <div className="md:w-6/12">
        <img src="/icons/logo.png" className="w-12" alt="" />
        <p className="font-bold text-lg my-2">The Malaka</p>
        <p className="text-base text-white/80">
          Malaka adalah situs penyedia kursus ilmu komputer berbahasa Indonesia,
          mulai dari pengembangan hingga desain grafis.
        </p>
      </div>
      <div className="flex md:w-6/12 md:gap-0  gap-10">
        <FooterLink
          title={"Products"}
          links={["Course", "book", "Freebies", "classes"]}
        />
        <FooterLink
          title={"Company"}
          links={[
            "About Us",
            "Contact",
            "Privacy Policy",
            "Terms of Service",
            "Help",
          ]}
        />
        <FooterLink
          title={"Get in touch"}
          links={["Twitter", "Facebook", "Github"]}
        />
      </div>
    </div>
  );
};

export default About;
