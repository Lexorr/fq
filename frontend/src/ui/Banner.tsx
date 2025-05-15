import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  
}

const Banner: React.FC<BannerProps> = ({ title, subtitle,  }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-5 py-5 flex flex-col md:flex-row  justify-between mt-15 md:mt-18">
      {/* Text Section */}
      <div className="md:text-left">
        <h1 className="md:text-[30px] text-[10px]  font-bold">{title}</h1>
        {subtitle && (
          <p className="text-gray-300  text-[8px] md:text-30px]">{subtitle}</p>
        )}
      </div>

      {/* Image Section */}
      <>
      
      </>
    </div>
  );
};

export default Banner;
