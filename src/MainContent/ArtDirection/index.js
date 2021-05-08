import Carousel from "../../components/Carousel";
import SquareMontage from "../../components/SquareMontage";

const ArtDirection = ({ artDirection }) => (
  <>
    <div className="text-4xl font-bold mb-3">{artDirection.pageTitle}</div>
    <div className="mb-12">{artDirection.pageDescription}</div>
    {artDirection.mainSquareMontage.map(montage => (
      <SquareMontage montage={montage} key={montage.id} />
    ))}
    {artDirection.fashionArtDirectionCarousel.map(carousel => (
      <Carousel carousel={carousel} key={carousel.id} />
    ))}
  </>
);

export default ArtDirection;
