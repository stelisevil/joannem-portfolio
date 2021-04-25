import FourImageBlock from "../../components/FourImageBlock";

const GraphicDesign = ({ graphicDesign }) => (
  <>
    <div className="text-4xl font-bold mb-2">{graphicDesign.pageTitle}</div>
    <div className="mb-6">{graphicDesign.pageDescription}</div>
    {graphicDesign.mainImageBlock.map(block => (
      <FourImageBlock block={block} key={block.id} />
    ))}
  </>
);

export default GraphicDesign;
