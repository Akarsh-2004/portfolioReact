import React from "react";
import "./Resume.css"
function Resume(){
    return(<>
     <div className="resume-download">
        <a href="/resumeMAY.pdf" download className="download-button">
          📄 Download Resume
        </a>
      </div></>);
}

export default Resume;