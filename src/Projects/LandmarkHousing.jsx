import React from "react";
import { Link } from 'react-router-dom';

const LandmarkHousing = () => {
  return (
    <div className="landmark-section">
      <div className="details">
        <div className="header">
          <div className="contents">
            <div className="title">Landmark Housings Website</div>
            <div className="caption1">
              Great Spaces for Perfection and Class at Great Prices
            </div>
            <div className="description">
              Landmark Housings is a website for an imaginary Real Estate
              Company that sells houses all over the city. They also rent houses
              to clients on a monthly, quarterly or yearly base, depending on
              their request.
            </div>
          </div>
        </div>

        <div className="body-content">
          <div className="body-header">overview</div>
          <div className="task">
            <div className="head">Project Brief</div>
            <div className="body">
              This is a website for an imaginary real estate company. Landmark
              Housings websites showcases the About us section of the
              organization that shows their teams, awards, testimonials, e.t.c
              sections to instill confidence in their customers. It also shows
              the Buy and Rent sections for customers to easily select and
              purchase or rent a house.
            </div>
          </div>
          <div className="task">
            <div className="head">The Task</div>
            <div className="body">
              Build a user-friendly website for an imaginary real estate company
              showcasing the About us feature along side the Buy or Rent
              feature..
            </div>
          </div>
          <div className="task">
            <div className="head">The Team</div>
            <div className="body">
              This was a personal project meant to practice and test new skills
              as a result i worked on it alone.
            </div>
          </div>
          <div className="task">
            <div className="head">Responsibility</div>
            <div className="body">
              I came up with the brand style and a High fidelity design for the all of the web pages.
            </div>
          </div>
          <div className="task">
            <div className="head">Inspiration + Process</div>
            <div className="body">
              I was inspired by clean, colorful website designs that
              utilized illustrated cards to express their software elements. I
              took functionalities from clean sample mobile/web apps and
              converted them into new clean cards and elements. I made use of
              shadow for a clean look and effect. This was applied across all
              screens of the entire website.
            </div>
          </div>
          <div className="full-project">
          <Link
              to={{
                pathname:
                  "https://www.figma.com/file/iXHfWSMVazPB9zqm5T7vZY/Real-Estate-Website-(Landmark-Housing)?node-id=12%3A5782",
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

export default LandmarkHousing;
