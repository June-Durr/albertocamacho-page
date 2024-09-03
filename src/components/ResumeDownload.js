import React from "react";

function ResumeDownload() {
  const resumeUrl = "/albertocamacho-resume.pdf"; // Replace with the actual path or URL to your resume

  return (
    <a
      href={resumeUrl}
      className="text-theme_red"
      download="alberto_camacho_resume.pdf"
    >
      Download Resume
    </a>
  );
}

export default ResumeDownload;
