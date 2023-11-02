import React from "react";
import Header from "@/app/components/Header";

const Activiteiten = () => {
  return (
    <>
      <Header />
      <div className="contact w-full min-h-screen flex flex-col items-center justify-start mb-40">
        <span className="w-full mt-[40px] flex justify-center text-green-950 text-2xl font-semibold">
          Al onze activiteiten
        </span>
        <div className="w-full max-w-[620px] min-h-screen bg-transparent mt-4 border-t border-b border-green-950">
          &nbsp;
        </div>
      </div>
    </>
  );
};

export default Activiteiten;
