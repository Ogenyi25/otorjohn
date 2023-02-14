import React from "react";
import { Link } from "react-router-dom";
import HEADER_IMAGE from "../asset/project/retroresumebg.png";
import BACK_ARROW from "../asset/backarrow.svg";

const Retroresume = () => {
  return (
    <div className="retroresume-section">
      <div className="details">
        <div className="goback">
          <Link className="back" to="/projects">
            {" "}
            <img src={BACK_ARROW} alt="back-arrow" className="arrow" />
          </Link>
        </div>
        <div className="header">
          <img src={HEADER_IMAGE} alt="" className="header-image" />
        </div>

        <div className="body-content">
          <div className="body-header">overview</div>
          <div className="task">
            <div className="head">Project Brief</div>
            <div className="body">
              This is a resume builder for users, job seekers, and everyone in
              need of a professional resume. Retroresume is meant to show case
              different resume category for users to choose from. It provides
              option for users to purchase a template and edit it's contents to
              suit their own requirement. Users can download edited resume in
              both word docx and pdf formats. The product entails a website, a
              webapp and, a mobile app as well.
            </div>
          </div>
          <div className="task">
            <div className="head">The Task</div>
            <div className="body">
              Build a user-friendly website, webapp and mobile app for a resume
              builder organization. It should showcase the about us, resume
              categories, contacts and user dashboard section. A login and sign
              up feature was included as well.
            </div>
          </div>
          <div className="task">
            <div className="head">The Team</div>
            <div className="body">
              I worked on this project as the ui-ux designer along side the
              engineers who built the product.
            </div>
          </div>
          <div className="task">
            <div className="head">Responsibility</div>
            <div className="body">
              As the ui-ux designer, I came up with the brand style and a High
              fidelity design for the website, user dashboard and mobile
              application.
            </div>
          </div>
          <div className="task">
            <div className="head">Inspiration + Process</div>
            <div className="body">
              I was inspired by clean, colorful website designs that utilized
              illustrated cards to express their software elements. I took
              functionalities from clean sample mobile/web apps and converted
              them into new clean cards and elements. I made use of shadow for a
              clean look and effect. This was applied across all screens of the
              entire website.
            </div>
          </div>

          <div className="full-project">
            <a
              href="https://www.figma.com/file/dKFNn900jw2RP4aMkE0Rmm/RetroResume?node-id=1%3A3"
              rel="noreferrer"
              target="_blank"
            >
              <div className="button">View Full Project</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retroresume;
