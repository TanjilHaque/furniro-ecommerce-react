import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbUserExclamation } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full shadow-sm px-6 md:px-[54px] py-[20px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="w-24 md:w-28" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/home" className="font-poppins text-[16px] hover:text-primary transition-colors duration-300">Home</Link>
          <Link to="/shop" className="font-poppins text-[16px] hover:text-primary transition-colors duration-300">Shop</Link>
          <Link to="/about" className="font-poppins text-[16px] hover:text-primary transition-colors duration-300">About</Link>
          <Link to="/contact" className="font-poppins text-[16px] hover:text-primary transition-colors duration-300">Contact</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-[35px] text-xl">
          <TbUserExclamation className="cursor-pointer hover:text-primary transition-colors duration-300" />
          <IoIosSearch className="cursor-pointer hover:text-primary transition-colors duration-300" />
          <IoHeartOutline className="cursor-pointer hover:text-primary transition-colors duration-300" />
          <AiOutlineShoppingCart className="cursor-pointer hover:text-primary transition-colors duration-300" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu - Slide Down */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col mt-4 space-y-4 text-base font-medium">
          <Link to="/home" className="hover:text-primary transition-colors duration-300">Home</Link>
          <Link to="/shop" className="hover:text-primary transition-colors duration-300">Shop</Link>
          <Link to="/about" className="hover:text-primary transition-colors duration-300">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link>
        </div>
        <div className="flex justify-around text-2xl pt-4 pb-2 border-t border-gray-200 mt-4">
          <TbUserExclamation className="cursor-pointer hover:text-primary transition-colors duration-300" />
          <IoIosSearch className="cursor-pointer hover:text-primary transition-colors duration-300" />
          <IoHeartOutline className="cursor-pointer hover:text-primary transition-colors duration-300" />
          <AiOutlineShoppingCart className="cursor-pointer hover:text-primary transition-colors duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
