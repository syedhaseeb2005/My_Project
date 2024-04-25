import React from "react";
import logo from "../assets/logo.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";


const HeroSection3 = () => {
  return (
    <div className="relative max-w-7xl px-24 mx-auto mt-16 overflow-hidden">
       <div className="relative w-full">
        <img className="absolute top-52 blur-sm -right-52 transform -translate-y-1/2 w-96 opacity-35 rotate-90" src={img1} alt="" />
        <img className="absolute top-72 blur-sm -right-52 transform -translate-y-1/2 w-96 opacity-35 rotate-45" src={img2} alt="" />
      </div>
      <h1 className="text-5xl font-bold">
        Made for intended for <br />
        widespread use.
      </h1>
      <div className="">
        <div className="pt-6 flex items-center gap-5 rounded-md">
          <div className="p-7 bg-neutral-900">
            <h1 className="text-3xl mb-4 font-mono">Fast</h1>
            <p className="text-base text-blue-900 font-medium">
              Lorem ipsum dolor sit amet consectetur. <br /> Mauris turpis
              nullam lacinia viverra. <br /> Tortor vitae tellus enim ut. Vitae
              sodales <br /> quis natoque urna enim eget convallis <br />{" "}
              sagittis. In cras enim mus proin potenti a <br /> cras et. Sed
              justo purus sollicitudin <br /> convallis sed semper.
            </p>
            <div className="pt-5">
              <h1 className="text-4xl mb-2 bg-gradient-to-r from-purple-500 to-green-400 text-transparent bg-clip-text font-bold">7,312</h1>
              <h3>ACTIVITIES PER SECOND</h3>
            </div>
          </div>
          <div className="p-7 bg-neutral-900">
            <h1 className="text-3xl mb-4 font-mono">Decentralized</h1>
            <p className="text-base text-blue-900 font-medium">
              Lorem ipsum dolor sit amet consectetur. <br /> Mauris turpis
              nullam lacinia viverra. <br /> Tortor vitae tellus enim ut. Vitae
              sodales <br /> quis natoque urna enim eget convallis <br />{" "}
              sagittis. In cras enim mus proin potenti a <br /> cras et. Sed
              justo purus sollicitudin <br /> convallis sed semper.
            </p>
            <div className="pt-5">
              <h1 className="text-4xl mb-2 bg-gradient-to-r from-purple-500 to-green-400 text-transparent bg-clip-text">1,523</h1>
              <h3>NODES VALIDATORS</h3>
            </div>
          </div>
        </div>
        {/* Second line box */}
        <div className="pt-6 flex flex-wrap justify-end gap-5 rounded-md">
          <div className="p-7 bg-neutral-900 rounded-lg">
            <h1 className="text-3xl mb-4 font-mono">Energy Efficient</h1>
            <p className="text-base text-blue-900 font-medium">
              Lorem ipsum dolor sit amet consectetur. <br /> Mauris turpis
              nullam lacinia viverra. <br /> Tortor vitae tellus enim ut. Vitae
              sodales <br /> quis natoque urna enim eget convallis <br />{" "}
              sagittis. In cras enim mus proin potenti a <br /> cras et. Sed
              justo purus sollicitudin <br /> convallis sed semper.
            </p>
            <div className="pt-5">
              <h1 className="text-4xl mb-2 bg-gradient-to-r from-purple-500 to-green-400 text-transparent bg-clip-text">1%</h1>
              <h3>CARBON IMPACT</h3>
            </div>
          </div>
          <div className="p-7 bg-neutral-900 rounded-lg">
            <h1 className="text-3xl mb-4 font-mono">Scalable</h1>
            <p className="text-base text-blue-900 font-medium">
              Lorem ipsum dolor sit amet consectetur. <br /> Mauris turpis
              nullam lacinia viverra. <br /> Tortor vitae tellus enim ut. Vitae
              sodales <br /> quis natoque urna enim eget convallis <br />{" "}
              sagittis. In cras enim mus proin potenti a <br /> cras et. Sed
              justo purus sollicitudin <br /> convallis sed semper.
            </p>
            <div className="pt-5">
              <h1 className="text-4xl mb-2 bg-gradient-to-r from-purple-500 to-green-400 text-transparent bg-clip-text">8,202,415</h1>
              <h3>TRANSACTION IN FULL</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end pt-52 flex-col">
        <h1 className="text-5xl text-right mb-10">
          It’s time to become one of the <br /> hundreds of trader, developers,
          and <br />
          creators who use Venus
        </h1>
        <button className="border py-3 px-24 rounded-md bg-gradient-to-tr from-purple-500 to-green-400 text-black font-bold">
          Buy $VENUS
        </button>
      </div>
      <nav className="pt-8 mt-16 pb-3">
        <div className="container mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img
                className="h-6 w-full mr-2 lg:h-11 md:h-10"
                src={logo}
                alt=""
              />
            </div>
            <ul className="hidden lg:flex space-x-12">
              <li>
                <a href="">TELEGRAM</a>
              </li>
              <li>
                <a className="text-neutral-400" href="">
                  TWITTER
                </a>
              </li>
              <li>
                <a className="text-neutral-400" href="">
                  DISCORD
                </a>
              </li>
              <li>
                <a className="text-neutral-400" href="">
                  CHART
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeroSection3;
