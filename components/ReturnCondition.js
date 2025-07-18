import React from "react";
import Image from "next/image";

export default function ReturnCondition() {
  return (
    <>
      <div className="mx-10 space-y-6 text-gray-500">
        <h1 className="text-xl font-bold text-black">
          Kolay iade süreci nasıl başlatılır?
        </h1>

        <div className="flex flex-col text-gray-500 mt-4 space-y-3">
          <Image
            src="/iade1.svg"
            alt="Kolay iade süreci"
            width={100}
            height={100}
            className="w-12 h-12 rounded-lg"
          />
          <h2 className="text-md font-bold">İade talebi oluştur</h2>
          <p className="text-xs">
            Siparişlerim sayfasından iade etmek istediğin ürünü bul ve Kolay
            iade et'e tıkla.
          </p>
          <a href="#" className="text-orange-500 font-bold text-lg">
            Kolay iade nedir?
          </a>
        </div>
        <hr className="border-gray-300 my-4" />
        <div className="flex flex-col  mt-4 space-y-3">
          <Image
            src="/iade2.svg"
            alt="Kolay iade süreci"
            width={100}
            height={100}
            className="w-12 h-12 rounded-lg"
          />
          <h2 className="text-md font-bold">İade yöntemini seç</h2>
          <p className="text-xs">
            İade etmek istediğin ürünü kapında iade ile kolayca iade et ya da
            Hepsimat noktasına iade ve kargoya teslim seçeneklerinden birini
            seç.
          </p>
          <a
            href="#"
            className="text-orange-500 font-bold text-lg items-center"
          >
            <Image
              src="/iade2.2.svg"
              alt="Kapında iade"
              width={28}
              height={28}
              className="inline-block mr-2"
            />
            Kapında iade nedir?
          </a>
        </div>

        <hr className="border-gray-300 my-4" />
        <div className="flex flex-col  mt-4 space-y-3">
          <Image
            src="/iade3.svg"
            alt="Kolay iade süreci"
            width={100}
            height={100}
            className="w-12 h-12 rounded-lg"
          />
          <h2 className="text-md font-bold">Kargo kodunu not et</h2>
          <p className="text-xs">
            Yönlendirmeleri tamamla ve ekranda çıkan kargo gönderi kodunu not
            et.
          </p>
          <a href="#" className="text-orange-500 font-bold text-lg">
            Kargo koduna nasıl ulaşırım ?
          </a>
        </div>

        <hr className="border-gray-300 my-4" />
        <div className="flex flex-col  mt-4 space-y-3">
          <Image
            src="/iade4.svg"
            alt="Kolay iade süreci"
            width={100}
            height={100}
            className="w-12 h-12 rounded-lg"
          />
          <h2 className="text-md font-bold">Ürünü teslim et</h2>
          <p className="text-xs">
            Ürünü tüm aparatlarıyla eksiksiz bir şekilde paketle ve kargo
            gönderi koduyla teslim et.
          </p>
          <a href="#" className="text-orange-500 font-bold text-lg">
            Ürünü nereye teslim edebilirim ?
          </a>
        </div>

        <hr className="border-gray-300 my-4" />
        <div className="flex flex-col  mt-4 space-y-3">
          <Image
            src="/iade5.svg"
            alt="Kolay iade süreci"
            width={100}
            height={100}
            className="w-12 h-12 rounded-lg"
          />
          <h2 className="text-md text-green-400 font-bold">
            İadeniz onaylansın
          </h2>
          <p className="text-xs">
            Ürünü tüm aparatlarıyla eksiksiz bir şekilde paketle ve kargo
            gönderi koduyla teslim et.
          </p>
        </div>

        <hr className="border-gray-300 my-4" />
        <p className="text-xs mb-4">
          * Bu üründen toplu/çoklu sipariş verilmesi, siparişin ticari alım
          olduğunun tespit edilmesi veya farklı kullanıcı adı, rumuz, kimlik ve
          iletişim bilgileri ile verilen siparişlerde fatura adresi, teslimat
          adresi, ödeme bilgisi, ticari unvanı, vergi numarası gibi unsurların
          aynı olması durumunda Hepsiburada siparişleri iptal etme hakkını saklı
          tutar.
        </p>
      </div>
    </>
  );
}
