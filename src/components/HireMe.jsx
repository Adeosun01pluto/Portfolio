import React from "react";
import portfolio_pic from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-7 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl text-[black] font-semibold">
          Hire <span className="text-teal-700">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div className="">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm md:text-md mt-4 text-gray-200 leading-6">
          If you have a project that requires a skilled front-end developer or if you're looking to expand your team with someone who is dedicated, detail-oriented, and passionate about creating exceptional user experiences, I would be thrilled to discuss how I can contribute.
          </p>
          <button className="btn-primary mt-10 bg-white text-teal-900 py-2 px-4 rounded-sm font-semibold"><a href="https://wa.link/kxys8p"> Say Hello</a></button>
        </div>
        {/* <img
          src={portfolio_pic}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        /> */}
      </div>
    </section>
  );
};

export default Hireme;