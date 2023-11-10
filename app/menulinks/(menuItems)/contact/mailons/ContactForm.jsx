"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactForm = () => {

  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });


    if (res.ok) {

      console.log("Message sent successfully");

      setShowSuccess(true)

      setTimeout(()=> {
      setShowSuccess(false);
       router.push("/");
      },3000)
      
    }

    if (!res.ok) {
      console.log("Error sending message");
        setShowError(true);
         setTimeout(() => {
           setShowError(false);
         }, 3000);
      }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="w-full flex flex-col">
        <label htmlFor="name" className="pt-4 pb-2">
          Naam:
        </label>
        <input
          type="text"
          className="h-10 outline-none pl-2"
          name="name"
          required
        />

        <label
          htmlFor="email"
          className="pt-4 pb-2 text-green-950 text-base"
          required
        >
          Email:
        </label>
        <input type="email" className="h-10 outline-none pl-2" name="email" />

        <label htmlFor="message" className="pt-4 pb-2">
          Bericht:
        </label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          className="outline-none pl-2 pt-2"
        />
      </div>

      <button
        type="submit"
        className="w-full text-[#d7e2df] bg-gradient-to-t from-black to-[#697c77] py-3 
              border-t border-[#a8b8b4] shadow:green-950 shadow-lg mt-6"
      >
        Verzend
      </button>

      {showSuccess ? 
        <div
          className="w-full flex justify-center text-[#d7e2df] bg-gradient-to-t from-black to-[#697c77] py-3 
              border-t border-[#a8b8b4] shadow:green-950 shadow-lg mt-2"
        >
          Bericht succesvol verstuurd!
        </div> : ""}

        {showError ? <div
          className="w-full flex justify-center text-[#d7e2df] bg-gradient-to-t from-red-950 to-red-800 py-3 
              border-t border-[#a8b8b4] shadow:green-950 shadow-lg mt-2"
        >
          Bericht niet verstuurd!
        </div> : ""}
    </form>
  );
};

export default ContactForm;
