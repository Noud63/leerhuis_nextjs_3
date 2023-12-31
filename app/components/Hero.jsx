import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import wandelaars3 from "../../public/images/wandelaars3.png";

const Hero = () => {
  return (
    <div className="hero w-full h-[500px] flex flex-row justify-center items-center bg-gradient-to-t from-[#9fafab] to-[#f3f8f7] pt-10 max-thumbs:h-[400px] max-mobile:h-[320px]">
      <div className="w-1/2 flex flex-row justify-center items-center max-herotext:w-full">
        <div className="w-full flex flex-col justify-end items-center max-thumbs:w-[400px] max-mobile:w-[320px] pt-20 max-mobile:pt-10 max-xxl:w-[580px]">
          <span className="flex justify-center items-center bg-transparent font-papyrus text-red-900 text-5xl tracking-widest max-thumbs:text-4xl max-mobile:text-[1.80rem]">
            Leerhuis Amsterdam
          </span>
          <span className="flex justify-center items-center bg-transparent text-red-900 text-lg font-bold tracking-widest max-thumbs:text-base">
            voor zinvol samenleven
          </span>
          <div className="flex justify-center items-center bg-transparent">
            <Image
              priority={true}
              src={wandelaars3}
              style={{ width: 620, height: "auto" }}
              alt="wandelaars"
              className="pt-4 max-headerimg:w-[510px] max-mobile:w-[320px]"
            />
          </div>
        </div>
      </div>

      <div
        className="w-1/2 flex flex-col justify-center items-center max-md:flex-col
         max-herotext:hidden"
      >
        <div className="w-[60%] flex justify-center items-center flex-col pt-10 max-xxl:w-[80%]">
          <span className="w-80 text-xl text-green-950 flex justify-center items-center font-semibold border-b border-green-950 pb-2 mb-2">
            Over het Leerhuis
          </span>
          <div className="w-full flex flex-row justify-center max-md:flex-col">
            <div className="w-full px-8 pb-8 pt-4 text-green-950 flex flex-col leading-2 text-md max-xxl:pb-6">
              Leerhuis Amsterdam richt zich op zinvol samen leven in een
              complexe wereld die ons voor veel vragen stelt.
              <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en de
              hedendaagse wereld van kunst en cultuur zoeken wij hierover het
              gesprek.
              <br /> We organiseren daarom bijeenkomsten, dialogen en cursussen,
              in de Muiderkerk, waarin deze werelden elkaar ontmoeten.
              <br />
            </div>
          </div>

          <Link href="/menulinks/activiteiten/activiteiten">
            <button
              type="button"
              className="w-40 text-[#d7e2df] bg-gradient-to-t from-black to-[#697c77] rounded-full px-6 py-2 
              border-t border-[#a8b8b4] shadow:green-950 shadow-lg"
            >
              Alle activiteiten
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
