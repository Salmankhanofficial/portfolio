'use client'
import React, { useState } from "react";
import Image from "./Image";
import {  Link as ScrollLink  } from "react-scroll";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);

  const menuItems = [
    { title: "Home", link: "home" },
    { title: "About", link: "about" },
    { title: "Skills", link: "skills" },
    { title: "Projects", link: "projects" },
    { title: "Contact Us", link: "contact" },
  ];

  const handleLinkClick = (index: any) => {
    setActiveLink(index);
  };
  return (
    <div>
      <div className="bg-[#F8F8F8] py-7 sm:py-16 flex gap-5 sm:gap-10 flex-col items-center">
        <div className="flex">
          <Image src={"/logo.jpg"} alt={"logo"} className="w-8 h-8" />
          <span className="font-bold text-nowrap text-lg md:text-xl   lg:text-2xl">
            {" "}
            -Developer
          </span>
        </div>
        <ul className="flex gap-2 md:gap-4 items-center  font-Poppins text-nowrap">
          {menuItems.map((item, index) => (
            <li key={index}>
              <ScrollLink
              className="cursor-pointer"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleLinkClick(index)}
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full py-4 text-sm sm:text-base  bg-[#545454] text-center text-white text-bold">
        <p>
          © 2024 <span className="text-[#FD6F00] font-bold">S-Developer</span>{" "}
          All Rights Reserved , Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
