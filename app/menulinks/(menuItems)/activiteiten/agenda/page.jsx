"use client"
import React from "react";
import { agenda } from "../../../../../public/agenda.js"
import AgendaItems from "./agendaItems";

const Agenda = () => {
  return (
      <div className="contact w-full min-h-screen flex flex-col items-center justify-start mb-12">
        <div className="w-full max-w-[620px] mt-[40px] mx-2 px-4">

          <span className="w-full flex justify-center text-green-950 text-2xl font-semibold border-b border-green-950 pb-4">
            Agenda 2023 - 2024
          </span>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-4 max-agenda:grid-cols-1">
            {agenda && agenda.map((agenda) => (
              <AgendaItems agenda={agenda} key={agenda.id} />
            ))}
          </div>

        </div>
      </div>
    
  );
};

export default Agenda;
