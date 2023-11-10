import React from "react";
import Image from "next/image";
import logo3 from "../../../../../public/icons/leerhuislogo3.png";
import Link from "next/link";

const Contact = () => {
  return (

      <div className="w-full max-w-[620px] min-h-screen flex flex-col items-center max-thumbs:pt-[120px] max-thumbs:w-[350px]">
       <span className="w-full mt-[40px] flex text-green-950 text-2xl font-semibold border-b border-lime-950 pb-2 mb-8">Hier kun je ons bereiken:</span>
        <div className="w-full h-[140px] flex justify-center max-thumbs:h-[120px]">
          <div className="mr-2">
            <Image
              src={logo3}
              priority={true}
              alt="logo"
              style={{ width: "11.1rem", height: "auto" }}
            />
          </div>

          <div className="flex flex-col text-base text-green-950 leading-7 ml-2 max-thumbs:text-sm max-thumbs:leading-[22px]">
            <span>Het Leerhuis Amsterdam</span>
            <span>Linnaeusstraat 37</span>
            <span>1093EG Amsterdam</span>
            <span>06 1123 4567</span>
            <span>leerhuisamsterdam@gmail.com</span>
          </div>
        </div>

        <Link href="/menulinks/contact/mailons" className="w-full">
          <button
            type="button"
            className="w-full text-[#d7e2df] bg-gradient-to-t from-black to-[#697c77] py-3 
              border-t border-[#a8b8b4] shadow:green-950 shadow-lg mt-6 max-thumbs:mt-0"
          >
            Of stuur ons een bericht
          </button>
        </Link>
      </div>
  );
};

export default Contact;
