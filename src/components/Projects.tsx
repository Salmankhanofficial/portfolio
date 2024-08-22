"use client";
import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import Modal from "./Modal";
import Image from "./Image";
import { ImCross } from "react-icons/im";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTitle, setTitle] = useState("");
  const [currentDescription, setDescription] = useState("");
  const [currentlink, setlink] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  const data = [
    {
      icon: "/job745.png",
      title: "Job45",
      link: "https://jobstreasures.com/",
      description:
        "Job45 is a dynamic website currently under development, designed to connect job seekers and employers. It will allow users to post job openings and search for employment opportunities easily. The platform aims to provide a seamless user experience, facilitating efficient job matching and improving the hiring process.",
    },
    {
      icon: "/FluxFantasy.png",
      title: "Flux Fantasy",
      link: "https://www.fluxdestiny.com/fluxfantasy",
      description:
        "Flux Fantasy is an interactive website that invites users into a rich fantasy world where dimensions collide. Explore detailed character profiles, immersive storylines, and captivating visuals as you journey through the realms of Flux, uncovering secrets and engaging with an epic tale of adventure and heroism.",
    },
    {
      icon: "/Tracker.png",
      title: "Tracker",
      description:
        "Tracker is an upcoming employee management platform designed to streamline team collaboration, communication, and productivity. Inspired by tools like Slack, Tracker will offer real-time chat features for seamless connections across teams and departments. In addition to messaging, Tracker will include task organization, allowing managers and employees to assign, track, and prioritize tasks efficiently. The platform will also feature expense management tools, making it easy to track and report expenses within the same system. Once deployed, Tracker will provide an all-in-one solution for project management, team collaboration, and workplace efficiency.",
    },
    {
      icon: "/recipefund.png",
      title: "Recipe Fund",
      link: "https://recipefund.com/",
      description:
        "RecipeFund is an intuitive food ordering website that connects users with a wide variety of delicious recipes and local restaurants. Whether you're looking to try new dishes or order your favorite meals, RecipeFund makes it easy to explore, customize, and enjoy food delivered right to your door.",
    },
    {
      icon: "/corbett.png",
      title: "Corbett Safari",
      link: "https://corbett.cruxdevs.com/",
      description:
        "Corbett Safari is your gateway to thrilling wildlife adventures in Corbett National Park. As a premier safari company, we offer expertly guided tours, immersive wildlife experiences, and personalized safaris to explore the park's diverse flora and fauna. Discover the beauty of nature and the excitement of wildlife encounters with Corbett Safari.",
    },
    {
      icon: "/onlinequran.png",
      title: "Online Quran Academy",
      description:
        "Online Quran Academy is a comprehensive platform dedicated to online Quran learning. As a final year project, it offers interactive lessons, personalized guidance, and flexible schedules to help users of all ages deepen their understanding of the Quran. The academy features experienced instructors, engaging educational tools, and a supportive learning environment to foster spiritual growth and mastery of Quranic teachings.",
    },
  ];

  const handleCardClick = (
    title: any,
    description: any,
    link: any,
    icon: any
  ) => {
    setTitle(title);
    setDescription(description);
    setlink(link);
    setCurrentImage(icon);
    setShowModal(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full sm:w-11/12">
          <h1 className="text-3xl lg:text-4xl font-semibold text-nowrap text-center">
            My Projects
          </h1>
          <p className="text-sm md:text-base text-center my-5">
            Here are the projects I have developed during my more than two-year
            journey as a Full Stack Developer. I concentrated on building
            responsive, user-friendly web applications for both software houses
            and diverse clients. My work as a Full Stack Developer involved
            optimizing performance, ensuring cross-browser compatibility, and
            delivering high-quality web solutions that consistently met or
            exceeded client requirements.
          </p>
        </div>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
          {data?.map((item, index) => (
            <ProjectsCard
              key={index}
              icon={item?.icon}
              link={item?.link}
              title={item?.title}
              description={item?.description}
              onClick={() =>
                handleCardClick(
                  item?.title,
                  item?.description,
                  item?.link,
                  item?.icon
                )
              }
            />
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        containerClass="bg-gray-200 w-11/12 sm:w-[70%] mx-auto rounded-lg overflow-y-scroll h-full px-5 py-5 "
      >
        <div className=" text-xl flex justify-end pb-2">
          <ImCross className="cursor-pointer" onClick={() => setShowModal(false)} />
        </div>
        <div className="text-xl font-bold pt-2 font-Poppins">
          {currentTitle}
        </div>
        <div className="text-base py-4 font-Poppins">{currentDescription}</div>
        {currentlink && (
          <a
            href={currentlink}
            target="_blank"
            className="bg-[#ff6300] w-[188px]  mt-5  sm:mt-2 text-white text-center py-2 px-5 text-base rounded-md font-Poppins text-nowrap"
          >
            Website Link
          </a>
        )}

        <div className="mt-5">
          <Image src={currentImage} alt="Project image" className="w-full" />
        </div>
      </Modal>
    </>
  );
};

export default Projects;
