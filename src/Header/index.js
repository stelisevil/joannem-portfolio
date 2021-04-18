import { useState } from "react";
import chevron from "./ArrowDown.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex w-full justify-between mt-12">
      <div className="m-1">JOANNE MCGARVIE</div>
      <div className="flex">
        <a href="/" className="m-1 mx-3">
          HOME
        </a>
        <div
          className="flex items-center m-1 mx-3 cursor-pointer relative"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          MY WORK
          <img
            className="h-2 ml-1"
            src={chevron}
            alt="open work dropdown menu"
          />
          {menuOpen && (
            <div className=" absolute w-32 top-8 -left-5 border border-gray-200 text-sm text-center">
              <ul>
                <li className="m-2">UX and UI</li>
                <li className="m-2">Campaigns</li>
                <li className="m-2">Graphic design</li>
                <li className="m-2">Social and Video</li>
                <li className="m-2">Art Direction</li>
              </ul>
            </div>
          )}
        </div>
        <div className="m-1 mx-3">CV</div>
        <a
          href="https://uk.linkedin.com/in/joanne-mcgarvie"
          className="m-1 mx-3"
        >
          LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default Header;
