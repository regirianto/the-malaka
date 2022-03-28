import React from "react";
import AboutAuthor from "./AboutAuthor";
import AuhtorImg from "./AuhtorImg";

const Author = () => {
  return (
    <div className="mt-28 px-12 mx-auto flex flex-col md:flex-row justify-center items-center">
      <AuhtorImg name={"Muhamad Nauval Azhar"} account="@mhdnauvalazha" />
      <AboutAuthor
        title={"Penulis Buku"}
        subTitle="Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini"
        desc={
          "“Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu. Namun, kedepannya saya berharap nama ini tidak lagi terdengar asing di telinga kamu sebagai orang yang rajin berbagi hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang web developer yang masuk kategori apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih senang fokus di front-end development, karena --menurut saya-- ini lebih sederhana saja. Di front-end development pada dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake React.”"
        }
      />
    </div>
  );
};

export default Author;
