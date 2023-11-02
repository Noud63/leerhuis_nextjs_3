

const Overons = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[780px] flex flex-row items-center justify-center bg-white bg-[url('../public/images/overonsbg.png')] bg-center"
    >
      <div className="max-w-[630px] h-full flex flex-col items-center justify-center">
        <span className="w-80 text-2xl text-[#9e4329] flex justify-center font-semibold border-b border-red-800 pb-2">
          Over het Leerhuis
        </span>
        <div className="w-full flex justify-center">
          <div className="w-full p-8 text-[#9e4329] flex flex-col leading-8 text-lg">
            Leerhuis Amsterdam richt zich op zinvol samen leven in een complexe
            wereld die ons voor veel vragen stelt.
            <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en de
            hedendaagse wereld van kunst en cultuur zoeken wij hierover het
            gesprek.
            <br /> We organiseren daarom bijeenkomsten, dialogen en cursussen,
            in de Muiderkerk, waarin deze werelden elkaar ontmoeten.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overons;
