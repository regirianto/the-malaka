import React from "react";

const TestimonialCard = ({ testimonial, name, about, img }) => {
  return (
    <div className="px-2">
      <div className=" py-10 px-10 bg-white  rounded-lg lg:min-h-min md:min-h-[300px] min-h-[400px] flex flex-col place-content-center">
        <div className="">
          <p>{testimonial}</p>
        </div>
        <div className="pt-7 flex items-center gap-x-3 justify-center">
          <div>
            <img src={`/img/${img}`} className="w-12" alt="" />
          </div>
          <div>
            <p className=" ">{name}</p>
            <p className="text-dark/80 text-sm">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
