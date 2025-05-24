import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-16" />
      </motion.div>
      <motion.h3 className="flex items-end gap-2 test-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Mithun Kale{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Front-End Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Front-End Developer passionate about crafting beautiful, responsive, and user-friendly web applications. Proficient in HTML5 CSS3 JavaScript TypeScript React.Js Redux jQuery Bootstrap Tailwind CSS and Next.js, with a strong focus on performance, accessibility, and modern development practices. Continuously learning and adapting to new technologies to build innovative solutions. Seeking a collaborative role where I can contribute my skills, tackle challenging problems, and grow as a developer.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/Mithun_Kale_Resume_6Years.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
