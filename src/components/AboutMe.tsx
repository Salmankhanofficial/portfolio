"use client";

import React from "react";
import Image from "./Image";
import SkillChart from "./ScallChart";

const AboutMe = () => {
  const skillsData = [
    { name: "React JS", percentage: 100 },
    { name: "Next JS", percentage: 100 },
    { name: "Node JS", percentage: 100 },
    { name: "Postgress", percentage: 100 },
    { name: "MongoDB", percentage: 100 },
    { name: " Sequelize", percentage: 100 },
    { name: "TypeScript", percentage: 100 },
    { name: "GraphQL", percentage: 100},
    { name: "RestAPI", percentage: 100 },
    { name: "Tailwind", percentage: 100 },
    { name: "Bootstrap", percentage: 100 },
    { name: "Git & GitHub", percentage: 100 },
    { name: "Deployment", percentage: 100 },

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
          As a Full Stack Engineer with over two years of hands-on experience in
          developing scalable web applications, I am proficient in a diverse
          tech stack, including Node.js, React.js, Next.js, TypeScript, GraphQL,
          PostgreSQL, MongoDB, Sequelize, Git, GitHub, and more. I excel in both
          front-end and back-end development, leveraging strong problem-solving
          skills and a collaborative approach within cross-functional teams. I
          am passionate about staying current with emerging technologies to
          enhance project efficiency and am committed to continuous learning. I
          am eager to contribute to innovative solutions in the ever-evolving
          field of web development.
        </p>
        <SkillChart title="Skills" skills={skillsData} colors={colors} />
      </div>
    </div>
  );
};

export default AboutMe;
