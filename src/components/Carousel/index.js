import { useState } from "react";

const Carousel = ({ carousel }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const numberOfCarouselImages = carousel.carouselImages.length;

  return (
    <div
      className="flex flex-col justify-center items-center w-full mb-8"
      key={carousel.id}
    >
      <div className="flex relative md:w-3/4 w-full mb-6">
        <div
          className="absolute left-0 h-full w-16 text-2xl flex cursor-pointer items-center justify-center"
          onClick={() => {
            setCarouselIndex(prevState => {
              if (prevState === 0) return numberOfCarouselImages - 1;
              return prevState - 1;
            });
          }}
        >
          &lt;
        </div>
        <img
          className="w-full p-2"
          src={carousel.carouselImages[carouselIndex].url}
          alt={carousel.carouselImages[carouselIndex].alt}
        />
        <div
          className="absolute right-0 h-full w-16 text-2xl flex cursor-pointer items-center justify-center"
          onClick={() => {
            setCarouselIndex(prevState => {
              if (prevState === numberOfCarouselImages - 1) return 0;
              return prevState + 1;
            });
          }}
        >
          &gt;
        </div>
      </div>
      <div className="text-3xl font-bold mb-2">{carousel.title}</div>
      <div className="mb-6 md:w-1/2 w-full text-center">
        {carousel.description}
      </div>
    </div>
  );
};

export default Carousel;
