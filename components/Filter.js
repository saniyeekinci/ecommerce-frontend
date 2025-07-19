import React from "react";
import Image from "next/image";
import { Feather } from "lucide-react";

export default function Filter() {
  return (
    <>
      <div className="absolute border border-gray-400 bg-white text-black px-3 top-1 rounded-4xl flex  space-y-4 py-4 space-x-2 z-100 w-[50%]">
        <div className=" bg-white text-black px-3 top-1  rounded-4xl flex  flex-col space-y-1  space-x-2 z-100 w-[100%] divide-y divide-solid divide-gray-200">
          <div className="flex  space-x-2 p-2 ">
            <Image
              src="search.svg"
              alt="search"
              height={20}
              width={20}
              className="cursor-pointer"
            />
            <span>{}deneme</span>
          </div>
           <div className="flex  space-x-2  p-2 ">
            <Image
              src="search.svg"
              alt="search"
              height={20}
              width={20}
              className="cursor-pointer"
            />
            <span>{}deneme</span>
          </div>
           <div className="flex  space-x-2  p-2">
            <Image
              src="search.svg"
              alt="search"
              height={20}
              width={20}
              className="cursor-pointer"
            />
            <span>{}deneme</span>
          </div>
          <div className="flex  space-x-2  p-2 ">
            <Image
              src="category.svg"
              alt="search"
              height={20}
              width={20}
              className="cursor-pointer"
            />
            <span>{}T-Shirt</span>
          </div>
          <div className="flex  space-x-2  p-2 ">
            <Feather
              height={20}
              width={20}
              className="cursor-pointer"
            />
            <span>{}T-Shirt Hane</span>
          </div>
          <div className="flex  space-x-2  p-2 ">
            <Image
              src="kampanya.svg"
              alt="kampanya"
              height={20}
              width={20}
              className="cursor-pointer "
            />
            <span>{}T-Shirt Hane</span>
          </div>
        </div>
        
      </div>
    </>
  );
}
