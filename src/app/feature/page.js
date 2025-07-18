import {
  Bookmark,
  Bus,
  ChevronDownIcon,
  ChevronRight,
  ChevronsRight,
  CircleCheck,
  CircleQuestionMark,
  Heart,
  Info,
  MessageSquareMore,
  MessagesSquare,
  Package,
  ShoppingCart,
  Star,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import Tab from "../../../components/Tab";


export default function page() {
  return (
    <>
      <div className="flex  items-center space-x-4 ml-40 my-2">
        <div className="border border-gray-200 rounded-md p-4 mt-4 flex items-center space-x-2 w-fit">
          <Image
            src="/pc.webp"
            alt="slide"
            width={80}
            height={80}
            className="w-120 p-4"
          />
        </div>

        <div className="">
          <h1 className="font-bold text-lg">
            Lenovo Ideapad 3 Intel Core i3 1215U 8GB 512GB SSD Freedos
            <br /> 15.6" FHD Taşınabilir Bilgisayar 82RK0181TX
          </h1>
          <div className="flex text-xs  space-x-2  items-center mt-2 ">
            <Star className="text-yellow-500 w-4" />
            <span>Henüz Değerlendirilmemiş</span>
            <span className="text-orange-500 font-bold">
              İlk sen değerlendir
            </span>
            <MessageSquareMore className="text-gray-500 w-4" />
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center space-x-2 border border-gray-200 rounded-sm p-1 mt-2 w-fit">
              <span className="text-gray-500 text-xs">Satıcı:</span>
              <Image src="/logo.webp" alt="logo" width={65} height={65} />
              <div className="flex items-center space-x-0.5">
                <CircleCheck className="text-white bg-blue-500 rounded-full  w-6 z-10" />
                <span className="text-[#37A1FF] text-[10px]  bg-[#EAF4FF] w-20 h-6 px-2  -ml-3 text-center py-1 rounded-md">
                  Resmi Satıcı
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 border border-gray-200 rounded-sm px-4 mt-2 h-8  w-fit">
              <span className="text-gray-500 text-xs">Takip Et</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-200 rounded-sm px-4 mt-2 h-8  w-fit">
              <MessagesSquare className="text-gray-500 w-4 mt-2" />
              <span className="text-[12px]">Satıcya sor (5)</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4 ">11.999,00 TL</h1>
          <div className="bg-[#EAF0FA] px-4 py-2 rounded-md mt-4 flex items-center w-full space-x-24 justify-between">
            <div>
              <Image
                src="/tradeInLogo.webp"
                alt="kargo"
                width={30}
                height={30}
                className="inline-block mr-2"
              />
              <span className="text-xs">
                Eski ürününü yenisi ile değişirmek ister misin ?
              </span>
            </div>
            <div>
              <CircleQuestionMark className="text-gray-500 w-4 ml-1 inline-block" />
              <ChevronDownIcon className="text-gray-500 w-4 ml-1 inline-block" />
            </div>
          </div>
          <p className="text-xs font-bold mt-4">Ek hizmet ister misin?</p>

          <div className="">buraya 2 kutu gelecek</div>
          <div className="flex items-center space-x-2 mt-4">
            <button className="flex bg-[#F56002] text-white px-40 py-3 rounded-md mt-4 space-x-2 items-center hover:bg-[#e04c00] transition-colors cursor-pointer">
              <ShoppingCart size={25} />
              <span className="text-sm font-bold">Sepete Ekle</span>
            </button>
            <div className="border border-gray-200 rounded-md p-1 mt-4 w-10 h-10  flex items-center justify-center">
              <Heart className="text-gray-400 w-6 h-6  stroke-1" />
            </div>
            <div className="border border-gray-200 rounded-md p-1 mt-4 w-10 h-10  flex items-center justify-center">
              <Bookmark className="text-gray-400 w-6 h-6   stroke-1" />
            </div>
          </div>

          <div className="bg-[#FAFAFA] w-fit rounded-sm mt-6">
            <h4 className="text-xs">Teslimat Seçenekleri</h4>
            <div className="flex items-center space-x-3  p-4 rounded-md mt-4 ">
              <div className="flex items-center space-x-2">
                <Bus className="text-gray-500 w-4 inline-block" />
                <span className="text-xs ">
                  <strong>14 saat 52dk </strong>içinde sipariş verirsen <br />
                  bugün kargoda
                </span>
              </div>

              <span className="text-xs bg-[#FEEFE5] text-[#F56002] rounded-sm">
                Bugün kargoda
              </span>
              <Image src="/hepsijet.webp" alt="kargo" width={60} height={60} />
            </div>
            <div className="bg-[#F0F2FF] text-[#6B83FA] flex items-center space-x-2 py-2 px-5 w-fit">
              <Info className="text-[#6B83FA] w-4 inline-block" />
              <span className="text-xs">
                <strong>En hızlı</strong> teslimat seçeneklerini ve{" "}
                <strong>Hepsimat Noktalarını</strong> görmek için <br />{" "}
                <strong>konumunu seç</strong> ve alışverişe başla
              </span>
            </div>
          </div>

          <h2 className="text-xs font-bold mt-6">Ürün bilgileri</h2>
          <div className="flex space-x-2 mt-4">
            <div className="bg-[#FAFAFA] text-xs font-bold p-1 w-fit mt-4 rounded-sm">
              <h2>İşlemci Tipi</h2>
              <span>Intel Core i3</span>
            </div>
            <div className="bg-[#FAFAFA] text-xs font-bold p-1 w-fit mt-4 rounded-sm">
              <h2>Dokunmatik Ekran</h2>
              <span>Yok</span>
            </div>
            <div className="bg-[#FAFAFA] text-xs font-bold p-1 w-fit mt-4 rounded-sm">
              <h2>Ekran Boyutu</h2>
              <span>15,6 inç</span>
            </div>
            <div className="bg-[#FAFAFA] text-xs font-bold p-1 w-fit mt-4 rounded-sm">
              <h2>Üretici Bilgisi</h2>
              <span>Lenovo</span>
            </div>
            <div className="bg-[#FAFAFA] text-orange-500 text-xs font-bold p-1 space-x-1 w-fit mt-4 rounded-sm flex items-center">
              <Package className="text-orange-500 w-4" />
              <h2>Tüm Ürün Bilgileri</h2>
            </div>
          </div>
        </div>

        <div className="w-55 mb-20">
          <div className="border border-gray-100 p-2 rounded-md">
            <h2 className="font-bold text-xs text-[#484848]">Kampanyalar</h2>
            <div className="flex items-center space-x-2 p-2 ">
              <Image
                src="/kampanya.svg"
                alt="kampanya"
                width={50}
                height={50}
                className="w-6 h-6"
              />
              <span className="text-xs font-ligh mr-8">
                500 TL üzerine kargo bedava
              </span>
            </div>
          </div>
          <div className=" p-1 bg-[#FAEAF0] rounded-md mt-2">
            <div className="flex flex-col items-start space-x-2 p-1 ">
              <Image
                src="/premium.png"
                alt="kampanya"
                width={70}
                height={70}
                className="w-22 "
              />
              <span className="text-xs p-1 font-light items-start mr-18">
                Premium ile avantajlarını katla,{" "}
                <strong className="font-bold">Hepsipara</strong> kazan.
              </span>
            </div>
          </div>
          <div className="flex flex-col  space-x-2 p-1 mt-2 border border-gray-100 rounded-t-md">
            <div className="flex  justify-between items-center p-2 ">
              <h2 className="text-xs">Diğer Stıcılar</h2>
              <div className="flex items-center space-x-1 ">
                <a href="#" className="text-orange-500  text-xs">
                  Tümünü gör
                </a>
                <ChevronRight className="text-orange-500  w-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <a href="#" className="text-orange-500 text-xs font-bold">
                dubaicenter{" "}
                <strong className="bg-green-500 text-white text-[11px] font-bold px-1 py-0.5 rounded-md">
                  9.8
                </strong>
              </a>
              <span className="text-xs p-1 font-light items-start mr-10 mt-2">
                <strong className="font-bold">18dk</strong> içinde sipariş
                verirsen bugün kargoda
              </span>

              <div className="grid grid-cols-3 gap-24 items-center  justify-around space-x-2">
                <span className="font-bold text-md col-span-1 px-2 mt-2">
                  11.999,00 TL
                </span>
                <a
                  href="#"
                  className="border border-gray-300 py-2 mr-4 rounded-lg px-4 text-xs col-span-2 text-center text-gray-500"
                >
                  Ürüne git
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-b-md border  border-gray-100">
            <a href="#" className="text-orange-500 text-xs font-bold p-1 mt-1">
              YOUSEF BABBELLI{" "}
              <strong className="bg-green-500 text-white text-[11px] font-bold px-1 py-0.5 rounded-md">
                9.8
              </strong>
            </a>
            <span className="text-xs p-1 font-light items-start mr-10">
              Tahmini <strong className="font-bold">19 Temmuz Cumartesi</strong>
              günü kargoda
            </span>

            <div className="grid grid-cols-3 gap-24 items-center  justify-around space-x-2">
              <span className="font-bold text-md col-span-1 px-2 mt-2">
                12.500,00 TL
              </span>
              <a
                href="#"
                className="border border-gray-300 py-2 mr-4 rounded-lg px-4 text-xs col-span-2 text-center text-gray-500"
              >
                Ürüne git
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-md  mt-2 border p-2 border-gray-100 ">
            <h2 className="text-xs text-[#484848] font-bold">Ek bilgiler</h2>
            <Image
              src="/guvenlik.webp"
              alt="ek bilgi"
              width={110}
              height={110}
              className="p-2"
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <Tab />
      </div>
    </>
  );
}
