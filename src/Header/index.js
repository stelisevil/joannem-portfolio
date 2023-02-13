import { useState } from "react";
import TabList from "./TabList";
import chevron from "./images/ArrowDown.png";
import burger from "./images/BurgerMenu.png";
import cv from "./images/cv.pdf";

const Header = ({ setContent }) => {
  const [myWorkMenuOpen, setMyWorkMenu] = useState(false);
  const [burgerMenuOpen, setBurgerMenu] = useState(false);

  return (
    <div className="flex w-full justify-between pt-12 pb-4 px-2 sticky top-0 bg-white z-50">
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
          <div className="flex flex-col text-center items-center border boder-red-400 absolute w-full left-0 top-20 bg-white">
            <button
              className="my-5"
              onClick={() => {
                setContent("home");
                setBurgerMenu(false);
              }}
            >
              HOME
            </button>
            <button
              className="flex items-center my-5 cursor-pointer relative"
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
              <div className="w-36 top-8 -left-5 text-sm text-center transition-all">
                <TabList
                  setContent={(content) => {
                    setContent(content);
                    setMyWorkMenu(false);
                    setBurgerMenu(false);
                  }}
                />
              </div>
            )}
            <a href={cv} className="my-5" target="_blank" rel="noreferrer">
              CV
            </a>
            <a
              href="https://uk.linkedin.com/in/joanne-mcgarvie"
              className="my-5"
            >
              LINKEDIN
            </a>
          </div>
        )}
      </div>
      <div className="md:flex hidden">
        <button
          className="mx-5 cursor-pointer"
          onClick={() => {
            setContent("home");
          }}
        >
          HOME
        </button>
        <button
          className="flex items-center mx-5 cursor-pointer relative"
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
            <div className="absolute w-36 top-8 -left-4 border border-gray-200 text-sm text-left bg-white">
              <TabList
                setContent={(content) => {
                  setContent(content);
                  setMyWorkMenu(false);
                  setBurgerMenu(false);
                }}
              />
            </div>
          )}
        </button>
        <a href={cv} className="mx-5" target="_blank" rel="noreferrer">
          CV
        </a>
        <a
          href="https://uk.linkedin.com/in/joanne-mcgarvie"
          className="ml-3"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default Header;
