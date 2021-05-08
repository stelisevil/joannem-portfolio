const SquareMontage = ({ montage }) => (
  <div className="flex flex-col justify-center items-center w-full mb-12">
    <div className="flex flex-col md:flex-row md:w-3/4 w-full justify-center items-center mb-6">
      <div className="flex flex-col md:w-1/2 w-full">
        <img
          className="w-full p-2 h-full"
          src={montage.largeImageLeft.url}
          alt={montage.largeImageLeft.alt}
        />
        <div className="flex w-full">
          <img
            className="p-2 w-1/2 h-full"
            src={montage.smallImages[0].url}
            alt={montage.smallImages[0].alt}
          />
          <img
            className="p-2 w-1/2 h-full"
            src={montage.smallImages[1].url}
            alt={montage.smallImages[1].alt}
          />
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 w-full">
        <img
          className="w-full p-2 h-full"
          src={montage.largeImageRight.url}
          alt={montage.largeImageRight.alt}
        />
        <div className="flex w-full">
          <img
            className="p-2 w-1/2 h-full"
            src={montage.smallImages[2].url}
            alt={montage.smallImages[2].alt}
          />
          <img
            className="p-2 w-1/2 h-full"
            src={montage.smallImages[3].url}
            alt={montage.smallImages[3].alt}
          />
        </div>
      </div>
    </div>
    <div className="text-3xl font-bold mb-2 text-center">{montage.title}</div>
    <div className="mb-6 md:w-1/2 w-full text-center">
      {montage.description}
    </div>
  </div>
);

export default SquareMontage;
