import { Link } from 'react-router-dom';
import bgImage from '../assets/hero-bg.jpeg';

const HomeHeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-xs brightness-75"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-0" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col text-center max-w-3xl space-y-6 px-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          Secure Your Future<br /> with Smart Investments
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Build wealth on a stable, trusted platform. Explore profitable investment opportunities designed for long-term success.
        </p>
        <p className="text-lg text-gray-400">
          Invest today and experience the future of finance.
        </p>
        <Link
          to="/login"
          className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white py-3 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomeHeroSection;
