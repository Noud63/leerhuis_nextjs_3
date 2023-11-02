"use client";

import React,{useState} from "react";
import { images }  from "../../utils/lightboximages";
import Modal from "./Modal";
import LightBoxImages from "./LightBoxImages";

const General = () => {

  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleImage = (image, index) => {
      setCurrentImage(image)
      setCurrentIndex(index)
  }

const nextImage = () => {
  if (currentIndex >= images.length - 1) {
    setCurrentIndex(0);
    setCurrentImage(images[0].img);
    return;
  }

  const newIndex = currentIndex + 1

  if(newIndex <= images.length - 1){
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex].img);
  }
}


const prevImage = () => {
  if (currentIndex === 0) {
    setCurrentIndex(images.length - 1);
    setCurrentImage(images[images.length - 1].img);
    return;
  }

  const newIndex = currentIndex - 1

  if (newIndex <= images.length - 1) {
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex].img);
  }

}

 const closeModal = () => {
   setCurrentImage(null);
 };

  return (
    <>
      <section className="w-full h-[700px] flex flex-row max-herotext:flex-col max-herotext:h-auto bg-white relative">
        <div className="w-1/2 h-[700px] bg-[url('../public/images/overonsbg.png')] bg-no-repeat py-20 px-20 max-herotext:w-full max-herotext:h-auto">
          <span className="w-full flex justify-center text-xl text-red-800 font-semibold">
            Lorem Ipsum, where does it come from?
          </span>
          <br />
          <div className="text-red-800 mt-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. <br />
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source.
            <br />
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. <br />
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32.
          </div>
        </div>

        <div
          className="w-1/2 h-[700px] bg-black/90 flex items-center justify-center
           bg-[url('../public/images/overonsbg.png')] bg-no-repeat bg-right max-herotext:w-full max-herotext:h-auto py-20"
        >
          <div className="w-auto grid grid-cols-3 grid-rows-2 justify-center items-center gap-9 max-thumbs:grid-cols-2 max-thumbs:gap-4">
            {images && images.map((image, index) => {
              return (
                <LightBoxImages key={image.id} image={image} index={index} handleImage={handleImage}/>
              );
            })}
          </div>
        </div>
      </section>

      <div>
        {currentImage && (
          <Modal
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            nextImage={nextImage}
            prevImage={prevImage}
            closeModal={closeModal}
            index={currentIndex}
          />
        )}
      </div>
    </>
  );
};

export default General;
