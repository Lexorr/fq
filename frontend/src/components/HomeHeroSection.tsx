import { Link } from 'react-router-dom';
import bitcoin from '../assets/bitcoin.png';
import bgImage from '../assets/hero-bg.jpg'; // Ensure your image is in the assets folder

const HomeHeroSection = () => {
  return (
    <div className="relative  h-screen flex items-center justify-center overflow-hidden  shadow-lg">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full md:px-20 px-6 text-white">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold leading-tight">
            Secure Your Future<br /> with Smart Investments
          </h1>
          <p className="text-base text-gray-300">
            Build wealth on a stable, trusted platform. Explore profitable investment opportunities designed for long-term success.
          </p>
          <p className="text-base text-gray-300">
            Invest today and experience the future of finance.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-6">
            <Link
              to="/login"
              className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-8 rounded-full transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={bitcoin}
            alt="Bitcoin illustration"
            className="w-[30rem] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
