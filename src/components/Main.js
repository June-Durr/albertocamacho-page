import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdPaper } from "react-icons/io";
import { RiSlideshowLine } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 h-[90vh] ">
        <div className=" w-full h-full  bg-profile bg-cover hover:shadow-main ease-in-out duration-500">
          <Link
            to="/profile"
            className="w-full h-full bg-black/25 grid  justify-center content-center  "
          >
            <span className=" text-6xl text-main_icons flex justify-center">
              <CgProfile />{" "}
            </span>
            <div className="text-white  font-black font-Lato tracking-wide text-4xl">
              PROFILE
            </div>
          </Link>
        </div>
        <div className="w-full h-full bg-blog bg-cover hover:shadow-main ease-in-out duration-500">
          <Link
            to="/resume"
            className="w-full h-full bg-black/25 grid  justify-center content-center"
          >
            <span className=" text-6xl text-main_icons flex justify-center">
              <IoMdPaper />{" "}
            </span>
            <div className="text-white  font-black font-Lato tracking-wide text-4xl">
              RESUME
            </div>
          </Link>
        </div>
        <div className="w-full h-full bg-portfolio bg-cover hover:shadow-main ease-in-out duration-500">
          <Link
            to="/portfolio"
            className="w-full h-full bg-black/25 grid  justify-center content-center"
          >
            <span className=" text-6xl text-main_icons flex justify-center">
              <RiSlideshowLine />{" "}
            </span>
            <div className="text-white  font-black font-Lato tracking-wide text-4xl">
              PORTFOLIO
            </div>
          </Link>
        </div>
        <div className="w-full h-full bg-contact bg-cover hover:shadow-main ease-in-out duration-500">
          <Link
            to="/contact"
            className="w-full h-full bg-black/25 grid  justify-center content-center"
          >
            <span className=" text-6xl text-main_icons flex justify-center">
              <CiPhone />{" "}
            </span>
            <div className="text-white  font-black font-Lato tracking-wide text-4xl">
              CONTACT
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
