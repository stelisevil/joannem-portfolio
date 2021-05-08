import FourImageBlock from "../../components/FourImageBlock";
import SquareMontage from "../../components/SquareMontage";

const GraphicDesign = ({ graphicDesign }) => (
  <>
    <div className="text-4xl font-bold mb-3">{graphicDesign.pageTitle}</div>
    <div className="mb-12">{graphicDesign.pageDescription}</div>
    {graphicDesign.mainImageBlock.map(block => (
      <FourImageBlock block={block} key={block.id} />
    ))}
    {graphicDesign.squareMontage.map(montage => (
      <SquareMontage montage={montage} key={montage.id} />
    ))}
  </>
);

export default GraphicDesign;
