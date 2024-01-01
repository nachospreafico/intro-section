import { useEffect, useState } from "react";
import MobileHero from "./../assets/images/image-hero-mobile.png";
import DesktopHero from "./../assets/images/image-hero-desktop.png";
import Clients from "./Clients";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Event listener to track window size changes
    window.addEventListener("resize", handleWindowSizeChange);

    // Initial check for screen width
    setIsMobile(window.innerWidth < 768);

    // Clean up the event listener to avoid memory leaks
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <main>
      {/* Mobile Hero */}
      {isMobile && (
        <div className="max-w-[480px]  m-auto">
          <img
            src={MobileHero}
            className="object-cover "
            alt="hero section image"
          ></img>
          <div className="flex flex-col p-6 gap-4">
            <h1 className="text-4xl text-center font-bold">Make remote work</h1>
            <p className="text-center">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-black rounded-lg px-4 py-2 mb-10 mt-2 text-white font-medium w-fit m-auto">
              Learn more
            </button>
            <Clients />
          </div>
        </div>
      )}

      {/* Bigger device Hero */}
      {!isMobile && (
        <div
          style={{ gridTemplateColumns: ".55fr .45fr" }}
          className="grid md:px-20 lg:px-32 xl:px-[165px]"
        >
          <div className="flex flex-col md:gap-2 mb-10 justify-between md:pr-16 md:pt-16 pr-20 pt-20">
            <h1 className="md:text-5xl  xl:text-7xl text-left font-bold">
              Make remote work
            </h1>
            <p className="text-left text-lg text-gray-500">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-black rounded-lg px-5 py-2 border-2 border-transparent  text-white font-medium w-fit md:mb-10 lg:hover:bg-white lg:hover:text-black duration-200 lg:hover:border-black">
              Learn more
            </button>
            <Clients />
          </div>
          <img
            src={DesktopHero}
            alt="hero section image"
            className="object-cover h-full"
          ></img>
        </div>
      )}
    </main>
  );
};

export default Hero;
