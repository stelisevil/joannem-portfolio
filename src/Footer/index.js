import linkedin from "./images/LinkedIn.png";
import mail from "./images/Mail.png";

const Footer = () => (
  <div className="flex flex-col justify-center">
    <p className="text-center text-xl mb-2">GET IN TOUCH</p>
    <div className="flex justify-center">
      <img className="m-2" alt="linkedin logo" src={linkedin} />
      <img className="m-2" alt="mail logo" src={mail} />
    </div>
  </div>
);

export default Footer;
