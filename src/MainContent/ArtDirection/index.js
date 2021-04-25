import Carousel from "../../components/Carousel";
import SquareMontage from "../../components/SquareMontage";

const ArtDirection = ({ artDirection }) => (
  <>
    <div className="text-4xl font-bold mb-2">{artDirection.pageTitle}</div>
    <div className="mb-6">{artDirection.pageDescription}</div>
    {artDirection.mainSquareMontage.map(montage => (
      <SquareMontage montage={montage} />
    ))}
    {artDirection.fashionArtDirectionCarousel.map(carousel => (
      <Carousel carousel={carousel} />
    ))}
  </>
);

export default ArtDirection;
