"use client";
import React from "react";
import Image from "next/image";
import close from "../public/icons/close.png";
import logo3 from "../public/icons/leerhuislogo3.png";
import navLinks from "@/utils/Menu";
import OverlayLinks from "./OverlayLinks";

const Menuoverlay = ({ setShowMenuOverlay, showMenuOverlay }) => {

  const closeMenu = () => {
    setShowMenuOverlay(false);
  };

  return (
    <div
      className={`${
        showMenuOverlay ? "max-w-[500px] right-0" : "-right-[500px] max-w-0"
      }
    overlay fixed flex flex-col justify-start items-start w-1/2 h-screen top-0 bg-[#a7b0a9] z-[999] shadow-lg 
    transition-all duration-1000 ease-in-out hamburger:hidden`}
    >
      <div className="w-full flex flex-row justify-between p-4">
        <div className="">
          <Image src={logo3} width={50} height={50} alt="" />
        </div>

        <div className="text-green-950 cursor-pointer" onClick={closeMenu}>
          <Image src={close} width={35} height={35} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 w-full gap-4 px-4 max-thumbs:grid-cols-1">
        {navLinks.map( (item, index) => {
          const { submenu } = item
           return <OverlayLinks key={index} submenu={submenu} item={item} closeMenu={closeMenu} />
        } )}
      </div>
      
    </div>
  );
};

export default Menuoverlay;
