import { NavLink } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { CgMail } from "react-icons/cg";
function Header() {
  const logo = "<AlbertoCamacho.com.tr />";
  return (
    <>
      <div className="h-[40rem] bg-about-section bg-cover ">
        <nav className="h-24 flex justify-between items-center text-center px-20">
          <div>
            <NavLink
              className="text-2xl font-medium hover:opacity-80 transition-all text-theme_red"
              to="/"
            >
              {logo}
            </NavLink>
          </div>
          <div className=" grid gap-x-6 grid-flow-col text-white">
            <NavLink
              className="hover:opacity-80 transition-all capitalize text-2xl font-medium text-white"
              to="/profile"
            >
              Profile
            </NavLink>

            <NavLink
              className=" hover:border-b-2 hover:opacity-80 transition-all capitalize text-2xl font-medium text-white"
              to="/resume"
            >
              Resume
            </NavLink>

            <NavLink
              className="hover:border-b-2 hover:opacity-80 transition-all capitalize text-2xl font-medium text-white"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </nav>
        <div className="grid grid-cols-2">
          <div className="col-start-2 pt-40">
            <span className="text-3xl font-normal text-white tracking-wide block">
              Hi, I am
            </span>
            <span className="text-4xl font-black text-white tracking-widest block mt-3">
              Alberto Camacho Jr.
            </span>
            <span className="text-xl font-normal text-theme_red tracking-wide block mt-3">
              Front End Developer
            </span>
            <div className="mt-12">
              <a
                href="mailto:alberto.camachojr01@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-3xl bg-main_white inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-theme_red"
              >
                <CgMail />
              </a>
              <a
                href="https://www.linkedin.com/in/albertocamachojr"
                target="_blank"
                rel="noreferrer"
                className="text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-theme_red"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/June-Durr"
                target="_blank"
                rel="noreferrer"
                className="text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-theme_red"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01b2118c60bee5052e"
                target="_blank"
                rel="noreferrer"
                className="text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-theme_red"
              >
                <SiUpwork />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
