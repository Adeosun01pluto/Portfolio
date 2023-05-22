import React from "react";
import { AiFillMessage } from "react-icons/ai";

const Bot = () => {
  return (
    <a href="https://wa.link/kxys8p" className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-teal-700 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <AiFillMessage/>
    </a>
  );
};

export default Bot;