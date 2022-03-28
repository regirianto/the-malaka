import React from "react";
import CardPrice from "./CardPrice";
import ShippingInformation from "./ShippingInformation";
import TitlePrice from "./TitlePrice";

const Price = () => {
  const detailBookPrice = [
    {
      type: "Buku Digital",
      price: 100000,
      benefits: [
        {
          benefit: "Buku Lengkap",
          access: true,
        },
        {
          benefit: "Akses Secara Digital",
          access: true,
        },
        {
          benefit: "Buku Fisik",
          access: false,
        },
        {
          benefit: "Mendapat Pembaharuan",
          access: true,
        },
        {
          benefit: "Konsultasi",
          access: true,
        },
        {
          benefit: "Dapat di unduh",
          access: true,
        },
      ],
    },
    {
      type: "Buku Fisik",
      price: 185000,
      benefits: [
        {
          benefit: "Buku Lengkap",
          access: true,
        },
        {
          benefit: "Akses Secara Digital",
          access: false,
        },
        {
          benefit: "Buku Fisik",
          access: true,
        },
        {
          benefit: "Mendapat Pembaharuan",
          access: false,
        },
        {
          benefit: "Konsultasi",
          access: true,
        },
        {
          benefit: "Dapat di unduh",
          access: true,
        },
      ],
    },
    {
      type: "Buku Digital + Fisik",
      price: 250000,
      benefits: [
        {
          benefit: "Buku Lengkap",
          access: true,
        },
        {
          benefit: "Akses Secara Digital",
          access: true,
        },
        {
          benefit: "Buku Fisik",
          access: true,
        },
        {
          benefit: "Mendapat Pembaharuan",
          access: true,
        },
        {
          benefit: "Konsultasi",
          access: true,
        },
        {
          benefit: "Dapat di unduh",
          access: true,
        },
      ],
    },
  ];

  return (
    <div
      className="flex flex-col place-content-center  bg-no-repeat place-items-center  gap-y-12  md:px-32 px-2 bg-cover lg:py-80 py-64"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}"/img/bg-img2.png")`,
      }}
    >
      <TitlePrice
        title={
          "Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di perangkat kamu"
        }
        desc="Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis. Hak cipta dilindungi undang-undang."
      />
      <div className="flex lg:flex-row flex-col gap-4 flex-wrap justify-center">
        {detailBookPrice.map((book, i) => (
          <CardPrice key={book.type} book={book} />
        ))}
      </div>
      <ShippingInformation
        detailShipping="*Buku digital akan dikirimkan ke alamat email kamu *Buku fisik dikirim 7
        hari setelah pemesanan"
      />
    </div>
  );
};

export default Price;
