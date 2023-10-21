"use client"
import React from 'react'
import Image from 'next/image';
import logo2 from "../public/icons/leerhuislogo2.png";

const Footer = () => {
  return (
    <div className="w-full h-[700px] bg-black text-white text-4xl flex items-center justify-center bg-[url('../public/images/overonsbg.png')]">
      <div className="w-[420px] flex flex-row">
        <div className="w-1/3 logo mr-4 relative">
          <Image
            src={logo2}
            priority={true}
            alt="logo"
            fill
            sizes="100%"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div className="w-2/3 flex flex-col text-base text-[#a9bab6] leading-7">
          <span>Het Leerhuis Amsterdam</span>
          <span>Linnaeusstraat 37</span>
          <span>1093EG Amsterdam</span>
          <span>leerhuisamsterdam@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer
