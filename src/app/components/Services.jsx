import React from "react";
import { assets, serviceData } from "../../../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="services">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I offer a range of services to help you achieve your goals. Whether
        you're looking for web development, mobile app development, or digital
        marketing, I have the skills and experience to help you succeed. My
        services are tailored to meet your specific needs and I work closely
        with you to ensure that you get the results you're looking for. From
        concept to completion, I'm here to help you every step of the way.
      </p>
      <div className="grid w-full [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm mt-5">
              Read More{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
