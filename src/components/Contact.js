import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SiUpwork } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { DiTerminalBadge } from "react-icons/di";
import ContactForm from "./Contact/ContactForm";
import { Map } from "./Contact/Map";

function Contact() {
  return (
    <>
      <Header />
      <div className="bg-main_white flex flex-col justify-center items-center py-16">
        <h1 className="text-4xl text-black tracking-widest">
          Contact me for work
        </h1>
        <span className="mt-9 text-xl font-light">
          Web & Embedded Aplication
        </span>
        <div className="mt-14 grid grid-flow-col gap-x-5">
          <a
            href="https://www.upwork.com/freelancers/~01b2118c60bee5052e?mp_source=share"
            target="_blank"
            rel="noreferrer"
            className="border-2 ring-1 border-black px-9 py-4 font-light tracking-widest rounded-xl hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white"
          >
            <SiUpwork className="w-6 h-6 inline-block " /> Upwork
          </a>
          <a
            href="https://www.fiverr.com/sitelaunch?public_mode=true"
            target="_blank"
            rel="noreferrer"
            className="border-2 ring-1 border-black px-9 py-4 font-light tracking-widest rounded-xl hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white"
          >
            <SiFiverr className="w-6 h-6 inline-block " /> Fiverr
          </a>
          <a
            href="https://www.linkedin.com/in/albertocamachojr"
            target="_blank"
            rel="noreferrer"
            className="border-2 ring-1 border-black px-9 py-4 font-light tracking-widest rounded-xl hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white"
          >
            <CiLinkedin className="w-6 h-6 inline-block " /> LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563887799053"
            target="_blank"
            rel="noreferrer"
            className="border-2 ring-1 border-black px-9 py-4 font-light tracking-widest rounded-xl hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white"
          >
            <GrFacebookOption className="w-6 h-6 inline-block " /> Facebook
          </a>
          <button className="border-2 ring-1 border-black px-9 py-4 font-light tracking-widest rounded-xl hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white">
            <DiTerminalBadge className="w-6 h-6 inline-block " /> All
          </button>
        </div>
      </div>
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
}

export default Contact;
