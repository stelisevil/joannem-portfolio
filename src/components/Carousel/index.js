import { useState } from "react";
import nextBtn from "../../assets/NextBtn.png";
import prevBtn from "../../assets/PrevBtn.png";

const Carousel = ({ carousel }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const numberOfCarouselImages = carousel.carouselImages.length;

  return (
    <div className="flex flex-col justify-center items-center w-full mb-12">
      <div className="flex relative md:w-3/4 w-full mb-6">
        <div
          className="absolute left-2 h-full w-8 md:w-12 text-2xl flex cursor-pointer items-center justify-center bg-white bg-opacity-0 hover:bg-opacity-50 transition-all"
          onClick={() => {
            setCarouselIndex(prevState => {
              if (prevState === 0) return numberOfCarouselImages - 1;
              return prevState - 1;
            });
          }}
        >
          <img src={prevBtn} width="18" height="22" alt="previous" />
        </div>
        <img
          className="w-full p-2 h-full"
          src={carousel.carouselImages[carouselIndex].url}
          alt={carousel.carouselImages[carouselIndex].alt}
        />
        <div
          className="absolute right-2 h-full w-8 md:w-12 text-2xl flex cursor-pointer items-center justify-center bg-white bg-opacity-0 hover:bg-opacity-50 transition-all"
          onClick={() => {
            setCarouselIndex(prevState => {
              if (prevState === numberOfCarouselImages - 1) return 0;
              return prevState + 1;
            });
          }}
        >
          <img src={nextBtn} width="18" height="22" alt="next" />
        </div>
      </div>
      <div className="text-3xl font-bold mb-2 text-center">
        {carousel.title}
      </div>
      <div className="mb-6 md:w-1/2 w-full text-center">
        {carousel.description}
      </div>
    </div>
  );
};

export default Carousel;
