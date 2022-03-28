import React, { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import NumberFormat from "react-number-format";

const CardPrice = ({ book }) => {
  useEffect(() => {}, []);
  return (
    <div className="bg-white md:p-[60px] p-8 rounded-2xl flex flex-col gap-y-7 ">
      <div className="">
        <p className="text-seccondary font-medium">{book.type}</p>
        <p className="text-black md:text-3xl text-2xl font-semibold my-2">
          <NumberFormat
            value={book.price}
            displayType="text"
            prefix="Rp "
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {book.benefits.map((detailBenefit, i) => {
          return (
            <div className="flex items-center" key={i}>
              {detailBenefit.access === true ? (
                <BsFillCheckCircleFill className="text-[40px] mr-2  text-green-400" />
              ) : (
                <IoMdCloseCircle className="text-[42px] mr-2   text-red-400" />
              )}
              <p className="text-base text-black font-sourcesanspro font-normal capitalize">
                {detailBenefit.benefit}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <button className="bg-seccondary py-4 px-6 text-center rounded-lg font-normal text-base text-white  w-full ">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default CardPrice;
