import React from "react";
import Slider from "../../components/Slider";
import { Product } from "../../components/Product";
import { Brand } from "../../components/Brand";

export default function Home() {
  const slideData = [
    {
      title: "Senden, bizden, Anadolu’dan!",
      image: "/slide2.webp",
    },
    {
      title: "Garenta’dan kiralayan herkese, kahve hediye!",
      description:
        "Garenta'dan araç kiralayan herkese dilediği Kahve Dünyası'ndan kahve hediye!",
      image: "/slide1.webp",
    },
    {
      title:
        "Sana özel kampanyalardan yararlanmak için giriş yap ve iletişim izinlerini aç!",
      image: "/slide3.webp",
    },
    {
      title: "Turkcell Bireysel Hat Sahipleri İndirimli Kiralıyor!",
      description: "İndirimden Faydalanmak için Hemen Tıkla!",
      image: "/slide4.webp",
    },
    {
      title: "4 Gün ve Üzeri Araç Kiralamalarınızda %44 İndirim!",
      description:
        "Hemen rezervasyon yapın, tüm araç gruplarında geçerli %44 indirim avantajından yararlanın. Garenta ile seyahatlerinizi hem daha ekonomik hem daha konforlu hale getirin!",
      image: "/slide5.webp",
    },
    {
      title: "Migros Money'liler İndirimli Kiralıyor!",
      description: "Migros Money Ayrıcalığını Kaçırma, Şimdi Tıkla!",
      image: "/slide6.webp",
    },
    {
      title: "Uzun Dönem Kirala, Konforlu Sürüşün Tadını Çıkar!",
      description: "Şimdi Tıkla, Avantajı Yakala!",
      image: "/slide7.webp",
    },
    // bu array gibi isimler olacak iste onlara ulasacaksin bakim bir tekrar düzenler söylerim sana ttamamdir
  ];

  const products = [
    {
      image: "/urun1.webp",
      title: "Kablosuz Kulaklık",
      price: "799",
      indirim: "%10 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
  ];

  const products2 = [
    {
      image: "/urun1.webp",
      title: "Kablosuz Kulaklık",
      price: "799",
      indirim: "%10 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
    {
      image: "/urun1.webp",
      title: "USB Bellek 64GB",
      price: "299",
      indirim: "%5 indirim",
    },
  ];

  const brands = [
    { image: "/jbl.webp" },
    { image: "/stradivarius.webp" },
    { image: "/pullbear.webp" },
    { image: "/rue.webp" },
    { image: "/mango.webp" },
    { image: "/lafaba.webp" },
    { image: "/koton.webp" },
    { image: "/gap.webp" },
    { image: "/merrysee.webp" },
    { image: "/eka.webp" },
  ];

  return (
    <>
      <div>
        <Slider slides={slideData} />

        <section>
          <h2 className="text-xl  m-6 bg-orange-300 rounded-2xl w-50 text-center p-1 mx-45">
            Popüler Ürünler
          </h2>
          <div className="flex flex-wrap mx-45">
            {products.map((satir, index) => (
              <Product product={satir} key={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl  m-6 bg-orange-300 rounded-2xl w-60 text-center p-1 mx-45">
            Markalar
          </h2>
          <div className="flex flex-wrap mx-45">
            {brands.map((brand, index) => (
              <Brand key={index} brand={brand} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl  m-6 bg-orange-300 rounded-2xl w-60 text-center p-1 mx-45">
            En Çok Satılan Ürünler
          </h2>
          <div className="flex flex-wrap mx-45">
            {products2.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl  m-6 bg-orange-300 rounded-2xl w-60 text-center p-1 mx-45">
            Son Eklenen Ürünler
          </h2>
          <div className="flex flex-wrap mx-45">
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </section>

        
      </div>
    </>
  );
}
