
import React from 'react'
import Image from 'next/image'
import close from '../public/icons/close2.png'

const Modal = ({currentImage, nextImage, prevImage, closeModal}) => {

  return (
    <div className="w-full h-screen fixed flex justify-center items-center top-0 left-0 z-10 bg-[rgba(48,59,51,0.8)]">

      <div className="mx-4 flex items-center flex-col absolute">

        <div
          className="text-green-950 cursor-pointer absolute -top-[45px]"
          onClick={closeModal}
        >
          <Image src={close} width={35} height={35} alt="" />
        </div>

        <div className="relative">
          <Image
            src={currentImage}
            alt=""
            width={800}
            height={0}
            className="w-[800px] h-auto shadow-[0px_4px_28px_rgba(0,0,0,0.5)] border-2 border-[#d7e2df]"
            onClick={closeModal}
          />
        </div>

        <div className="w-full max-w-[800px] h-[60px] flex justify-center bottom-30 right-[50%]">

          <div
            className="w-28 p-2 cursor-pointer rounded-full flex justify-center text-white mr-1 mt-4 border-2 shadow-[0px_4px_28px_rgba(0,0,0,0.5)]"
            onClick={prevImage}
          >
            Vorige
          </div>

          <div
            className="cursor-pointer w-28 p-2 rounded-full flex justify-center text-white ml-1 mt-4 border-2 shadow-[0px_4px_28px_rgba(0,0,0,0.5)]"
            onClick={nextImage}
          >
            Volgende
          </div>

        </div>

      </div>

    </div>
  );
}

export default Modal
