const getFormat = (mimeType) => mimeType.split("/")[0];

const displayContent = (content, size) => {
  if (getFormat(content.mimeType) === "image") {
    return (
      <img
        className={`w-${size === "large" ? "full" : "1/2"} p-2 h-full`}
        src={content.url}
        alt={content.alt}
      />
    );
  }
  return (
    <video
      className={`w-${size === "large" ? "full" : "1/2"} p-2 h-full`}
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

const SocialMontage = ({ montage }) => (
  <div className="flex flex-col justify-center items-center w-full mb-12">
    <div className="flex flex-col md:flex-row md:w-3/4 w-full justify-center items-center mb-6">
      <div className="flex flex-col md:w-1/2 w-full">
        {displayContent(montage.largeImageLeft, "large")}
        <div className="flex w-full">
          {displayContent(montage.smallImages[0])}
          {displayContent(montage.smallImages[1])}
        </div>
      </div>
      <div className="flex md:flex-col-reverse md:w-1/2 w-full">
        {displayContent(montage.largeImageRight, "large")}
        <div className="flex w-full">
          {displayContent(montage.smallImages[2])}
          {displayContent(montage.smallImages[3])}
        </div>
      </div>
    </div>
    <div className="text-3xl font-bold mb-2 text-center">{montage.title}</div>
    <div className="mb-6 md:w-1/2 w-full text-center">
      {montage.description}
    </div>
  </div>
);

export default SocialMontage;
