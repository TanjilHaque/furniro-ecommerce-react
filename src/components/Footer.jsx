import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="pt-[48px] pb-[38px] px-6 md:px-[100px] border-t border-[#000000D4]">
        <div className="footerMain lg:flex-wrap flex flex-col md:flex-row pb-[48px] gap-10">
          <div className="footerAdress md:mr-[136px]">
            <div className="footerAdress_heading font-poppins font-bold text-2xl mb-[30px] md:mb-[50px]">
              Funiro.
            </div>
            <div className="footerAdress_adress font-poppins text-[#9F9F9F] text-[16px]">
              400 University Drive Suite 200 Coral <br /> Gables,
              <br /> FL 33134 USA
            </div>
          </div>

          <div className="footerLinks md:mr-[144px]">
            <div className="font-poppins text-[16px] font-medium text-[#9F9F9F] mb-[30px] md:mb-[55px]">
              Links
            </div>
            <div className="footerLinks_menuItems flex flex-col gap-[20px] md:gap-[46px]">
              <Link to="/home" className="font-poppins font-medium text-[16px] hover:text-primary transition-colors duration-300">
                Home
              </Link>
              <Link to="/shop" className="font-poppins font-medium text-[16px] hover:text-primary transition-colors duration-300">
                Shop
              </Link>
              <Link to="/about" className="font-poppins font-medium text-[16px] hover:text-primary transition-colors duration-300">
                About
              </Link>
              <Link to="/contact" className="font-poppins font-medium text-[16px] hover:text-primary transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          <div className="footerHelp md:mr-[72px]">
            <div className="font-poppins text-[16px] font-medium text-[#9F9F9F] mb-[30px] md:mb-[55px]">
              Help
            </div>
            <div className="flex flex-col gap-[20px] md:gap-[46px]">
              <Link to="/payment" className="font-poppins font-medium text-[16px] hover:text-primary transition-colors duration-300">
                Payment Options
              </Link>
              <Link to="/returns" className="font-poppins font-medium text-[16px] hover:text-primary transition-colors duration-300">
                Returns
              </Link>
              <Link to="/privacyPolicies" className="font-poppins font-medium text-[16px] hover:text-primary transition-colors duration-300">
                Privacy Policies
              </Link>
            </div>
          </div>

          <div className="footerNewsletter">
            <div className="font-poppins text-[16px] font-medium text-[#9F9F9F] mb-[30px] md:mb-[55px]">
              Newsletter
            </div>
            <div className="footerNewsletter_items flex flex-col sm:flex-row gap-[12px]">
              <input
                type="text"
                className="border-b border-black w-full sm:w-[200px] placeholder-[#969F9F] placeholder:text-sm focus:outline-none"
                placeholder="Enter Your Email Address"
              />
              <button
                className="footerNewsletter_items_btn font-poppins lg:border-b lg:border-black font-medium text-[14px] text-sm hover:text-primary transition-colors duration-500 cursor-pointer lg:hover:border-primary"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="footerCopyRight font-poppins pt-[35px] border-t border-[#D9D9D9] w-full text-sm">
          2023 furino. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;