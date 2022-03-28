import React, { useState } from "react";
import SubTitleSection from "../../molecule/SubTitleSection";
import { SwiperSlide } from "swiper/react";
import Swipper from "../../atom/Swipper";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [userTestimonial, setUserTestimonial] = useState([
    {
      img: "testi-avatar-1.png",
      name: "Dedik  Sugiarto",
      about: "Front-End Engineer",
      testimonial:
        "“Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.”",
    },
    {
      img: "testi-avatar-2.png",
      name: "Ahmad Saugi",
      about: "Mahasiswa",
      testimonial:
        "“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”",
    },
    {
      img: "testi-avatar-3.png",
      name: "Lutfi Hanafiah Ramadhan",
      about: "IT Support",
      testimonial:
        "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
    },
    {
      img: "testi-avatar-3.png",
      name: "Lutfi Hanafiah Ramadhan",
      about: "IT Support",
      testimonial:
        "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
    },
    {
      img: "testi-avatar-3.png",
      name: "Lutfi Hanafiah Ramadhan",
      about: "IT Support",
      testimonial:
        "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
    },
    {
      img: "testi-avatar-3.png",
      name: "Lutfi Hanafiah Ramadhan",
      about: "IT Support",
      testimonial:
        "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
    },
  ]);

  return (
    <div className="mx-auto px-4 py-32 mt-10 bg-benefit flex flex-col gap-y-6">
      <div className=" flex md:flex-row flex-col items-center gap-4  p-5">
        <div className="flex-1">
          <SubTitleSection tiltle={"Testimonial"} />
          <p className="text-3xl mt-5">
            Apa kata orang-orang yang membaca buku ini?
          </p>
        </div>
        <div className="flex-1">
          <p className="text-dark/80 text-lg">
            Kalo seandainya kamu belum percaya dengan buku ini maka tidak
            apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin
            beberapa ulasan ini bisa membangkitkan hasratmu untuk membeli buku
            ini.
          </p>
        </div>
      </div>

      <Swipper>
        {userTestimonial.map((user, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard
              img={user.img}
              name={user.name}
              about={user.about}
              testimonial={user.testimonial}
            />
          </SwiperSlide>
        ))}
      </Swipper>
    </div>
  );
};

export default Testimonial;
