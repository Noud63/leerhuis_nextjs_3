import Image from 'next/image'
import wandelaars3 from '../public/images/wandelaars3.png'
import General from '@/components/General';
import Overons from '@/components/Overons';
import Totop from '@/components/Totop';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col">
      <Navbar />
      <div className="hero w-full h-[600px] flex flex-row justify-center items-center bg-gradient-to-t from-[#839490] to-[#d7e2df] pt-10 max-thumbs:h-[400px]">
        <div className="w-1/2 pt-20 flex flex-col justify-end items-center max-headerimg:w-full max-thumbs:w-[400px]">
          <span className="flex justify-center items-center bg-transparent font-papyrus text-red-900 text-5xl tracking-widest max-thumbs:text-4xl">
            Leerhuis Amsterdam
          </span>
          <span className="flex justify-center items-center bg-transparent text-red-900 text-lg font-bold tracking-widest max-thumbs:text-base">
            voor zinvol samenleven
          </span>
          <div className="flex justify-center items-center bg-transparent">
            <Image
              priority={true}
              src={wandelaars3}
              style={{ width: 620, height: 'auto' }}
              alt="wandelaars"
              className="pt-4 max-headerimg:w-[510px] max-thumbs:w-[390px]"
            />
          </div>
        </div>

        <div
          className="w-1/2 flex flex-col justify-center items-center max-md:flex-col
         max-herotext:hidden"
           >
          <div className="w-[60%] flex justify-center items-center flex-col pt-10">
            <span className="w-80 text-xl text-green-950 flex justify-center items-center font-semibold border-b border-green-950 pb-2 mb-2">
              Over het Leerhuis
            </span>
            <div className="w-full flex flex-row justify-center max-md:flex-col">
              <div className="w-full px-8 pb-8 pt-4 text-green-950 flex flex-col leading-2 text-md">
                Leerhuis Amsterdam richt zich op zinvol samen leven in een
                complexe wereld die ons voor veel vragen stelt.
                <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en de
                hedendaagse wereld van kunst en cultuur zoeken wij hierover het
                gesprek.
                <br /> We organiseren daarom bijeenkomsten, dialogen en
                cursussen, in de Muiderkerk, waarin deze werelden elkaar
                ontmoeten.
                <br />
              </div>
            </div>

            <Link href="/activiteiten">
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

      <General />

      <div
        id="agenda"
        className="w-full h-[700px] bg-[#a9bab6] text-4xl flex items-center justify-center text-green-950"
      >
        Agenda
      </div>

      <Overons />

      <div className="w-full h-[700px] bg-[url('../public/images/muiderkerk3.jpg')] bg-center"></div>

      <div
        id="activiteiten"
        className="w-full h-[700px] bg-white text-green-950/40 text-4xl flex items-center justify-center"
      >
        Activiteiten
      </div>
      <div
        id="contact"
        className="w-full h-[700px] bg-[#a9bab6] text-green-950 text-4xl flex items-center justify-center"
      >
        contact
      </div>

      <Totop />
    </section>
  );
}
