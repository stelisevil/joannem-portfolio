import LargeImageBlock from "../../components/LargeImageBlock";

const UxAndUi = ({ uxAndUi }) => (
  <>
    <div className="text-4xl font-bold mb-2">{uxAndUi.pageTitle}</div>
    <div className="mb-6">{uxAndUi.pageDescription}</div>
    {uxAndUi.largeImageBlocks.map(block => (
      <LargeImageBlock block={block} key={block.id} />
    ))}
  </>
);

export default UxAndUi;
