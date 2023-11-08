"use client";

import { useState, useEffect } from "react";
import hamburger from "../../public/icons/hamburger.png";
import Image from "next/image";
import Menuoverlay from "./Menuoverlay";
import logo from "../../public/icons/leerhuislogo.png";
import Link from "next/link";

const Navbar = ({children}) => {
  
  const [scrolled, setScrolled] = useState(false);
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 100 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = () => {
    setShowMenuOverlay(true);
  };

  const closeMenu = () => {
    setShowMenuOverlay(false);
  };

  return (
    <>
      <div
        className={`${
          scrolled
            ? "transform ease-in-out duration-500 -translate-y-[100px]"
            : "transform ease-in-out duration-500 -translate-y-0"
        } navbar flex justify-between px-20 py-4 max-hamburger:px-8 max-thumbs:h-[70px] border-b border-green-950/40`}
      >
        <Link href="/" className="cursor-pointer pt-2 max-thumbs:pt-0">
          <Image
            priority={true}
            src={logo}
            style={{ width: "100%", height: "100%" }}
            alt="logo"
            className="max-thumbs:w-[50px]"
            onClick={closeMenu}
          />
        </Link>

        <div className="w-[820px] flex justify-between items-center pl-8 text-md max-hamburger:hidden">
          {children}
        </div>

        <div className="max-hamburger:block pt-2 hamburger:hidden cursor-pointer max-thumbs:pt-1">
          <Image
            src={hamburger}
            width={50}
            height={50}
            alt="hamburger"
            onClick={openMenu}
            className="max-thumbs:w-[30px]"
          />
        </div>
      </div>

      <Menuoverlay
        setShowMenuOverlay={setShowMenuOverlay}
        showMenuOverlay={showMenuOverlay}
      />
    </>
  );
};

export default Navbar;


