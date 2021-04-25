const Campaigns = ({ campaign }) => (
  <>
    <div className="text-4xl font-bold mb-2">{campaign.pageTitle}</div>
    <div className="mb-6">{campaign.pageDescription}</div>
  </>
);

export default Campaigns;
