"use client"
import React from 'react'
import Image from 'next/image';

const LightBoxImages = ({image, index, handleImage}) => {
  return (
    <div
      key={image.id}
      className="w-40 h-40 text-white flex justify-center items-center bg-transparent p-2 border-2 border-[#9fafab]"
    >
      <Image
        src={image.img}
        width={140}
        height={140}
        alt={image.alt}
        className="object-cover h-full w-auto grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
        onClick={() => handleImage(image.img, index)}
      />
    </div>
  );
}

export default LightBoxImages
