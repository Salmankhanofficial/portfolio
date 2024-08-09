'use client'

import React from "react";
import Image from "./Image";
import SkillChart from "./ScallChart";

const AboutMe = () => {
  const skillsData = [
    { name: "React JS", percentage: 90 },
    { name: "Next JS", percentage: 75 },
    { name: "TypeScript", percentage: 90 },
    { name: "GraphQL", percentage: 80 },
    { name: "RestAPI", percentage: 85 },
    { name: "Tailwind", percentage: 95 },
    { name: "Bootstrap", percentage: 85 },
    { name: "Git & GitHub", percentage: 95 },
    { name: "Deployment", percentage: 80 },
    { name: "Backend Knowledge", percentage: 30 },
  ];
  const colors = ["#FF6300", "#FF6300", "#FF6300", "#FF6300", "#FF6300"];

  return (
    <div className="flex justify-between gap-5 ">
      <div className="w-3/5 hidden sm:block">
        <Image
          src={"/Group2.webp"}
          alt={"salman"}
          className="w-60 lg:w-72 h-[300px] lg:h-[300px] absolute lg:left-24 lg:right-20 rounded-3xl top-[700px] lg:top-[710px]"
        />
      </div>
      <div className="w-full flex flex-col gap-3 md:gap-5">
        <h1 className="text-5xl sm:text-3xl lg:text-4xl font-semibold text-center">
          About Me
        </h1>
        <p className="text-sm md:text-base">
          I am a passionate Frontend Web Developer specializing in creating
          responsive and user-friendly web applications. At Alimcosoft Pvt. Ltd.
          in Islamabad, I leverage my expertise in Next.js, React.js, and
          TypeScript to build modern, efficient, and scalable web solutions. I
          have successfully delivered real-time projects that showcase my
          ability to implement complex functionalities and seamless user
          experiences. My professional work, I take on various freelancing
          projects, collaborating with clients to bring their ideas to life.
        </p>
        <SkillChart title="Skills" skills={skillsData} colors={colors} />
      </div>
    </div>
  );
};

export default AboutMe;

