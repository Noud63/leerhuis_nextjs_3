"use client"
import {useState, useEffect} from 'react'

const Totop = () => {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      offset > 700 ? setShowButton(true) : setShowButton(false);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div>
      {showButton ? (
        <div className="fixed bottom-6 right-4">
          <button
            className="w-20 h-20 rounded-full border-2 border-[#5a645c] text-[#474e48] text-xl font-semibold max-sm:w-14 max-sm:h-14 max-sm:text-sm"
            onClick={scrollToTop}
          >
            to top
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Totop
