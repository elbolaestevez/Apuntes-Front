import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import CartHeaderNumber from "./CartHeader";
import { FaCartShopping } from "react-icons/fa6";
import { REM } from "next/font/google";

const rem = REM({
  weight: ["300", "900"],
  style: ["italic"],
  subsets: ["latin"],
});
console.log("rem", rem);

import Image from "next/image";

const Header = () => {
  return (
    <div
      className={` ${rem.className} w-11/12 m-auto h-[70px] flex items-center flex-row justify-between`}
    >
      <div className="w-2/6">
        {" "}
        <AiOutlineMenu size={32} className="text-gray-500" />
      </div>
      <div className="h-full bg  pt-2 flex flex-row w-2/6 justify-center pr-12">
        <Image
          src="/images/logo.png"
          alt="photo"
          width={180}
          height={90}
          className="h-full"
        />
      </div>
      <div className=" w-2/6 flex flex-row justify-end gap-6 pr-2">
        <div className="rounded-full w-[30px] bg-opacity-15 relative bg-yellow-100 mt-2">
          <span
            className={` ${rem.className} text-yellow-500  text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
          >
            LB
          </span>
        </div>
        <div className="flex flex-row gap-1">
          <FaCartShopping className="w-8 h-12 text-gray-500 mt-2" />
          <CartHeaderNumber />
        </div>
      </div>
    </div>
  );
};

export default Header;
