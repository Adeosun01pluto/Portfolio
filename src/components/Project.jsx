import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import coffee from "../assets/images/coffee.png";
import echominds from "../assets/images/echominds.png";
import coinbase from "../assets/images/coinbas.png";
import tik from "../assets/images/tiktaktoe.png";
import traveli from "../assets/images/traveli.png";
import growdatahub from "../assets/images/growdatahub.png";
import neumorphism from "../assets/images/neumorphism.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "iScholar",
      github_link: "https://github.com/Adeosun01pluto/i-scholar",
      live_link: "https://ischolar-cfed0.web.app",
    },
    {
      img: echominds,
      name: "Echominds",
      github_link: "https://github.com/Adeosun01pluto/EchoMind",
      live_link: "https://echominds.com.ng/",
    },
    {
      img: coinbase,
      name: "Coinbase",
      github_link: "https://github.com/Adeosun01pluto/Grow-Data-Hub",
      live_link: "https://coinbase-ruby.vercel.app",
    },  
    {
      img: traveli,
      name: "Traveli ",
      github_link: "https://github.com/Adeosun01pluto/Travel-Web-App",
      live_link: "https://travellers-rouge.vercel.app/",
    },
    {
      img: tik,
      name: "Tik Tak Toe ",
      github_link: "https://github.com/Adeosun01pluto/Tik-Tak-Toe",
      live_link: "https://tik-tak-toe-drab.vercel.app",
    },
    // {
    //   img: project3,
    //   name: "Portfolio",
    //   github_link: "https://github.com/Adeosun01pluto/Grow-Data-Hub",
    //   live_link: "/",
    // },  
    {
      img: growdatahub,
      name: "Grow Data Hub",
      github_link: "https://github.com/Adeosun01pluto/Grow-Data-Hub",
      live_link: "https://grow-data-hub.vercel.app",
    },    
    {
      img: coffee,
      name: "HTML & CSS Coffee Website ",
      github_link: "https://github.com/Adeosun01pluto/",
      live_link: "https://coffee-web-app.vercel.app",
    },    
    {
      img: neumorphism,
      name: "HTML & CSS Neumorphism ",
      github_link: "https://github.com/Adeosun01pluto/Neumorphism",
      live_link: "https://neumorphism-livid.vercel.app",
    },    
    // {
    //   img: quran,
    //   name: "Quranify",
    //   github_link: "https://github.com/Adeosun01pluto/Quranify",
    //   live_link: "https://quranifyanify.vercel.app",
    // },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-[300px] w-full p-4 bg-slate-700 rounded-xl">
                  <div className="w-[100%] bg-white h-[150px]">
                    <img src={project_info.img} alt="" className="w-[100%] object-contain h-full rounded-lg" />
                  </div>
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;