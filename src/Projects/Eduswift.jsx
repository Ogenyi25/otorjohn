import React from "react";
import { Link } from "react-router-dom";

const Eduswift = () => {
  return (
    <div className="royalrainbow-section">
      <div className="details">
        <div className="header">
          <div className="contents">
            <div className="title">Royal Rainbow International School</div>
            <div className="caption">
              A learning environment with a difference. Where every Pupil and
              Student is equipped with 21st Century soft, digital and vocational
              skills..
            </div>
          </div>
        </div>
        <div className="body-content">
          <div className="body-header">overview</div>
          <div className="task">
            <div className="head">Project Brief</div>
            <div className="body">
              This website showcases the Landing page of the website, the about
              us, media and news, admission procedure and a contact us page of
              the school. All of these are meant to give full and proper
              information about the school
            </div>
          </div>
          <div className="task">
            <div className="head">The Task</div>
            <div className="body">
              Design a school website showcasing the About us, admission
              procedure, media and events, and a contact us page.
            </div>
          </div>

          <div className="task">
            <div className="head">The Team</div>
            <div className="body">
              I worked on this project as the UI-UX designer alongside a
              frontend and a backend developer for the implementation of the
              designs.
            </div>
          </div>

          <div className="task">
            <div className="head">Responsibility</div>
            <div className="body">
              Come up with brand style and High fidelity designs for all the web pages.
            </div>
          </div>

          <div className="task">
            <div className="head">Inspiration + Process</div>
            <div className="body">
              I was inspired by colorful designs from dribbble, behance showcasing school websites that
              utilized illustrated cards to express their software elements. I
              took functionalities from clean sample web apps and
              converted them into new clean cards and elements. All of these were applied across all
              screens of the site to ensure consistency in design.
            </div>
          </div>
          <div className="full-project">
            <Link
              to={{
                pathname:
                  "https://www.figma.com/file/rRut8U5zO1cR2c2BTISrDx/RRIS-Website?node-id=2%3A4",
              }}
              target="_blank"
              className="link"
            >
              {" "}
              Click to see full project.{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduswift;
