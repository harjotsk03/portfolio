import React from "react";
import {
  BiFile,
  BiFileBlank,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import resume from "../images/HarjotSinghResume.pdf";

const Home = () => {
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
      <div className="h-max lg:px-40 pt-24 w-full z-20 flex flex-col">
        <div className="w-full flex lg:bg-gradient-to-b lg:from-[rgb(220,220,220,0.5)] lg:to-transparent flex-col gap-5 lg:px-32 px-10 py-36 h-max rounded-t-[6vw]">
          <div className="flex flex-col gap-8 items-start">
            <h1 className="poppins-semibold text-8xl">harjot singh</h1>
            <h1 className="poppins-regular flex lg:hidden text-md w-full lg:text-xl">
              computer science & interactive technology student at sfu
            </h1>
            <h1 className="poppins-regular hidden lg:flex text-md w-full lg:text-xl">
              computer science & interactive technology student at simon fraser
              university
            </h1>
            <div className="flex flex-col items-end w-full mt-6">
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
        </div>
      </div>
    </>
  );
};

export default Home;
