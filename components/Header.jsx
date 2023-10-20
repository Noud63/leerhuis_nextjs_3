"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import logo3 from "../public/icons/leerhuislogo3.png";
import wandelaars3 from "../public/images/wandelaars3.png";

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-end items-center max-headerimg:w-full max-thumbs:w-[400px] mt-40">
        <span className="flex justify-center items-center bg-transparent font-papyrus text-red-900 text-5xl tracking-widest max-thumbs:text-4xl">
          Leerhuis Amsterdam
        </span>
        <span className="flex justify-center items-center bg-transparent text-red-900 text-lg font-bold tracking-widest max-thumbs:text-base">
          voor zinvol samenleven
        </span>
        <div className="flex justify-center items-center bg-transparent">
          <Image
            priority={true}
            src={wandelaars3}
            style={{width: "620px", height: "auto"}}
            alt="wandelaars"
            className="pt-4 max-headerimg:w-[510px] max-thumbs:w-[390px]"
          />
        </div>

        <Link
          href="/"
          className="cursor-pointer pt-12 pl-8 max-thumbs:pt-0 absolute left-0 top-0"
        >
          <Image
            priority={true}
            src={logo3}
            style={{ width:100, height: 40}}
            alt="logo"
            className="max-thumbs:w-[50px]"
          />
        </Link>
      </div>
    </>
  );
}

export default Header
