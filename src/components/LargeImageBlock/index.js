const getFormat = (mimeType) => mimeType.split("/")[0];

const displayContent = (content) => {
  if (getFormat(content.mimeType) === "image") {
    return <img className="w-full p-2" src={content.url} alt={content.alt} />;
  }
  return (
    <video
      className="w-72 mx-auto"
      src={content.video.mp4Url}
      type={content.mimeType}
      poster={content.video.thumbnailUrl}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

const LargeImageBlock = ({ block }) => (
  <div className="flex flex-col justify-center items-center w-full mb-12">
    <div className="md:w-3/4 w-full mb-6">
      {displayContent(block.largeImage)}
    </div>
    <div className="text-3xl font-bold mb-2 text-center">{block.title}</div>
    <div
      className="mb-6 md:w-1/2 w-full text-center"
      dangerouslySetInnerHTML={{ __html: block.description }}
    ></div>
  </div>
);

export default LargeImageBlock;
