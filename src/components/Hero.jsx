import React from "react";
import hero from "../assets/images/hero.png";
import portfolio_pic from "../assets/images/portfolio_pic.png";
import {  AiFillGithub, AiFillLinkedin, } from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import { GrTwitter} from "react-icons/gr";
const Hero = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={portfolio_pic} alt="" className="md:w-[55%] w-[80%] mt-[10px] rounded-md h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-[#4c4c4c] font-bold">
            <span className="text-teal-700 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
          </h1>
          <span className="text-xl font-semibold md:text-3xl">
            My Name is <span className="">Adeosun Qozeem</span>
          </span>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front End Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">
              <FcGoogle size={35} />
            </a>
            <a href="https://twitter.com/adeosun_pluto" target="_blank">
              <GrTwitter size={35} color="#1DA1F2"/>
            </a>
            <a href="https://www.linkedin.com/in/adeosun-pluto-11489a24b/" target="_blank">
              <AiFillLinkedin size={35} color="#0072b1"/>
            </a>
            <a href="https://github.com/Adeosun01pluto" target="_blank">
              <AiFillGithub size={35}/>
            </a>
            {/* className="text-gray-600 hover:text-white cursor-pointer " */}
          <button className="btn-primary mt-8 ">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;