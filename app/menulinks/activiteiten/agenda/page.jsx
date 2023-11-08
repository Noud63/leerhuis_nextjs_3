"use client"
import React from 'react'
import Header from '@/app/components/Header';
import Image from 'next/image';
import { agenda } from '../../../../utils/agenda'

const Agenda = () => {


  return (
    <>
      <Header />
      <div className="contact w-full min-h-screen flex flex-col items-center justify-start mb-12">
        <div className="w-full max-w-[620px] mt-[40px] mx-2 px-4">
          <span className="w-full flex justify-center text-green-950 text-2xl font-semibold border-b border-green-950 pb-4">
            Agenda 2023 - 2024
          </span>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-4 max-agenda:grid-cols-1">
            {agenda.map((agenda) => (
              <div
                className="w-full flex flex-col agendaShadow border-t border-white"
                key={agenda.id}
              >
                <div className="w-full h-12 flex justify-center items-center text-[#000] font-semibold bg-transparent">
                  {agenda.date}
                </div>
                <div className="w-full flex justify-center items-center bg-lime-950 pb-4 pt-4">
                  <a
                    href={agenda.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <Image
                      src={agenda.image}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-1/2 h-auto opacity-70 hover:opacity-100 transition duration-500"
                      alt=""
                    />
                  </a>
                </div>

                <div className="w-full h-56 flex justify-start flex-col items-center px-4 text-[#d1dad7] pt-4 max-agenda:h-auto max-agenda:pb-8 border-b-2 border-lime-950">
                  <span className="w-full flex justify-center text-md font-semibold mb-4 py-1 text-[#b3bebb] shadow-md bg-lime-950">
                    {agenda.title}
                  </span>
                  <span className="w-full text-base text-lime-950 border-b border-lime-950 pb-4">
                    {agenda.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="w-full h-auto flex flex-col mt-4">
            <div className="w-full h-auto flex flex-row mb-2 relative bg-lime-950">
              <div className="w-1/5 flex justify-center items-center border-[#d1dad7] py-2 border-r px-2 text-[#d1dad7]">
                11-12
              </div>

              <div className="w-3/5 flex justify-center flex-col items-center border-[#d1dad7] py-2 px-2 text-[#d1dad7]">
                <span className="w-full text-lg font-semibold">
                  Roxane van Ieperen
                </span>
                <span className="w-full text-sm">
                  Dat beloof ik’ van Roxane van Iperen raakt aan persoonlijke
                  ervaringen en grote vragen over menselijke relaties.
                </span>
              </div>

              <div className="w-1/5 py-2 flex justify-center items-center px-2 hover:bg-lime-950 opacity-70 hover:opacity-100 transition duration-500">
                <Image
                  src={roxane}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt=""
                />
                <a
                  href="../../../../images/roxane.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center absolute cursor-pointer"
                >
                  <Image
                    src={download}
                    width={20}
                    height={20}
                    alt="download"
                    className="w-8 h-auto max-mobile:w-6 "
                  />
                </a>
              </div>
            </div>

            <div className="w-full h-auto flex flex-row mb-2 relative bg-lime-950">
              <div className="w-1/5 flex justify-center items-center border-[#d1dad7] py-2 border-r px-2 text-[#d1dad7]">
                11-12
              </div>

              <div className="w-3/5 flex flex-col justify-center items-center border-[#d1dad7] py-2 px-2 text-[#d1dad7]">
                <span className="w-full text-lg font-semibold">
                  Retraite 2024
                </span>

                <span className="w-full text-sm">
                  Wil je herbronnen? Zoek je balans in je drukke leven?
                  Kennismaken op het plein tussen kerk, cultuur en kroeg?
                </span>
              </div>

              <div className="w-1/5 py-2 flex justify-center items-center px-2 hover:bg-lime-950 opacity-70 hover:opacity-100 transition duration-500">
                <Image
                  src={retraite}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt=""
                />
                <a
                  href="../../../../images/retraite.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center absolute cursor-pointer"
                >
                  <Image
                    src={download}
                    width={20}
                    height={20}
                    alt="download"
                    className="w-8 h-auto max-mobile:w-6"
                  />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
  


export default Agenda
