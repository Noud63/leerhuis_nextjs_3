import React from 'react'
import Header from '@/app/components/Header';
import Image from 'next/image';
import roxane from '../../../../public/images/roxane.png'
import retraite from '../../../../public/images/retraite.png'
import download from '../../../../public/icons/download.png'

const Agenda = () => {

  return (
    <>
      <Header />
      <div className="contact w-full min-h-screen flex flex-col items-center justify-start">
        <div className="w-full max-w-[620px] mt-[40px] mx-2 px-4">
          <span className="w-full flex justify-center text-green-950 text-2xl font-semibold border-b border-green-950 pb-4">
            Agenda 2023 - 2024
          </span>

          <div className="w-full h-auto flex flex-col mt-4">
            <div className="w-full h-auto flex flex-row mb-2 relative bg-lime-950">
              <div className="w-1/5 flex justify-center items-center border-[#d1dad7] py-2 border-r px-2 text-[#d1dad7]">
                11-12
              </div>

              <div className="w-3/5 flex justify-center items-center border-[#d1dad7] py-2 px-2 text-[#d1dad7]">
                activiteit
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
                  href="'../../../../images/roxane.png"
                  download
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

            <div className="w-full h-auto flex flex-row mb-2 relative bg-lime-950">
              <div className="w-1/5 flex justify-center items-center border-[#d1dad7] py-2 border-r px-2 text-[#d1dad7]">
                11-12
              </div>

              <div className="w-3/5 flex justify-center items-center border-[#d1dad7] py-2 px-2 text-[#d1dad7]">
                activiteit
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
                  href="'../../../../images/roxane.png"
                  download
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
          </div>
        </div>
      </div>
    </>
  );
};
  


export default Agenda
