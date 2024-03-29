import React from "react";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiTailwindcss, SiMui } from "react-icons/si";


const Skills = () => {
  const skills = [
    {
      logo:<FaReact/>,
      level: "React JS",
      count: 86,
    },
    {
      logo:<IoLogoJavascript/>,
      level: "Javascript",
      count: 90,
    },
    {
      logo:<SiTailwindcss/>,
      level: "Tailwind CSS",
      count: 80,
    },
    {
      logo:<SiMui/>,
      level: "Material UI",
      count: 80,
    },
    {
      logo:<ImHtmlFive/>,
      level: "HTML",
      count: 80,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-teal-700">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-teal-700 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(0, 121, 107)  100%,#ddd 100%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-teal-700">
                  {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;