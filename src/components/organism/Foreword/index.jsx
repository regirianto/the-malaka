import React from "react";
import Author from "./ForewordInfo/Author";
import ForewordText from "./ForewordInfo/ForewordText";

const Foreword = () => {
  return (
    <div className=" mt-28 bg-seccondary text-white ">
      <div className="flex md:flex-row flex-col justify-center items-center md:p-16 py-5 md:gap-2 gap-y-8">
        <Author name={"Muhamad Nauval Azhar"} account="@mhdnauvalazhar" />
        <ForewordText
          text='"Tailwind sangat memungkinkan kamu untuk membangun sebuah desain website
        yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun. Mungkin kamu
        akan berpikir bahwa kamu akan membutuhkan waktu yang lebih lama ketika
        membangun sebuah website dengan utility-first framework ketimbang dengan
        framework UIkit. Ya, benar. Karena kamu harus memikirkan desain dan
        mengimplementasikan desain tersebut dari awal sendiri. Namun, kamu perlu
        ingat manfaat-manfaat yang diberikan oleh utility-first framework,
        sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan
        mempelajari framework Tailwind CSS. Mulai dari konsep, workflow, hingga
        membuat sebuah website responsive dengan TailwindCSS. Buku ini tidak
        untuk semua orang, setidaknya kamu memahami cara mengoperasikan
        komputer, memahami HTML, memahami CSS, atau bisa dibilang kamu sudah
        pernah membangun website sebelumnya dan ingin mempelajari hal baru untuk
        meningkatkan skill."'
        />
      </div>
    </div>
  );
};

export default Foreword;
