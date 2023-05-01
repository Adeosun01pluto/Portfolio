import React from "react";
import hero from "../assets/images/hero.png";
import { AiFillFacebook, AiFillGoogleSquare, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
const Hero = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-[#4c4c4c] font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Adeosun Pluto</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <AiFillGoogleSquare size={35} color="#f5005f"/>
            <AiFillTwitterSquare size={35}/>
            <AiFillInstagram size={35}/>
            <AiFillFacebook size={35}/>
            {/* className="text-gray-600 hover:text-white cursor-pointer " */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;