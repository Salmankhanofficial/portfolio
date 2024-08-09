

import React, { ReactNode } from "react";
import { FaReact } from "react-icons/fa";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  TitleClassName?: string;
}

const ServicesCard = ({ icon, title, description,TitleClassName}: Props) => {
  return (
    <div className="flex justify-center overflow-hidden items-center relative bg-[#F3F3F3] rounded-xl py-6 cursor-pointer group">
      <div className="h-full w-[750px] overflow-hidden absolute top-0 left-0  bg-[#FF6300] opacity-0 transform scale-0 origin-top-left  transition-all duration-500 group-hover:opacity-100 rounded-br-full group-hover:scale-100"></div>
      <div className="w-11/12  tracking-wider  z-10 group-hover:text-white ">
        <div className="text-5xl text-white bg-[#FF6300] w-20 pl-2 py-5 cursor-pointer pr-6 top-0 left-0 flex items-center rounded-br-full absolute">
          {icon}
        </div>

        <h1 className={`text-2xl font-semibold mt-20   ${TitleClassName}`}>{title}</h1>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
