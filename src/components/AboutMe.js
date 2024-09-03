import React from "react";
import { Link } from "react-router-dom";
import ResumeDownload from "./ResumeDownload";

function AboutMe() {
  return (
    // Main container div
    <div className=" bg-main_white flex flex-col justify-center items-center px-96 py-16">
      {/* Main heading */}
      <h1 className="text-4xl font-black tracking-widest text-black">
        ABOUT ME
      </h1>
      {/* Subheading */}
      <h2 className="text-xl font-medium tracking-wider mt-9">
        Front End Developer
      </h2>
      {/* Paragraph with your bio */}
      <p className="text-lg font-light tracking-wider mt-9">
        I'm a driven professional with a decade of project management success,
        now channeling my passion for problem-solving into the world of web
        development. My experience leading teams, streamlining processes, and
        consistently delivering results translates seamlessly into crafting
        efficient, user-friendly applications. I thrive on learning new
        technologies and am currently focused on mastering React and JavaScript.
      </p>
      {/* Container for the buttons */}
      <div className=" mt-16">
        {/* "Hire Me" Button */}
        <Link
          to="/contact"
          className="text-theme_red text-lg  font-medium px-16 py-5 border-theme_red border rounded-lg  transition-all hover:opacity-80"
        >
          Hire Me
        </Link>
        {/* "Download Resume" Button */}
        <a
          href="www.google.com"
          className="text-theme_red text-lg  font-medium px-14 py-5 border-theme_red border rounded-lg ml-10 transition-all hover:opacity-80"
        >
          <ResumeDownload />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
