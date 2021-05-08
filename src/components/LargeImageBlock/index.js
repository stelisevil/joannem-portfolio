const LargeImageBlock = ({ block }) => (
  <div className="flex flex-col justify-center items-center w-full mb-12">
    <div className="md:w-3/4 w-full mb-6">
      <img
        className="w-full p-2"
        src={block.largeImage.url}
        alt={block.largeImage.alt}
      />
    </div>
    <div className="text-3xl font-bold mb-2 text-center">{block.title}</div>
    <div className="mb-6 md:w-1/2 w-full text-center">{block.description}</div>
  </div>
);

export default LargeImageBlock;
