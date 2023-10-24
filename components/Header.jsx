"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo3 from "../public/icons/leerhuislogo3.png";
import wandelaars3 from "../public/images/wandelaars3.png";

const Header = () => {
  return (
    <>
      <div
        className="w-full flex flex-col justify-end items-center bg-transparent
      max-headerimg:w-full max-thumbs:max-w-[400px] mt-40 max-mobile:max-w-[410px] max-mobile:px-4 max-mobile:mt-28"
      >
        <span className="flex justify-center items-center bg-transparent font-papyrus text-red-900 text-5xl tracking-widest max-thumbs:text-4xl max-mobile:text-[1.85rem]">
          Leerhuis Amsterdam
        </span>
        <span className="flex justify-center items-center bg-transparent text-red-900 text-lg font-bold tracking-widest max-thumbs:text-base max-mobile:text-[1rem]">
          voor zinvol samenleven
        </span>
        <div className="flex justify-center items-center bg-transparent">
          <Image
            priority={true}
            src={wandelaars3}
            style={{ width: "620px", height: "auto" }}
            alt="wandelaars"
            className="pt-4 max-headerimg:w-[510px] max-thumbs:w-[390px]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
