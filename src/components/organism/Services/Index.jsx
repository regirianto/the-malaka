import React from "react";
import AllService from "./about/AllService";
import AboutBooks from "./about/Index";

const Services = () => {
  const services = [
    {
      image: "service-1.png",
      title: "Utility-First Framework",
      desc: "Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.",
    },
    {
      image: "service-2.png",
      title: "Unopinionated-Framework",
      desc: "Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.",
    },
    {
      image: "service-3.png",
      title: "Tailwind JIT Engine",
      desc: "JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik.",
    },
  ];
  return (
    <div className="mt-28 mx-auto md:px-12  mb-10">
      <AboutBooks
        subTitle={
          "Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI designer!"
        }
        about={
          "Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan skill, buku ini juga cocok untuk back-end developer dan UI designer agar dapat menulis style tanpa harus menulis kode CSS dan tanpa mengandalkan front-end developer!"
        }
      />
      <div className="container md:px-0  px-5 flex justify-center items-center gap-3 mt-11 md:flex-row flex-col">
        {services.map((service, i) => {
          return (
            <AllService
              img={service.image}
              title={service.title}
              desc={service.desc}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
