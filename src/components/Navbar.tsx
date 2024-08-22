"use client";
import React, { useState } from "react";
import Image from "./Image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [Menu, setMenu] = useState(false);

  const menuItems = [
    { title: "Home", link: "home" },
    { title: "About", link: "about" },
    { title: "Services", link: "services" },
    { title: "Skills", link: "about" },
    { title: "Projects", link: "projects" },
    { title: "Contact Us", link: "contact" },
  ];

  const handleLinkClick = (index: any) => {
    setActiveLink(index);
  };

  const linkClass = (index: any) => {
    if (index === activeLink) {
      return " text-black cursor-pointer ";
    }
    return "custom hover:text-red-500 cursor-pointer";
  };

  return (
    <div className="flex justify-between items-center gap-12 mt-4 lg:mt-14 font-Poppins relative">
      <div className="sm:hidden text-4xl">
        <GiHamburgerMenu onClick={() => setMenu(true)} />
      </div>
      <div className="hidden sm:block">
        <div className="flex">
          <Image src={"/Logo.jpg"} alt={"logo"} className="w-8 h-8" />
          <span className="font-bold text-nowrap text-lg md:text-xl lg:text-2xl">
            {" "}
            -Developer
          </span>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex items-center gap-4 text-sm lg:text-base ">
          <ul className="flex gap-2 md:gap-4 items-center font-Poppins text-nowrap">
            {menuItems.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={linkClass(index)}
                  onClick={() => handleLinkClick(index)}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <a
            href="/salman_resume.pdf"
            download="CV.pdf"
            className="bg-[#ff6300] hover:bg-white border hover:border-[#ff6300] hover:text-black text-white py-2 px-3 md:px-5 text-sm md:text-base rounded-md font-Poppins text-nowrap"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Menu */}

      {Menu && (
        <div
          className={`absolute top-0 left-0 right-0 bg-white p-5 shadow-lg z-50 sm:hidden  rounded-lg`}
        >
          <div className="sm:hidden text-2xl flex justify-end">
            <ImCross onClick={() => setMenu(false)} />
          </div>
          <ul className="flex flex-col gap-4 items-center font-Poppins text-xl">
            {menuItems.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={linkClass(index)}
                  onClick={() => {
                    handleLinkClick(index);
                    setMenu(false); // Close the menu after clicking
                  }}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <a
            href="/salman_resume.pdf"
            download="CV.pdf"
            className="bg-[#ff6300] hover:bg-white border hover:border-[#ff6300] hover:text-black text-white py-2 px-3 md:px-5 text-sm md:text-base rounded-md font-Poppins text-nowrap mt-4 block text-center"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
