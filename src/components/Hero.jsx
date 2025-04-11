import React from "react";
import HeroImage from "../assets/AnujT.png";
import Resume from "../assets/resume.pdf";

export const Hero = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full pt-20 md:pt-40 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#1C7BB3_1px)] bg-[size:20px_20px]" // Adjusted padding-top
    >
      <div className="max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full text-white justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0">
          <h2 className="text-4xl sm:text-7xl font-bold">
            MACHINE LEARNING ENGINEER
          </h2>
          <p className="text-white max-w-md py-4 mx-auto md:mx-0 font-bold">
            Anuj Kumar | I love turning ideas into smart solutions using AI, machine learning, and data. With a mix of hands-on experience in IT support, business analysis, Power BI, and security, I enjoy solving real problems with tools like Python, OpenCV, and TensorFlow. 
            Right now, I’m diving into computer vision, NLP, and building cool AI models. Always learning something new—and sharing it along the way.
          </p>
          <div className="w-fit px-6 py-3 mt-5 rounded-md bg-gradient-to-r from-rose-500 to-black-50 cursor-pointer">
            <a href={Resume} download={true} className="text-white font-bold">
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0">
          <img
            src={HeroImage}
            className="rounded-2xl mx-auto w-96 md:w-full"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};
