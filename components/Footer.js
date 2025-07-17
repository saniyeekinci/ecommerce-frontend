import React from "react";
import Image from "next/image";

import Visa from "../public/payment-methods/visa.svg";
import Discover from "../public/payment-methods/discover.svg";
import Paypal from "../public/payment-methods/paypal.svg";
import Mastercard from "../public/payment-methods/mastercard.svg";
import Paysafecard from "../public/payment-methods/paysafecard.svg";
import { ChevronDown, Earth, Facebook, Instagram, Twitch, Youtube } from "lucide-react";
import Facebookk from "../public/payment-methods/facebook.svg";
import X from "../public/payment-methods/x.svg";
import Youtubee from "../public/payment-methods/youtube.svg";
import Instagramm from "../public/payment-methods/instagram.svg";
import Linkedinn from "../public/payment-methods/linkedin.svg";
import Twitchh  from "../public/payment-methods/twitch.svg";
import Redditt from "../public/payment-methods/reddit.svg";

const Footer = () => {
  return (
    <>
      <footer className="mt-12">
        <div className="flex space-x-4 mx-45 justify-between items-center">
          <div className="flex space-x-4 items-center justify-center flex-row">
            <span className="text-sm text-[#A2A2A2]">Payment methods:</span>
            <Image src={Visa} alt="Payment Methods" height={17} />
            <Image src={Mastercard} alt="Payment Methods" height={17} />
            <Image src={Paysafecard} alt="Payment Methods" height={17} />
            <Image src={Discover} alt="Payment Methods" height={17} />
            <Image src={Paypal} alt="Payment Methods" height={17} />
            <span className="text-[#808080]">and 200+ more</span>
          </div>
          
            <a
            href="#"
            className="flex  space-x-1 items-center justify-center text-sm "
          >
            <Earth className="text-[#808080] h-6 w-6" />
            <span className="text-[#6A6A6A]">EN / USD</span>
            <ChevronDown className="text-[#6A6A6A] h-4 w-4" />
          </a>

         
        </div>

        <div className="grid grid-cols-12 gap-2 mt-8 mx-45 text-[#7B7B7B] text-xs ">
          <ul className="space-y-2 col-span-1">
            <li>
              <strong className="text-black">ABOUT</strong>
            </li>
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Marketplace</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>

          <ul className="space-y-2 col-span-2">
            <li>
              <strong className="text-black">FOR BUYERS</strong>
            </li>
            <li><a href="#" className="hover:underline">Buyer support</a></li>
            <li><a href="#" className="hover:underline">How to buy</a></li>
            <li><a href="#" className="hover:underline">Buy with G2A Plus</a></li>
            <li><a href="#" className="hover:underline">Earn with G2A Goldmine</a></li>
            <li><a href="#" className="hover:underline">Gaming news</a></li>
          </ul>

          <ul className="space-y-2 col-span-2">
            <li>
              <strong className="text-black">FOR SELLERS</strong>
            </li>
            <li><a href="#" className="hover:underline">Seller support</a></li>
            <li><a href="#" className="hover:underline">How to sell</a></li>
            <li><a href="#" className="hover:underline">Import via API</a></li>
            <li><a href="#" className="hover:underline">Try out G2A Ads</a></li>
            <li><a href="#" className="hover:underline">Partnership program</a></li>
          </ul>

          <ul className="space-y-2 col-span-2">
            <li>
              <strong className="text-black">SUPPORTS</strong>
            </li>
            <li><a href="#" className="hover:underline">Terms and conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy and cookie policy</a></li>
            <li><a href="#" className="hover:underline">Digital Services Act</a></li>
            <li><a href="#" className="hover:underline">Refund policy</a></li>
            <li><a href="#" className="hover:underline">Category map</a></li>
          </ul>

          <ul className="space-y-2 col-span-2">
            <li>
              <strong className="text-black">MEDIA</strong>
            </li>
            <li><a href="#" className="hover:underline">G2A News – gaming and trends</a></li>
            <li><a href="#" className="hover:underline">G2A Insights – business and tech</a></li>
            <li><a href="#" className="hover:underline">Press releases</a></li>
            <li><a href="#" className="hover:underline">Media partnership</a></li>
            <li><a href="#" className="hover:underline">Corporate site</a></li>
          </ul>
          <ul className="col-span-1">

          </ul>
          <ul className="text-[#7B7B7B] text-xs flex flex-col col-span-2  text-start">
            <li>
              <strong>Sosyal medya hesaplarımız</strong>
            </li>
            <li>Bizi takip edin !</li>
            <div className="flex space-x-1 mt-6 ">
            <Image src={Facebookk} alt="Facebook" className="h-8 w-8 bg-[#2365ff] p-2 rounded-full hover:scale-110 transition-transform duration-200" />
            <Image src={X} alt="Twitter"  className="h-8 w-8 p-2 rounded-full bg-black hover:scale-110 transition-transform duration-200" />
            <Image src={Youtubee} alt="Youtube" className="h-8 w-8 bg-[#F40401] p-2 rounded-full text-white hover:scale-110 transition-transform duration-200" />
            <Image src={Instagramm} alt="Instagram" className="h-8 w-8  rounded-full text-white hover:scale-110 transition-transform duration-200" />
            <Image src={Linkedinn} alt="Linkedin" className="h-9 w-9 rounded-full text-white hover:scale-110 transition-transform duration-200" />
            {/*
            <Image src={Twitchh} className="h-8 w-8 bg-[#9146FF] p-2 rounded-full text-white" />
            <Image src={Redditt} alt="Reddit"  className="h-8 w-8 p-2 rounded-full bg-[#FF4500]" />
            */}
          </div>
          </ul>
          
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
