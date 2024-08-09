'use client'
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillChartProps {
  title: string;
  skills: Skill[];
  colors: string[];
}

const SkillChart: React.FC<SkillChartProps> = ({ title, skills, colors }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    console.log('In view:', inView); 
  }, [inView]);

  return (
    <div className="font-semibold text-sm lg:text-xl font-Poppins">
      <h2 style={{ textAlign: "center", color: "#333" }}>{title}</h2>
      <div
        ref={ref}
        style={{ color: "black" }}
        className="grid sm:grid-cols-2 gap-8 gap-y-5"
      >
        {skills.map((skill, index) => (
          <div key={index} style={{ flex: "1 1 45%", margin: "1px" }} className="w-full">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <span className="pb-2 text-nowrap">{skill.name} </span>
              <span style={{ position: "relative" }}>{skill.percentage}%</span>
            </div>
            <div className="bg-[#EDECEC] rounded-r-xl">
              <div
                style={{
                  width: `${inView ? skill.percentage : 0}%`,
                  backgroundColor: colors[index % colors.length],
                  position: "relative",
                  borderRadius: "10px",
                  transition: "width 2s ease-out",
                }}
                className="h-2 lg:h-2"
              >
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "100%",
                    backgroundColor: colors[index % colors.length] && "#EDECEC",
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    zIndex: 100,
                  }}
                  className="border-[3px] border-[#FF6300]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillChart;
