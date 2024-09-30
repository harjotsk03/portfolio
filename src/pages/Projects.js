import { FiArrowUpRight } from "react-icons/fi";
import studySpotr from "../images/StudySpotr1.png";
import studySpotrLogo from "../images/studySpotrLogo.png";
import sfurobotlogo from "../images/NewLogo.png";
import sfurobot from "../images/sfurobot.png";
import pharmaboticslogo from "../images/pharmaboticsLogo.png";
import pharmabotics from "../images/pharmabotics.png";
import gardenSim from "../images/gardenSimulator.png";
import ecogrowLogo from "../images/ecogrowlogo.png";

const Projects = () => {
  return (
    <>
      <div className="h-max z-10 ml-auto mr-auto w-10/12 mt-0 lg:mt-40 flex flex-col bg-transparent">
        <div className="w-full items-center h-max flex flex-col gap-14 lg:gap-10">
          <div className="w-full lg:w-10/12 bg-gradient-to-b from-[rgb(240,240,240)] to-white px-10 py-10 lg:px-16 lg:py-16 flex flex-col lg:flex-row justify-between overflow-hidden lg:rounded-[3vw] rounded-[7vw] h-max lg:h-[60vh] shadow-[inset_0_0_5px_rgba(0,0,0,0.05)]">
            <div className="flex lg:w-1/2 justify-between flex-col gap-6 lg:gap-2">
              <img
                className="lg:w-16 hidden lg:flex -mt-4 lg:h-16 w-12 h-12 "
                src={studySpotrLogo}
              ></img>

              <div className="flex flex-col gap-3 -mt-4">
                <div className="flex flex-row gap-4 mt-2 lg:mt-0">
                  <button className="group flex flex-row hover:text-orange-500 transition duration-300 ease-in-out text-black rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-xs">
                    Live Site
                    <FiArrowUpRight
                      size={14}
                      strokeWidth={3}
                      className="transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <button className="group flex flex-row hover:text-orange-500 transition duration-500 ease-in-out text-black rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-xs">
                    GitHub
                    <FiArrowUpRight
                      size={14}
                      strokeWidth={3}
                      className="transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
                <h2 className="text-black text-3xl lg:text-3xl poppins-medium">
                  Full Stack Application
                </h2>
                <h2 className="poppins-regular w-2/3 leading-snug text-lg lg:text-lg">
                  Help students find and rate study spots near them.
                </h2>
                <div className="flex flex-wrap lg:w-3/4 mt-4 gap-x-4 lg:gap-y-1 lg:gap-x-6">
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    ReactJS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    TailwindCSS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    NodeJS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    MongoDB
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    Google Maps API
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    JWT
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    ExpressJS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    Cookies
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-4">
                <button className="flex flex-row w-max px-4 py-2 bg-black text-white hover:bg-orange-500 transition ease-in-out duration-500 rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-sm ">
                  Case Study <FiArrowUpRight size={14} strokeWidth={3} />
                </button>
              </div>
            </div>
            <div className="relative h-full mt-3 lg:mt-0 lg:w-1/2 rounded-xl overflow-hidden transition-transform duration-300">
              <img
                className="object-contain opacity-90 w-full h-full transition-transform duration-300"
                src={studySpotr}
                alt="Study Spot"
              />
            </div>
            <div className="flex lg:hidden mt-6 flex-col gap-4">
              <button className="flex flex-row w-max px-4 py-2 bg-black text-white hover:bg-orange-500 transition ease-in-out duration-500 rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-sm ">
                Case Study <FiArrowUpRight size={14} strokeWidth={3} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-10/12 bg-gradient-to-b from-[rgb(240,240,240)] to-white px-10 py-10 lg:px-16 lg:py-16 flex flex-col lg:flex-row justify-between overflow-hidden lg:rounded-[3vw] rounded-[7vw] h-max lg:h-[60vh] shadow-[inset_0_0_5px_rgba(0,0,0,0.05)]">
            <div className="flex lg:w-1/2 justify-between flex-col gap-6 lg:gap-2">
              <img
                className="lg:w-14 hidden lg:flex -mt-4 lg:h-14 w-12 h-12 "
                src={sfurobotlogo}
              ></img>

              <div className="flex flex-col gap-3 -mt-4">
                <div className="flex flex-row gap-4 mt-2 lg:mt-0">
                  <button className="group flex flex-row hover:text-red-600 transition duration-300 ease-in-out text-black rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-xs">
                    Live Site
                    <FiArrowUpRight
                      size={14}
                      strokeWidth={3}
                      className="transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <button className="group flex flex-row hover:text-red-600 transition duration-500 ease-in-out text-black rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-xs">
                    GitHub
                    <FiArrowUpRight
                      size={14}
                      strokeWidth={3}
                      className="transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
                <h2 className="text-black text-3xl lg:text-3xl poppins-medium">
                  Web Design & Development
                </h2>
                <h2 className="poppins-regular w-2/3 leading-snug text-lg lg:text-lg">
                  Design & develop website for SFU Robot Soccer
                </h2>
                <div className="flex flex-wrap lg:w-3/4 mt-4 gap-x-4 lg:gap-y-1 lg:gap-x-6">
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    ReactJS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    TailwindCSS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    Google Firebase
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-4">
                <button className="flex flex-row w-max px-4 py-2 bg-black text-white hover:bg-red-600 transition ease-in-out duration-500 rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-sm ">
                  Case Study <FiArrowUpRight size={14} strokeWidth={3} />
                </button>
              </div>
            </div>
            <div className="relative h-full mt-3 lg:mt-0 lg:w-1/2 rounded-xl overflow-hidden transition-transform duration-300">
              <img
                className="object-contain opacity-90 w-full h-full transition-transform duration-300"
                src={sfurobot}
                alt="Study Spot"
              />
            </div>
            <div className="lg:hidden flex mt-6 flex-col gap-4">
              <button className="flex flex-row w-max px-4 py-2 bg-black text-white hover:bg-red-600 transition ease-in-out duration-500 rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-sm ">
                Case Study <FiArrowUpRight size={14} strokeWidth={3} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-10/12 bg-gradient-to-b from-[rgb(240,240,240)] to-white px-10 py-10 lg:px-16 lg:py-16 flex flex-col lg:flex-row justify-between overflow-hidden lg:rounded-[3vw] rounded-[7vw] h-max lg:h-[60vh] shadow-[inset_0_0_5px_rgba(0,0,0,0.05)]">
            <div className="flex lg:w-1/2 justify-between flex-col gap-6 lg:gap-2">
              <img
                className="lg:w-max hidden lg:flex -mt-4 lg:h-7 w-12 h-12 "
                src={pharmaboticslogo}
              ></img>

              <div className="flex flex-col gap-3 -mt-4">
                <div className="flex flex-row gap-4 mt-2 lg:mt-0">
                  <button className="group flex flex-row hover:text-blue-700 transition duration-500 ease-in-out text-black rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-xs">
                    GitHub
                    <FiArrowUpRight
                      size={14}
                      strokeWidth={3}
                      className="transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
                <h2 className="text-black text-3xl lg:text-3xl poppins-medium">
                  Software & Hardware Development
                </h2>
                <h2 className="poppins-regular w-2/3 leading-snug text-lg lg:text-lg">
                  An automated medicine dispensing system
                </h2>
                <div className="flex flex-wrap lg:w-3/4 mt-4 gap-x-4 lg:gap-y-1 lg:gap-x-6">
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    ReactJS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    TailwindCSS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    NodeJS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    ExpressJS
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    Arduino Uno
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    C++
                  </p>
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    MongoDB
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-4">
                <button className="flex flex-row w-max px-4 py-2 bg-black text-white hover:bg-blue-700 transition ease-in-out duration-500 rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-sm ">
                  Case Study <FiArrowUpRight size={14} strokeWidth={3} />
                </button>
              </div>
            </div>
            <div className="relative h-full mt-3 lg:mt-0 lg:w-1/2 rounded-xl overflow-hidden transition-transform duration-300">
              <img
                className="object-contain opacity-90 w-full h-full transition-transform duration-300"
                src={pharmabotics}
                alt="Study Spot"
              />
            </div>
            <div className="flex lg:hidden mt-6 flex-col gap-4">
              <button className="flex flex-row w-max px-4 py-2 bg-black text-white hover:bg-blue-700 transition ease-in-out duration-500 rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-sm ">
                Case Study <FiArrowUpRight size={14} strokeWidth={3} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-10/12 bg-gradient-to-b from-[rgb(240,240,240)] to-white px-10 py-10 lg:px-16 lg:py-16 flex flex-col lg:flex-row justify-between overflow-hidden lg:rounded-[3vw] rounded-[7vw] h-max lg:h-[60vh] shadow-[inset_0_0_5px_rgba(0,0,0,0.05)]">
            <div className="flex lg:w-1/2 justify-between flex-col gap-6 lg:gap-2">
              <img
                className="lg:w-max hidden lg:flex -mt-4 lg:h-8 w-12 h-12 "
                src={ecogrowLogo}
              ></img>

              <div className="flex flex-col gap-3 -mt-4">
                <div className="flex flex-row gap-4 mt-2 lg:mt-0">
                  <button className="group flex flex-row hover:text-green-600 transition duration-500 ease-in-out text-black rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-xs">
                    GitHub
                    <FiArrowUpRight
                      size={14}
                      strokeWidth={3}
                      className="transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
                <h2 className="text-black text-3xl lg:text-3xl poppins-medium">
                  Game Development
                </h2>
                <h2 className="poppins-regular w-2/3 leading-snug text-lg lg:text-lg">
                  Garden Growing Simulation Game
                </h2>
                <div className="flex flex-wrap lg:w-3/4 mt-4 gap-x-4 lg:gap-y-1 lg:gap-x-6">
                  <p className="poppins-light border-opacity-30 opacity-50 transition duration-300 ease-in-out  text-xs py-1 rounded-full">
                    Java
                  </p>
                </div>
              </div>

              <div className="lg:flex hidden flex-col gap-4">
                <button className="flex flex-row w-max px-4 py-2 bg-black text-white hover:bg-green-600 transition ease-in-out duration-500 rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-sm ">
                  Case Study <FiArrowUpRight size={14} strokeWidth={3} />
                </button>
              </div>
            </div>
            <div className="relative h-full mt-3 lg:mt-0 lg:w-1/2 rounded-xl overflow-hidden transition-transform duration-300">
              <img
                className="object-contain opacity-90 w-full h-full transition-transform duration-300"
                src={gardenSim}
                alt="Study Spot"
              />
            </div>
            <div className="flex lg:hidden mt-6 flex-col gap-4">
              <button className="flex flex-row w-max px-4 py-2 bg-black text-white hover:bg-green-600 transition ease-in-out duration-500 rounded-full gap-0.5 items-center poppins-medium text-xs lg:text-sm ">
                Case Study <FiArrowUpRight size={14} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
