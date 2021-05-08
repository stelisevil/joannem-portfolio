const Campaigns = ({ campaign }) => (
  <>
    <div className="text-4xl font-bold mb-3">{campaign.pageTitle}</div>
    <div className="mb-12">{campaign.pageDescription}</div>
  </>
);

export default Campaigns;
