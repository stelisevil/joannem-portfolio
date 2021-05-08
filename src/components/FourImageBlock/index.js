const FourImageBlock = ({ block }) => (
  <div className="flex flex-col justify-center items-center w-full mb-12">
    <div className="flex flex-col md:flex-row md:w-3/4 w-full justify-center items-center mb-6">
      <div className="flex flex-col md:w-1/2 w-full">
        <img
          className="w-full p-2"
          src={block.images[0].url}
          alt={block.images[0].alt}
        />
        <img
          className="w-full p-2"
          src={block.images[1].url}
          alt={block.images[1].alt}
        />
      </div>
      <div className="flex flex-col md:w-1/2 w-full">
        <img
          className="w-full p-2"
          src={block.images[2].url}
          alt={block.images[2].alt}
        />
        <img
          className="w-full p-2"
          src={block.images[3].url}
          alt={block.images[3].alt}
        />
      </div>
    </div>
    <div className="text-3xl font-bold mb-2 text-center">{block.title}</div>
    <div className="mb-6 md:w-1/2 w-full text-center">{block.description}</div>
  </div>
);

export default FourImageBlock;
