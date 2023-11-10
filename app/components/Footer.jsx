"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo2 from "../../public/icons/leerhuislogo2.png";
import data from "../assets/menu.json";
import FooterMenu from "./FooterMenu";
import facebook from "../../public/icons/socials/facebook.png";
import insta from "../../public/icons/socials/insta.png";
import linkedin from "../../public/icons/socials/linkedin.png";
import twitter from "../../public/icons/socials/twitter.png";

const Footer = () => {
  
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = () => {
    console.log(email);

    if (email === "") return alert("Enter email");

    // if (email) return; // .test(email)
    setEmail("");
  };

  return (
    <div className="w-full h-auto bg-black/90 text-white flex flex-row items-start px-8 bg-[url('../public/images/overonsbg.png')] relative max-headerimg:flex-col pb-24">
      <div className="left w-1/2 max-headerimg:w-full">
        <div className="w-[420px] flex flex-row justify-center mt-12 mb-12 max-xsm:flex-col max-xsm:max-w-full">
          <div className="w-1/3 mr-4">
            <Image
              src={logo2}
              priority={true}
              alt="logo"
              style={{ width: "100%", height: "auto", paddingTop: "4px" }}
            />
          </div>

          <div className="w-2/3 flex flex-col text-base text-[#a9bab6] leading-7 max-xsm:mt-4">
            <span>Het Leerhuis Amsterdam</span>
            <span>Linnaeusstraat 37</span>
            <span>1093EG Amsterdam</span>
            <span>leerhuisamsterdam@gmail.com</span>
          </div>
        </div>

        <div className="w-full max-w-[580px] grid grid-cols-4 grid-rows-1 max-headerimg:grid-cols-2 max-thumbs:w-[280px] justify-items-start max-headerimg:max-w-[300px]">
          {data.map((item) => {
            const { submenu } = item;
            return (
              <div className="mb-4" key={item.id}>
                <FooterMenu index={item.id} submenu={submenu} item={item} />
              </div>
            );
          })}
        </div>

        <div className="w-full flex flex-col mt-10 mb-12">
          <span className="mb-4 text-[#a9bab6]">Volg ons:</span>
          <div className="w-full flex flex-row">
            <Image
              src={facebook}
              alt=""
              width={40}
              height={40}
              className="mr-4 h-auto"
            />
            <Image 
            src={insta} 
            alt="" width={40} 
            height={40} 
            className="mr-4 h-auto" 
            />
            <Image
              src={linkedin}
              alt=""
              width={40}
              height={40}
              className="mr-4 h-auto"
            />
            <Image
              src={twitter}
              alt=""
              width={40}
              height={40}
              className="mr-4 h-auto"
            />
          </div>
        </div>
      </div>

      <div className="right w-1/2 flex justify-center flex-col mt-48 max-headerimg:mt-2 max-headerimg:w-[24rem] max-xsm:w-full mb-8">
        <div className="w-full text-[#a9bab6] py-3">
          Schrijf je in voor onze nieuwsbrief:{" "}
        </div>
        <div className="flex flex-row h-12 ">
          <input
            type="email"
            className="w-full bg-transparent border border-[#a9bab6] pl-4 placeholder:text-gray-600 outline-none"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="w-36 bg-[#a9bab6] text-lime-950"
            onClick={submitHandler}
          >
            Verzend
          </button>
        </div>
      </div>

      <div className="w-full h-12 flex justify-center items-center text-sm text-[#889995] absolute m-auto bottom-0 left-0 right-0 bg-[#2b3331]">
        ©noudvandun 2023
      </div>
    </div>
  );
};

export default Footer;
