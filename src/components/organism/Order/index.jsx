import React from "react";
import Button from "../../atom/Button";
import { BiDownload } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Order = () => {
  return (
    <div className="flex flex-col h-[400px] py-5  justify-evenly items-center mt-7 text-center">
      <div className="text-seccondary bg-benefit uppercase  tracking-wide px-6 py-4 rounded-full font-bold">
        Beli Buku
      </div>
      <div className="">
        <p className="text-dark font-bold text-3xl">
          Anda ingin segera memesan buku ini?
        </p>
        <p className="text-dark/80 text-lg ">
          Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
        </p>
      </div>
      <div className="flex justify-center items-center gap-6 ">
        <div className=" flex items-center gap-3">
          <BiDownload className="text-2xl text-black/70" />
          <p className="text-xl font-medium">
            Sudah Tejual <br />
            501,212+
          </p>
        </div>
        <div className="">
          <Button
            addClassname={
              "bg-seccondary text-white shadow flex items-center gap-2 justify-center"
            }
          >
            <p>Beli Sekarang</p> <BsFillArrowRightCircleFill />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
