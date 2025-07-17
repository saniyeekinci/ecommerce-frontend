"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider({ slides }) {
  return (
    <div className="rounded-2xl h-90 my-12 mx-45 border border-gray-200">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-1 flex flex-col p-6 px-16">
                <h1 className="text-4xl text-[#323436] my-4 font-bold">
                  {slide.title}
                </h1>
                {slide.description && (
                  <span className="text-gray-500">{slide.description}</span>
                )}
                <a className="mt-24 bg-[#E9500D] text-white w-24 py-2 rounded-lg text-center">
                  Tıkla
                </a>
              </div>
              <Image
                src={slide.image}
                alt={`Slide ${index}`}
                width={300}
                height={100}
                className="col-span-1 object-cover rounded-2xl w-full h-90"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

         {/* 
         
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
              <div className="col-span-1 flex flex-col p-6 px-16">
                <h1 className="text-4xl text-[#323436] my-4 font-bold">
                  Senden, bizden, Anadolu’dan!
                </h1>

                <a className="mt-44 bg-[#E9500D] text-white w-24 py-2 rounded-lg text-center">
                  Tıkla
                </a>
              </div>
              <Image
                src="/slide2.webp"
                alt="Slider Image 1"
                width={300}
                height={100}
                className="col-span-1 object-cover rounded-2xl w-full h-90 "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
              <div className="col-span-1 flex flex-col p-6 px-16">
                <h1 className="text-4xl text-[#323436] my-4 font-bold">
                  Sana özel kampanyalardan yararlanmak için giriş yap ve
                  iletişim izinlerini aç!
                </h1>

                <a className="mt-44 bg-[#E9500D] text-white w-24 py-2 rounded-lg text-center">
                  Tıkla
                </a>
              </div>
              <Image
                src="/slide3.webp"
                alt="Slider Image 1"
                width={300}
                height={100}
                className="col-span-1 object-cover rounded-2xl w-full h-90 "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
              <div className="col-span-1 flex flex-col p-6 px-16">
                <h1 className="text-4xl text-[#323436] my-4 font-bold">
                  Turkcell Bireysel Hat Sahipleri İndirimli Kiralıyor!
                </h1>
                <span className="text-gray-500">
                  İndirimden Faydalanmak için Hemen Tıkla!
                </span>
                <a className="mt-44 bg-[#E9500D] text-white w-24 py-2 rounded-lg text-center">
                  Tıkla
                </a>
              </div>
              <Image
                src="/slide4.webp"
                alt="Slider Image 1"
                width={300}
                height={100}
                className="col-span-1 object-cover rounded-2xl w-full h-90 "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-1 flex flex-col p-6 px-16">
                <h1 className="text-4xl text-[#323436] my-4 font-bold">
                  4 Gün ve Üzeri Araç Kiralamalarınızda %44 İndirim!
                </h1>
                <span className="text-gray-500">
                  Hemen rezervasyon yapın, tüm araç gruplarında geçerli %44
                  indirim avantajından yararlanın. Garenta ile seyahatlerinizi
                  hem daha ekonomik hem daha konforlu hale getirin!
                </span>
                <a className="mt-44 bg-[#E9500D] text-white w-24 py-2 rounded-lg text-center">
                  Tıkla
                </a>
              </div>
              <Image
                src="/slide5.webp"
                alt="Slider Image 1"
                width={300}
                height={100}
                className="col-span-1 object-cover rounded-2xl w-full h-90 "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
              <div className="col-span-1 flex flex-col p-6 px-16">
                <h1 className="text-4xl text-[#323436] my-4 font-bold">
                  Migros Money'liler İndirimli Kiralıyor!
                </h1>
                <span className="text-gray-500">
                  Migros Money Ayrıcalığını Kaçırma, Şimdi Tıkla!
                </span>
                <a className="mt-44 bg-[#E9500D] text-white w-24 py-2 rounded-lg text-center">
                  Tıkla
                </a>
              </div>
              <Image
                src="/slide6.webp"
                alt="Slider Image 1"
                width={300}
                height={100}
                className="col-span-1 object-cover rounded-2xl w-full h-90 "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-10">
              <div className="col-span-1 flex flex-col p-6 px-16">
                <h1 className="text-4xl text-[#323436] my-4 font-bold">
                  Uzun Dönem Kirala, Konforlu Sürüşün Tadını Çıkar!
                </h1>
                <span className="text-gray-500">
                  Şimdi Tıkla, Avantajı Yakala!
                </span>
                <a className="mt-44 bg-[#E9500D] text-white w-24 py-2 rounded-lg text-center">
                  Tıkla
                </a>
              </div>
              <Image
                src="/slide7.webp"
                alt="Slider Image 1"
                width={300}
                height={100}
                className="col-span-1 object-cover rounded-2xl w-full h-90 "
              />
            </div>
          </SwiperSlide>
         */}