import React from "react";

const HeroSection2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 mt-20">
      <div className="relative bg-[url('./assets/6.png')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 py-20   text-white ">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold mb-8">
            Join The Community <br /> Of Millions
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="backdrop-blur-lg bg-black bg-opacity-40 p-8 rounded-lg">
              <h2 className="bg-gradient-to-l from-purple-500 to-green-500 text-transparent bg-clip-text font-bold tracking-wide text-2xl mb-4">
                Authentic Accounts
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl text-white">1.4M+</h1>
            </div>
            <div className="backdrop-blur-lg bg-black bg-opacity-40 p-8 rounded-lg">
              <h2 className="bg-gradient-to-l from-purple-500 to-green-500 text-transparent bg-clip-text font-bold tracking-wide text-2xl mb-4">
              minted nfts
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl text-white">12.7M+</h1>
            </div>
            <div className="backdrop-blur-lg bg-black bg-opacity-40 p-8 rounded-lg">
              <h2 className="bg-gradient-to-l from-purple-500 to-green-500 text-transparent bg-clip-text font-bold tracking-wide text-2xl mb-4">
              Transaction cost
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl text-white">$0.0056</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
