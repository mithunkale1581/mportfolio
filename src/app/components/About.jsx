import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "../../../assets/assets";

const About = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="about">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced Front-End Developer with 6+ years in IT and 4+ years specializing in UI development, currently working at Tata Consultancy Services (TCS). I excel at building high-performance, scalable web applications using React.js, Redux, and modern front-end technologies, with a proven track record of enhancing user engagement by 40%, reducing bounce rates by 97%, and maintaining a 98% client satisfaction rate. My expertise spans responsive design, state management optimization, and performance tuning—leveraging JavaScript, TypeScript, HTML5, CSS3, and tools like Jest, Cypress, and Tailwind CSS to deliver seamless user experiences. A collaborative Agile team player, I thrive in dynamic environments where innovation and problem-solving drive success. I’m passionate about continuous learning and contributing to impactful, user-centric solutions.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 
    sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
