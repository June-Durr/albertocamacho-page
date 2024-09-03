import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      }); //Creat intersection observe->check what element is being observed->
    }); //if intersecting Adds "show" class-> If not intersecting removes "show" to reset

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    ); // 5. Select all elements that should have animations/transitions
    hiddenElements.forEach((el) => observer.observe(el)); // 6. Start observing each of the selected elements

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el)); //7. Cleanup function
    };
  }, []); // 8. Empty dependency array ensures the effect runs only once after the initial render
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Hi, I'm <span>Alberto Camacho</span>. After a decade of success in
          project management, I'm excited to bring my organizational skills,
          leadership experience, and dedication to detail into the world of web
          development. I'm eager to build efficient and impactful web solutions.
          I'm constantly expanding my skillset and am currently focused on
          mastering React and JavaScript.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Alberto Camacho</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">USA</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:(+1)2035360834'"
          >
            (+1) 203 536 0834
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:alberto.camachojr01@gmail.com'"
          >
            alberto.camachojr01@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">2+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">LinkedIn</p>
          <p className="about-detail-info">
            www.linkedin.com/in/albertocamachojr
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English/Spanish</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
