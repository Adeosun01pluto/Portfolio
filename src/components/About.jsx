import React from "react";
import aboutImg from "../assets/images/about.png";
import portfolio_pic from "../assets/images/portfolio_pic.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "03" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-[black] text-4xl font-semibold">
          About <span className="text-teal-700">Me</span>
        </h3>
        <p className="text-gray-600 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-500 my-3">
              <p className="text-center mx-auto">
              Through my work, I seek to create meaningful connections between users and digital products, ensuring that every interaction is intuitive, immersive, and visually stunning. I am continuously inspired by the transformative potential of front-end development and excited to collaborate on projects that push the boundaries of what's possible.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-[lightgray]">
                      {content.count}
                      <span className="text-teal-700">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={portfolio_pic}
                alt=""
                className="w-full object-cover bg-teal-700 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;