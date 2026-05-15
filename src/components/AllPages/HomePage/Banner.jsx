import { Separator } from '@heroui/react';

const Banner = () => {
  return (
    <div className=" backgroundImage bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col justify-between">
      {/* Content Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-10 py-16">
        <div className="text-center flex flex-col items-center gap-5 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover Your <br /> Next Adventure
          </h1>

          <p className="text-sm sm:text-base md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-gray-200">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-3 w-full sm:w-auto">
            <button className="uppercase bg-cyan-500 hover:bg-cyan-600 duration-300 px-6 py-3 rounded-md cursor-pointer text-sm sm:text-base font-medium w-full sm:w-auto">
              Explore Now
            </button>

            <button className="uppercase px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 duration-300 rounded-md cursor-pointer text-sm sm:text-base font-medium w-full sm:w-auto">
              View Destination
            </button>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full px-4 sm:px-6 md:px-10 pb-6 md:pb-10">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-5 flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Item */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="text-xs text-gray-200">Address, City or Zip</p>
          </div>

          <Separator
            className="hidden lg:flex h-10"
            variant="tertiary"
            orientation="vertical"
          />

          {/* Item */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h3 className="text-sm font-semibold">Date/Duration</h3>
            <p className="text-xs text-gray-200">Anytime / 3 Days</p>
          </div>

          <Separator
            className="hidden lg:flex h-10"
            variant="tertiary"
            orientation="vertical"
          />

          {/* Item */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h3 className="text-sm font-semibold">Budget</h3>
            <p className="text-xs text-gray-200">$0 - $3000</p>
          </div>

          <Separator
            className="hidden lg:flex h-10"
            variant="tertiary"
            orientation="vertical"
          />

          {/* Item */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h3 className="text-sm font-semibold">People</h3>
            <p className="text-xs text-gray-200">5 - 10</p>
          </div>

          {/* Button */}
          <button className="bg-cyan-500 hover:bg-cyan-600 duration-300 px-6 py-3 rounded-lg text-sm md:text-base font-medium w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
