"use client"

import React from "react";
import Header from "@/app/components/Header";
import ContactForm from "./ContactForm";

const Mailons = () => {
return (
    <>
      <Header />
      <div className="contact w-full min-h-screen flex flex-col items-center px-4 max-thumbs:max-w-[430px]">
        <span className="w-full max-w-[620px] mt-[40px] flex justify-center items-center text-[#d7e2df] text-base bg-gradient-to-t from-black to-[#697c77] font-base mb-2 py-3">
          Stuur ons een bericht
        </span>
        <div className="w-full max-w-[620px] flex flex-col">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Mailons;
