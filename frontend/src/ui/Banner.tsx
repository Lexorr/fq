import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  
}

const Banner: React.FC<BannerProps> = ({ title, subtitle,  }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-10 flex flex-col md:flex-row items-center justify-between mt-15 md:mt-18">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-5xl sm:text-8xl md:text-5xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-gray-300 mt-2 text-lg">{subtitle}</p>
        )}
      </div>

      {/* Image Section */}
      <>
      
      </>
    </div>
  );
};

export default Banner;
