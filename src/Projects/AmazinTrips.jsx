import React from "react";
import { Link } from "react-router-dom";
import HEADER_IMAGE from "../asset/project/amazintripsbg.png";
import BACK_ARROW from "../asset/backarrow.svg";

const AmazinTrips = () => {
  return (
    <div className="amazintrips-section">
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
              Amazin Trips is a travel app (mobile, webapp, and website) that
              will provide users the simplest experience of travel. In the app,
              users can easily book their flight, hotel (accomodation), taxi
              etc. In addition, users can subscribe to a plan of their choosing
              that will help provide them with all the requirements for their
              trip.
            </div>
          </div>
          <div className="task">
            <div className="head">The Task</div>
            <div className="body">
              The task was to design a mobile, and web app that will enable
              users book a trip base off their choice, and also provide support
              that will help provide them with all the requirements for their
              trip. The design should include a website that will showcase a
              home page, an about page that gives information about AmazinTrips,
              what they do, their mission and vision as well as their core
              values. It should also showcase a travel plan section that will
              list out all the available travel plans, and also a contact page
              that will give information as to how users can reach out to.
            </div>
          </div>
          <div className="task">
            <div className="head">The Team</div>
            <div className="body">
              I worked on this project as the ui-ux designer, amongst other team
              mates which include a frontend web developer, backend web
              developer, and a mobile app developer.
            </div>
          </div>
          <div className="task">
            <div className="head">Responsibility</div>
            <div className="body">
              As the ui-ux designer, I came up with the brand style and a High
              fidelity design for the website - desktop and mobile view, the
              mobile app, web app, and also an admin dashboard.
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
              entire website. I ran a competitive analysis of other similar
              products like wakanow, check out features that they lacked and
              leveraged on them to come up with a unique, user friendly design.
            </div>
          </div>
          <div className="full-project">
            <a
              href="https://www.figma.com/file/pRwFiCqHzwcSrFKvoOAmVf/AmazinTrips?node-id=16%3A201&t=ts3nCYogUj87nS0a-1"
              rel="noreferrer"
              target="_blank"
            >
              <div className="button">View Full Project</div>
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AmazinTrips;
