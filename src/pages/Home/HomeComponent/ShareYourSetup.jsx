import React from "react";

const ShareYourSetup = () => {
  return (
    <div className="">
      <div className="title flex flex-col gap-[8px] justify-center items-center text-center">
        <h5 className="text-[#616161] font-poppins font-semibold text-[20px] leading-[150%] tracking-normal">
          Share your setup with
        </h5>
        <h2 className="text-[#3A3A3A] font-poppins font-bold text-[40px] leading-[120%] tracking-normal">
          #FuniroFurniture
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start w-full gap-[32px] mt-8">
        {/* Left Side */}
        <div className="leftSideImages flex flex-col gap-[16px] w-full xl:w-[590px]">
          <div className="flex flex-col sm:flex-row gap-[16px]">
            <img
              src="/src/assets/images/shareYourSetupImages/furniture1.png"
              alt=""
              className="h-[382px] w-full hidden lg:block"
              loading="lazy"
            />
            <img
              src="/src/assets/images/shareYourSetupImages/furniture3.png"
              alt=""
              className="h-[312px] self-end w-full sm:w-auto"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-[16px]">
            <img
              src="/src/assets/images/shareYourSetupImages/furniture2.png"
              alt=""
              className="h-[323px] w-full sm:w-auto"
              loading="lazy"
            />
            <img
              src="/src/assets/images/shareYourSetupImages/furniture4.png"
              alt=""
              className="h-[242px] w-full sm:w-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Middle Image */}
        <div className="middleImage">
          <img
            src="/src/assets/images/shareYourSetupImages/furniture5.png"
            alt=""
            loading="lazy"
            className="hidden md:block"
          />
        </div>

        {/* Right Side */}
        <div className="rightSideImages flex flex-col gap-[16px] w-full xl:w-[590px]">
          <div className="flex flex-col sm:flex-row gap-[16px] self-center xl:self-end">
            <img
              src="/src/assets/images/shareYourSetupImages/furniture7.png"
              alt=""
              className="h-[348px] self-end w-full sm:w-auto"
              loading="lazy"
            />
            <img
              src="/src/assets/images/shareYourSetupImages/furniture9.png"
              alt=""
              className="h-[433px] w-full sm:w-auto"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-[16px] ml-0 sm:ml-[22px]">
            <img
              src="/src/assets/images/shareYourSetupImages/furniture6.png"
              alt=""
              className="h-[242px] w-full sm:w-auto"
              loading="lazy"
            />
            <img
              src="/src/assets/images/shareYourSetupImages/furniture8.png"
              alt=""
              className="h-[196px] w-full sm:w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareYourSetup;
