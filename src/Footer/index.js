import linkedin from "./images/LinkedIn.png";
import mail from "./images/Mail.png";

const Footer = () => (
  <div className="flex flex-col justify-center">
    <p className="text-center mb-2">GET IN TOUCH</p>
    <div className="flex justify-center">
      <a
        href="https://uk.linkedin.com/in/joanne-mcgarvie"
        className="m-2 h-8"
        target="_blank"
        rel="noreferrer"
      >
        <img className="h-8" alt="linkedin logo" src={linkedin} />
      </a>
      <a href="mailto:joanne.mcgarvie@gmail.com">
        <img className="m-2 h-8" alt="mail logo" src={mail} />
      </a>
    </div>
  </div>
);

export default Footer;
