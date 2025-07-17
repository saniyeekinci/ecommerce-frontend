import React from "react";
import Image from "next/image";

import Visa from "../public/payment-methods/visa.svg";
import Discover from "../public/payment-methods/discover.svg";
import Paypal from "../public/payment-methods/paypal.svg";
import Mastercard from "../public/payment-methods/mastercard.svg";
import Paysafecard from "../public/payment-methods/paysafecard.svg";
import { ChevronDown, Earth } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className=" ">
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
            className="flex  space-x-1 items-center justify-center text-sm"
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
            <li>Company</li>
            <li>Marketplace</li>
            <li>Security</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>

          <ul className="space-y-2 col-span-2">
            <li>
              <strong className="text-black">FOR BUYERS</strong>
            </li>
            <li>Buyer support</li>
            <li>How to buy</li>
            <li>Buy with G2A Plus</li>
            <li>Earn with G2A Goldmine</li>
            <li>Gaming news</li>
          </ul>

          <ul className="space-y-2 col-span-2">
            <li>
              <strong className="text-black">FOR SELLERS</strong>
            </li>
            <li>Seller support</li>
            <li>How to sell</li>
            <li>Import via API</li>
            <li>Try out G2A Ads</li>
            <li>Partnership program</li>
          </ul>

          <ul className="space-y-2 col-span-2">
            <li>
              <strong className="text-black">SUPPORTS</strong>
            </li>
            <li>Terms and conditions</li>
            <li>Privacy and cookie policy</li>
            <li>Digital Services Act</li>
            <li>Refund policy</li>
            <li>Category map</li>
          </ul>

          <ul className="space-y-2 col-span-2">
            <li>
              <strong className="text-black">MEDIA</strong>
            </li>
            <li>G2A News – gaming and trends</li>
            <li>G2A Insights – business and tech</li>
            <li>Press releases</li>
            <li>Media partnership</li>
            <li>Corporate site</li>
          </ul>
          <ul className="col-span-1">

          </ul>
          <ul className="text-[#7B7B7B] text-xs flex flex-col col-span-2  text-start">
            <li>
              <strong>Sosyal medya hesaplarımız</strong>
            </li>
            <li>Bizi takip edin !</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
