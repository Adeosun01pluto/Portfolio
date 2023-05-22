import React from "react";
import { AiFillAliwangwang, AiFillDingtalkCircle, AiFillMail } from "react-icons/ai";

const Contact = () => {
  const contact_info = [
    { logo: <AiFillMail />, text: "adeosun01pluto@gmail.com" },
    { logo: <AiFillDingtalkCircle />, text: "123 456 780" },
    {
      logo: <AiFillAliwangwang />,
      text: "demo location",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold text-[black]">
          Contact <span className="text-teal-700">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" className="py-3 pl-2 rounded-sm text-[black]/90 outline-none border-none" />
            <input type="Email" placeholder="Your Email Address" className="py-3 pl-2 rounded-sm text-[black]/90 outline-none border-none"/>
            <textarea placeholder="Your Message" rows={10} className="py-3 pl-2 rounded-sm text-[black]/90 outline-none border-none"></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-teal-700 rounded-full">
                  {contact.logo}
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;