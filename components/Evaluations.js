import React from 'react'
import Image from 'next/image';
import { Info, MessageCirclePlus } from 'lucide-react';

export default function Evaluation() {
  return (
    <>
    <div className='w-[70%] p-8 mx-4  '>
      <h1 className="text-[16px] font-bold text-gray-600 ">
        Ideapad 3 Intel Core i3 1215U 8GB 512GB SSD Freedos 15.6" FHD Taşınabilir Bilgisayar 82RK0181TX Değerlendirmeleri
      </h1>
     <div className='flex  gap-6 my-4 space-x-18'>
       <Image
        src="/pc.webp"
        alt="pc"
        width={200}
        height={200}
        className="w-70"
      />
      <div className='flex flex-col'>
        <h2 className='text-lg  text-gray-600'>
          Henüz değerlendirme yok
        </h2>
        <p className='text-gray-500 text-sm mt-4'>Siz de değerlendirmenizle milyonlarca Hepsiburada müşterisinin karar vermesine yardımcı olmaya ne dersiniz?</p>
        <a href="#" className="text-white mt-4 text-md px-10 font-bold bg-orange-500 py-3 w-fit rounded-lg hover:bg-orange-600 transition-colors">
          <MessageCirclePlus className="inline mr-1"
          alt="Değerlendirme Yap"
          />
          Değerlendir
        </a>
        <a href="#" className="text-orange-500 font-bold  mt-4">
         Yorum yayınlama kriterleri
        </a>
        <div className='flex items-center gap-2 mt-4 '>
          <Info className="text-gray-500 w-5 h-5" />
          <span className="text-gray-500">Değerlendirme yapabilmek için bu ürünü satın almış olmalısınız.</span>
        </div>
      </div>
     </div>
    </div>
    </>
  );
}
