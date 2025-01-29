import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/data/skill";
import React from "react";
import SkillDataProvider from "./skillDataProvider";
import SkillText from "./skillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 bg-gradient-to-r from-purple-600 to-blue-500"
      style={{ transform: "scale(1)" }}
    >
      <SkillText />
      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {/* Frontend skills */}
        {Frontend_skill.map((image, index) => (
          <div
            className="card iso-pro relative group transition-all duration-500 ease-out transform hover:scale-110"
            key={index}
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <span className="tooltip absolute opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out bg-gradient-to-r from-green-400 to-blue-600 text-white text-sm font-semibold rounded-lg shadow-lg py-2 px-4 left-1/2 transform -translate-x-1/2 bottom-full mb-3">
              {image.skill_name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {/* Backend skills */}
        {Backend_skill.map((image, index) => (
          <div
            className="card iso-pro relative group transition-all duration-500 ease-out transform hover:scale-110"
            key={index}
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <span className="tooltip absolute opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out bg-gradient-to-r from-red-400 to-yellow-600 text-white text-sm font-semibold rounded-lg shadow-lg py-2 px-4 left-1/2 transform -translate-x-1/2 bottom-full mb-3">
              {image.skill_name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {/* Full stack skills */}
        {Full_stack.map((image, index) => (
          <div
            className="card iso-pro relative group transition-all duration-500 ease-out transform hover:scale-110"
            key={index}
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <span className="tooltip absolute opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-lg py-2 px-4 left-1/2 transform -translate-x-1/2 bottom-full mb-3">
              {image.skill_name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {Other_skill.map((image, index) => (
          <div
            className="card iso-pro relative group transition-all duration-500 ease-out transform hover:scale-110"
            key={index}
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <span className="tooltip absolute opacity-0 scale-90 group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:scale-110 transition-all duration-300 ease-out bg-gradient-to-r from-indigo-500 to-teal-600 text-white text-sm font-semibold rounded-lg shadow-lg py-2 px-4 left-1/2 transform -translate-x-1/2 bottom-full mb-3">
              {image.skill_name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
