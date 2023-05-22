import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
  }, []);
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    window.scrollY > 0 ? setSticky(true) : setSticky(false);
  });

  return (
    <nav
      className={`fixed w-full h-[80px] flex items-center left-0 top-0 z-[999] ${
        sticky ? "bg-teal-500/60 h-[80px] flex items-center text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center w-[100%] md:w-[95%] mx-auto justify-between">
        <div className="mx-7">
          <h4 className="text-2xl md:text-3xl text-[black] uppercase font-bold">
            Q<span className="text-teal-700">ozee</span>m
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-semibold  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 md:text-md">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-4 hover:text-teal-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-500"
          } text-3xl md:hidden m-5`}
        >
          {
            !open?
          <AiOutlineMenu />: <AiOutlineClose/>
          }
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
          px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul className="flex flex-col h-full gap-10 py-2 ">
            <div className="">
              <h4 className="text-2xl md:text-3xl text-[black] uppercase font-bold">
                Q<span className="text-teal-700">ozee</span>m
              </h4>
            </div>
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-teal-600 "
              >
                <a href={menu?.link} className="text-md md:text-md">{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;