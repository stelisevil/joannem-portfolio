import SocialMontage from "../../components/SocialMontage";

const SocialAndVideo = ({ socialAndVideo }) => (
  <>
    <div className="text-4xl font-bold mb-2">{socialAndVideo.pageTitle}</div>
    <div className="mb-6">{socialAndVideo.pageDescription}</div>
    {socialAndVideo.mainSocialMontage.map(montage => (
      <SocialMontage montage={montage} id={montage.id} />
    ))}
  </>
);

export default SocialAndVideo;
