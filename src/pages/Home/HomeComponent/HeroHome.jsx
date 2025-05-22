import React from "react";
import HeroBackground from "../../../assets/images/HeroBackground.png";

const HeroHome = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={HeroBackground}
        alt="HeroBackground"
      />

      {/* Hero Content */}
      <div
        className="absolute top-[35%] right-[5%] sm:right-[7%] md:right-[10%] bg-[#FFF3E3] 
        rounded-[10px] px-4 sm:px-6 md:px-8 lg:px-[39px] pt-6 sm:pt-8 md:pt-10 lg:pt-[62px] 
        pb-6 md:pb-10 lg:pb-[37px] max-w-full sm:max-w-[480px] md:max-w-[550px] lg:max-w-[643px] 
        z-10"
      >
        <div className="font-poppins font-semibold text-sm sm:text-base text-[#333333] tracking-[2px] sm:tracking-[3px] leading-normal mb-1">
          New Arrival
        </div>

        <div className="font-poppins font-bold text-primary text-2xl sm:text-3xl md:text-4xl lg:text-[52px] 
        leading-[36px] sm:leading-[48px] md:leading-[55px] lg:leading-[65px] max-w-full sm:max-w-[400px] mb-3">
          Discover Our New Collection
        </div>

        <div className="font-poppins font-medium text-sm sm:text-base md:text-lg text-[#333333] 
        leading-[20px] sm:leading-[24px] max-w-full sm:max-w-[500px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </div>

        <button
          className="w-full sm:w-auto py-3 px-6 sm:px-10 bg-primary
          text-white font-poppins text-sm sm:text-base font-bold 
          hover:bg-[#FFF3E3] hover:border-primary hover:border-2 
          transition-all duration-300 hover:text-black"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HeroHome;
