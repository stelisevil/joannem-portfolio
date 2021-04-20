import { useState } from "react";
import chevron from "./images/ArrowDown.png";
import burger from "./images/BurgerMenu.png";
import cv from "./images/cv.pdf";

const Header = () => {
  const [myWorkMenuOpen, setMyWorkMenu] = useState(false);
  const [burgerMenuOpen, setBurgerMenu] = useState(false);

  return (
    <div className="flex w-full justify-between mt-12">
      <div>JOANNE MCGARVIE</div>
      <div className="md:hidden flex cursor-pointer">
        <button
          onClick={() => {
            setBurgerMenu(!burgerMenuOpen);
          }}
        >
          <img src={burger} alt="burger menu" className="w-8" />
        </button>
        {burgerMenuOpen && (
          <div className="flex flex-col text-center items-center border boder-red-400 fixed w-full left-0 top-24 bg-white">
            <div className="my-4">HOME</div>
            <button
              className="flex items-center my-4 cursor-pointer relative"
              onClick={() => {
                setMyWorkMenu(!myWorkMenuOpen);
              }}
            >
              MY WORK
              <img
                className="h-2 ml-1"
                src={chevron}
                alt="open work dropdown menu"
              />
            </button>
            {myWorkMenuOpen && (
              <div className="w-32 top-8 -left-5 text-sm text-center">
                <ul className="cursor-default">
                  <li className="m-2">UX and UI</li>
                  <li className="m-2">Campaigns</li>
                  <li className="m-2">Graphic design</li>
                  <li className="m-2">Social and Video</li>
                  <li className="m-2">Art Direction</li>
                </ul>
              </div>
            )}
            <a href={cv} className="my-4" target="_blank" rel="noreferrer">
              CV
            </a>
            <a
              href="https://uk.linkedin.com/in/joanne-mcgarvie"
              className="my-4"
            >
              LINKEDIN
            </a>
          </div>
        )}
      </div>
      <div className="md:flex hidden">
        <div className="mx-3">HOME</div>
        <button
          className="flex items-center mx-3 cursor-pointer relative"
          onClick={() => {
            setMyWorkMenu(!myWorkMenuOpen);
          }}
        >
          MY WORK
          <img
            className="h-2 ml-1"
            src={chevron}
            alt="open work dropdown menu"
          />
          {myWorkMenuOpen && (
            <div className="absolute w-32 top-8 -left-5 border border-gray-200 text-sm text-center">
              <ul className="cursor-default">
                <li className="m-2">UX and UI</li>
                <li className="m-2">Campaigns</li>
                <li className="m-2">Graphic design</li>
                <li className="m-2">Social and Video</li>
                <li className="m-2">Art Direction</li>
              </ul>
            </div>
          )}
        </button>
        <a href={cv} className="mx-3" target="_blank" rel="noreferrer">
          CV
        </a>
        <a href="https://uk.linkedin.com/in/joanne-mcgarvie" className="ml-3">
          LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default Header;
