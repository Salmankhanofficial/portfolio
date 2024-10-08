import React from "react";
import ServicesCard from "./ServicesCard";
import { FaCloudUploadAlt, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { MdImportantDevices } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { TbApi } from "react-icons/tb";

const Services = () => {
  const data = [
    {
      icon: <FaReact />,
      title: "Frontend",
      ClassName: "!mt-14",
      description:
        "A set of technologies focused on creating the visual and interactive aspects of a website or application, including responsive layouts, dynamic content rendering, and seamless user experiences across different devices and browsers.",
    },
    {
      icon: <RiNextjsFill />,
      title: "Backend",
      ClassName: "!mt-[70px]",
      description:
        "A collection of technologies and tools used to handle server-side logic, database management, API development, and the processing of business logic, ensuring secure, scalable, and efficient operation of applications.",
    },
    {
      icon: <MdImportantDevices />,
      title: "Responsive Design",
      ClassName: "!mt-20 sm:!mt-0",
      description:
        "Responsive Web Appliction using SASS ,CSS3 , Bootstrip5 ,MaterialUI etc.",
    },
    {
      icon: <GrGraphQl />,
      title: "GraphQl",
      description:
        "A query language and runtime for APIs that allows clients to request exactly the data they need and nothing more, providing a more efficient and flexible alternative to traditional REST APIs.",
    },
    {
      icon: <TbApi />,
      title: "RestAPI's",
      description:
        "A set of conventions for building and interacting with web services, using standard HTTP methods to perform operations on resources identified by URLs.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Deployment",
      description:
        "Skilled in deploying applications using cloud platforms and virtual private servers (VPS), ensuring reliable, scalable, and secure hosting environments for web solutions.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="w-full sm:w-3/5">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center my-2">
          Services
        </h1>
      </div>
      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data?.map((item, index) => (
          <ServicesCard
            key={index}
            icon={item?.icon}
            title={item?.title}
            description={item?.description}
            TitleClassName={item?.ClassName}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
