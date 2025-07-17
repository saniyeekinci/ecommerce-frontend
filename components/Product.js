import React from "react";
import Image from "next/image";

export const Product = ({ product, index }) => {
  return (
    <>
      <div
        className="border border-gray-300 px-4 pb-14 rounded-2xl w-55 mx-1 -space-y-1.5 mb-6"
        key={index}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={190}
          height={200}
          className="rounded-lg px-2"
        />
        <span className="text-purple-700 bg-[#F2E8FF] rounded-md p-0.5 text-xs">
          Peşin fiyatına taksit
        </span>
        <h3 className="text-sm text-[#817E8C] font-semibold w-50">{product.title}</h3>
        <p>⭐️⭐️⭐️⭐️⭐️</p>
        <div className="-space-y-1.5">
          <p className="text-gray-600 font-bold">{product.price} TL</p>
          <span className="text-green-600 text-xs font-bold">{product.indirim}</span>
        </div>
      </div>
    </>
  );
};
