import Image from "next/image";
import wandelaars3 from "../public/images/wandelaars3.png";
import General from "./components/General";
import Overons from "./components/Overons";
import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <section className="flex justify-center min-h-screen flex-col w-full">
      <Hero />
      <General />

      <div
        id="agenda"
        className="w-full h-[700px] bg-[#9fafab] text-4xl flex items-center justify-center text-green-950 border"
      >
        Agenda
      </div>

      <Overons />

      <div className="w-full h-[700px] flex flex-row">
        <div className="w-full max-w-[1980px] h-auto bg-[url('../public/images/muiderkerk2.jpg')] bg-center max-headerimg:w-full max-headerimg:bg-center"></div>
      </div>

      <div
        id="activiteiten"
        className="w-full h-[700px] bg-white text-green-950/40 text-4xl flex items-center justify-center"
      >
        Activiteiten
      </div>
      <div
        id="contact"
        className="w-full h-[700px] bg-[#9fafab] text-green-950 text-4xl flex items-center justify-center"
      >
        contact
      </div>
    </section>
  );
}
