"use client";
import React from "react";
import Image from "next/image";

export const Brand = ({ brand }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center my-10">
      <div
        className="rounded-2xl w-30 h-30 mx-2 flex items-center justify-center"
      >
        <Image
          src={brand.image}
          alt={"Brand ${index}"}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
    </div>
  );
};
