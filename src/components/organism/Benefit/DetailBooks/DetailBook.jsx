import React from "react";

const DetailBook = () => {
  const details = [
    {
      count: 19,
      detail: "Jumlah Chapter",
    },
    {
      count: 253,
      detail: "Jumlah Halaman",
    },
    {
      count: 60,
      detail: "Hari Menulis",
    },
  ];
  return (
    <div className="md:w-6/12 w-full mb-20  flex justify-center">
      <div className="relative">
        <img
          src="/img/book-2.png"
          className="md:w-[366px] w-full object-contain flex m-auto "
          alt="book"
        />
        <div className=" absolute bottom-0 md:-left-9 -left-7 md:text-left text-center right-0  m-auto flex">
          <div className="drop-shadow-2xl grid grid-cols-3 divide-x divide-white/30 md:max-w-md h-[80px]  w-full text-white rounded-2xl items-center bg-seccondary m-auto">
            {details.map((detail, i) => (
              <div className="p-2" key={i}>
                <p className="text-2xl font-bold">{detail.count}</p>
                <p className="text-sm">{detail.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
