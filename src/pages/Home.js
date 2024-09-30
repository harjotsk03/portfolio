import React, { useState } from "react";
import {
  BiFile,
  BiFileBlank,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import resume from "../images/HarjotSinghResume.pdf";
import Switch from "../components/Switch";
import figma from "../images/figma.png";
import dev from "../images/dev.png";
import des from "../images/des.png";
import dev2 from "../images/dev2.png";

const Home = () => {
  const [occupation, setOccupation] = useState("designer");

  const toggleOccupation = () => {
    setOccupation((prev) => (prev === "developer" ? "designer" : "developer"));
  };

  const buttonData = [
    {
      icon: <BiLogoLinkedin size={25} />,
      tooltip: "LinkedIn",
      key: "linkedin",
      link: "https://www.linkedin.com/in/harjotsingh7/",
    },
    {
      icon: <BiLogoGithub size={25} />,
      tooltip: "GitHub",
      key: "github",
      link: "https://github.com/harjotsk03",
    },
    {
      icon: <BiFileBlank size={25} />,
      tooltip: "Resume",
      key: "resume",
      link: resume,
    },
    {
      icon: <BiLogoInstagram size={25} />,
      tooltip: "Instagram",
      key: "instagram",
      link: "https://www.instagram.com/7harjotsk/",
    },
  ];

  const ButtonWithTooltip = ({ icon, tooltip, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative group inline-block" key={tooltip}>
        <div className="hidden lg:flex bg-gray-100 poppins-regular bg-opacity-70 text-black px-2 py-1 text-xs rounded-lg absolute -top-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-500">
          {tooltip}
        </div>
        <button className="text-black opacity-10 p-3 rounded-lg hover:bg-white hover:bg-opacity-5 hover:opacity-90 transition duration-300 ease-in-out">
          {icon}
        </button>
      </div>
    </a>
  );
  return (
    <>
      <div className="h-max lg:px-40 pt-0 lg:pt-24 w-full z-20 flex flex-col">
        <div className="w-full flex lg:bg-gradient-to-b lg:from-[rgb(220,220,220,0.5)] lg:to-transparent flex-col gap-5 lg:px-32 px-10 py-24 lg:py-52 h-max rounded-t-[6vw]">
          <div className="flex flex-col gap-8 items-center">
            <Switch
              occupation={occupation}
              toggleOccupation={toggleOccupation}
            />
            <h1 className="poppins-semibold mt-14 lg:mt-0 text-8xl">
              Harjot Singh
            </h1>
            <h1
              className={`poppins-regular flex lg:hidden ${
                occupation == "developer" ? "text-purple-500" : "text-blue-400"
              } flex flex-col items-center gap-2 text-center w-full text-md lg:text-xl`}
            >
              computer science & interactive technology student at sfu
            </h1>

            <h1 className="poppins-regular hidden text-center justify-center flex gap-2 lg:flex text-md w-full lg:text-xl">
              <span
                className={`${
                  occupation === "developer" ? "text-black" : "text-blue-500"
                }`}
              >
                Computer Science{" "}
              </span>
              &{" "}
              <span
                className={`${
                  occupation === "designer" ? "text-black" : "text-purple-500"
                }`}
              >
                Interactive Technology{" "}
              </span>{" "}
              Student at Simon Fraser University
            </h1>
            <div className="flex flex-col items-center w-full mt-6">
              <div className="">
                <div className="-ml-3">
                  {buttonData.map(({ icon, tooltip, link, key }) => (
                    <ButtonWithTooltip
                      icon={icon}
                      tooltip={tooltip}
                      link={link}
                      key={key}
                    />
                  ))}
                </div>
              </div>
              <p className="poppins-light text-black text-opacity-20 text-sm hover:cursor-default">
                get in touch
              </p>
            </div>
          </div>
          <div className="absolute lg:block hidden z-10 lg:top-40 lg:right-32 lg:w-1/4 right-0 top-24 w-2/3 transition-opacity">
            {occupation === "developer" && (
              <img
                className={`w-full h-full object-cover fade-enter fadeupnormal fade-enter-active`}
                src={figma}
                alt="Figma Design"
                style={{ transform: "rotate(3deg)" }}
              />
            )}
            {occupation === "designer" && (
              <img
                className={`w-full h-full object-cover fade-enter fadeupnormal fade-enter-active`}
                src={dev}
                alt="Development"
                style={{ transform: "rotate(4deg)" }}
              />
            )}
          </div>
          <div className="lg:block absolute hidden z-10 bottom-8 -left-4 w-2/3 lg:bottom-10 lg:left-40 lg:w-1/4 transition-opacity">
            {occupation === "developer" && (
              <img
                className={`w-full h-full object-cover fade-enter fadeupnormalleft fade-enter-active`}
                src={des}
                alt="Figma Design"
                style={{ transform: "rotate(-7deg)" }}
              />
            )}
            {occupation === "designer" && (
              <img
                className={`w-full h-full object-cover fade-enter fadeupnormalleft fade-enter-active`}
                src={dev2}
                alt="Development"
                style={{ transform: "rotate(3deg)" }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
