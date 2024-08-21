'use client'
import React from "react";
import Image from "./Image";

interface Props {
  icon: string;
  title: string;
  description: string;
  onClick: () => void; 
  link?: string;
}

const truncateDescription = (description: string, wordLimit: number) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};

const ProjectsCard = ({ icon, title, description, onClick,link }: Props) => {
  return (
    <div
      className="flex justify-center overflow-hidden items-center relative bg-[#F3F3F3] sm:bg-white rounded-xl cursor-pointer group border-2"
      onClick={onClick} 
    >
      <div className="w-full flex justify-center items-center h-full overflow-hidden top-0 opacity-0 bg-gray-700 absolute z-50 group-hover:opacity-70">
        <h1 className="text-2xl text-white opacity-95 font-bold">Preview</h1>
      </div>
      <div className="w-11/12 p-2 rounded-xl transform transition-transform duration-300 group-hover:scale-110 h-full">
        <Image src={icon} alt={"image"} className="w-full h-96 object-cover" />
        <h1 className="text-lg text-[#FF6300] font-medium mt-5 overflow-hidden">{title}</h1>
        <p className="text-sm">{truncateDescription(description, 15)}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;

