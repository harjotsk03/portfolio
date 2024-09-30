import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import AnimatedHeading from "./components/AnimatedHeading"; // Assuming this component exists
import AOS from "aos";
import { Nav } from "./components/Nav";
import "aos/dist/aos.css";
import Home from "./pages/Home"; // Assuming you have a Home page
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Projects from "./pages/Projects";
import logo from "./images/logoWebsite.svg";
import Switch from "./components/Switch";

const App = () => {
  AOS.init();

  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const fadeOutDuration = 1000;
      setTimeout(() => {
        setLoading(false);
      }, fadeOutDuration);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <div
          className={`h-screen bg-black-mine flex items-center justify-center ${
            fadeOut ? "fadeUp" : ""
          }`}
        >
          <AnimatedHeading />
        </div>
      ) : (
        <>
          <main className={`main ${fadeOut ? "fadeIn" : ""}`}>
            <Nav />
            {/* <h2 className="select-none z-0 fixed lg:-top-1/4 lg:left-0 -top-0 -left-1/2 text-[80vw] lg:text-[35vw] text-transparent bg-clip-text bg-gradient-to-b lg:from-gray-300 from-gray-300 to-white opacity-20 poppins-semibold text-center">
              harjot
            </h2>
            <h2 className="select-none z-0 fixed lg:top-60 lg:left-0 top-1/3 -left-1/2 text-[80vw] lg:text-[35vw] text-transparent bg-clip-text  bg-gradient-to-b lg:from-gray-300 from-gray-300 to-white opacity-20 poppins-semibold text-center">
              singh
            </h2> */}
            <section>
              <Home />
            </section>
            <section>
              <Projects />
            </section>
          </main>
        </>
      )}
    </Router>
  );
};

export default App;
