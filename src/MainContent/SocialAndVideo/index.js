import SocialMontage from "../../components/SocialMontage";

const SocialAndVideo = ({ socialAndVideo }) => (
  <>
    <div className="text-4xl font-bold mb-3">{socialAndVideo.pageTitle}</div>
    <div className="mb-12">{socialAndVideo.pageDescription}</div>
    {socialAndVideo.mainSocialMontage.map((montage) => (
      <SocialMontage montage={montage} key={montage.id} />
    ))}
  </>
);

export default SocialAndVideo;
