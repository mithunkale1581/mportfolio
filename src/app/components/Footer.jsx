import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.mithun_logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          mithunkale1581@gmail.com
        </div>
      </div>
      <div className="text-centers sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="text-sm text-gray-500">
          © 2025 Mithun Kale. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/mithunkale1581/">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/mithunkale/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
