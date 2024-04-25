import React from "react";
import img5 from "../assets/img5.png";

const HeroSection = () => {
  return (
    <>
        <div className="max-w-7xl mx-auto pt-10 px-16 z-50">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 lg:w-1/7">
              <h1 className="text-9xl font-bold tracking-widest">World's</h1>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/7 invisible">
              <h1>World's</h1>
            </div>
            <div className="w-full ml-5 md:w-1/3 lg:w-1/7">
              <p className="text-base w-full">
                Lorem ipsum dolor sit amet consectetur. Lorem elit eget proin
                est imperdiet tempus sollicitudin velit. Justo tellus dui lorem
                mauris. Consectetur metus quam mattis amet lacus. Risus id
                quisque.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/7">
              <h1 className="text-9xl font-bold tracking-widest">Leading</h1>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/7">
              <h1 className="text-9xl font-bold tracking-widest">Blockchain</h1>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/7 invisible">
              <h1>WORLDS</h1>
            </div>
            <div className="w-full flex  md:w-1/2 lg:w-1/7">
              <h1 className="text-9xl font-bold tracking-widest">Network</h1>
            </div>
          </div>
        </div>
      <div className="mt-20 mx-auto flex justify-center items-center gap-4">
        <button className="border py-3 px-14 rounded-md bg-gradient-to-tr from-purple-500 to-green-400 text-black font-bold">
          Buy $VENUS
        </button>
        <button className="border py-3 px-14 bg-gradient-to-r from-purple-500 to-green-400 text-transparent bg-clip-text font-bold tracking-wide rounded-md">
          View DEXSCREEN
        </button>
      </div>
      <div className="pt-20">
        <img src={img5} className="max-w-full h-auto" alt="img" />
      </div>
    </>
  );
};

export default HeroSection;
