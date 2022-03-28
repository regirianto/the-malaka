import React from "react";

const ShippingInformation = ({ detailShipping }) => {
  return (
    <div className="md:w-[577px]">
      <p className="text-white/80 text-center text-lg ">{detailShipping}</p>
    </div>
  );
};

export default ShippingInformation;
