import React from "react";
import Image from "./Image";
import Button from "./Button";

const IntroductionCard = () => {
  return (
    <div className="sm:flex justify-between   mt-10 sm:my-32 font-Poppins ">
      <div className="w-full sm:w-3/5  flex-col flex lg:gap-2">
        <h1 className="font-semibold text-2xl">Hi I am</h1>
        <h2 className="font-semibold text-[rgb(255,99,0)] text-3xl font-Poppins">
          Salman Khan
        </h2>
        <p className="font-bold text-3xl lg:text-4xl">Front-End</p>
        <p className="font-bold text-3xl lg:text-4xl pl-20 sm:pl-32">
          Developer
        </p>
        <p className="mt-2 lg:mt-0">
          With over 1.5 years of experience, I specialize in building responsive
          and user-friendly web applications. I am passionate about delivering
          high-quality, seamless user experiences and have a strong command of
          modern frontend technologies. My projects demonstrate a blend of
          creativity and technical expertise, reflecting my commitment to
          excellence in web development.
        </p>
        <a
          href="mailto:salmanpak09@gmail.com"
          className="bg-[#ff6300] hover:bg-white border hover:border-[#ff6300] hover:text-black w-[188px]  mt-5  sm:mt-2 text-white text-center py-2 px-5 text-base rounded-md font-Poppins text-nowrap"
        >
          Hire Me
        </a>
      </div>
      <div className="flex justify-center sm:flex-none mt-10 sm:mt-0   ">
        <Image
          src={"/Group2.webp"}
          alt={"salman"}
          className="lg:w-72 w-64 h-64 p-1 sm:w-60 sm:h-72 sm:absolute hover:bg-gray-400 sm:hover:bg-white border-[5px] sm:border-none  border-[#0c0501] rounded-full right-5 lg:right-32  sm:rounded-3xl top-[220px]"
        />
      </div>
    </div>
  );
};

export default IntroductionCard;
