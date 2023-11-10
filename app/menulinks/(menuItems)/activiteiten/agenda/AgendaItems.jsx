"use client";
import React, { useState } from "react";
import Image from "next/image";

const AgendaItems = ({ agenda }) => {
  const [imgLoad, setImgLoad] = useState(false);

  const handleImageLoad = (img) => {
    if (img) {
      setImgLoad(true);
    }
    console.log("hallo");
  };

  return (
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
            onLoad={() => handleImageLoad(agenda.image)}
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
  );
};

export default AgendaItems;
