import React from "react";
import DetailBook from "./DetailBook";
import BenefitsBook from "./BenefitsBook";

const SectionDeatilBooks = () => {
  const listBenefit = [
    "Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap",
    "Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi",
    "Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer",
    "Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS",
  ];
  return (
    <div className="flex items-center lg:flex-row flex-col-reverse md:justify-center">
      <BenefitsBook listBenefit={listBenefit} />
      <DetailBook />
    </div>
  );
};

export default SectionDeatilBooks;
