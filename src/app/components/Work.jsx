import React from 'react'
import { assets, workData } from '../../../assets/assets';
import Image from 'next/image';

const Work = () => {
    return (
      <div className="w-full px-[12%] py-10 scroll-mt-20" id="work">
        <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
        <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          I have worked on a variety of projects, ranging from web development
          to mobile app development. My portfolio showcases my skills and
          experience in creating high-quality, user-friendly applications. I am
          always looking for new challenges and opportunities to expand my skill
          set. If you're interested in working with me, please don't hesitate to
          reach out!
        </p>
        <div className="grid w-full [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-5 my-10">
          {workData.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:shadow-[4px_4px_0_#000]"
            >
              <div className="bg-white w-10/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    className="w-5"
                    alt="send icon"
                    src={assets.send_icon}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href=""
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover hover:shadow-[4px_4px_0_#000] duration-500"
        >
          Show More{" "}
          <Image
            alt="Right arrow"
            src={assets.right_arrow_bold}
            className="w-4"
          />
        </a>
      </div>
    );
}

export default Work;