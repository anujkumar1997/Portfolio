import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  md:min-h-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center text-white md:items-start">
        <div className="py-6 sm:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500 ">
            About
          </h2>
        </div>

        <p className="text-xl sm:text-2xl mt-4">
          I'm Anuj Kumar — a pragmatic and results-driven professional with a strong background in Business Analysis, IT support, and project management. 
          I’ve worked with organizations like PHSA, University Canada West, and NTT DATA, building skills in stakeholder engagement, system configuration, and solving complex problems.
          I hold certifications including CCNA, CAPM, and AZ-104, and I’m currently preparing for the CCBA exam. 
          I recently completed a post-graduate program in Machine Learning and AI from Purdue University, and I enjoy working on real-world projects using tools like Power BI, OpenCV, TensorFlow, and Python.
          I’m also volunteering with the City of Surrey’s Emergency Support Services and constantly learning new ways to use technology for good. 
          My goal is to contribute to meaningful projects and grow as a Machine Learning Engineer.Learning, and Natural Language Processing.
        </p>
      </div>
    </div>
  );
};
