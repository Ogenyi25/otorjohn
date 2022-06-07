import React from "react";
import CARD from "../asset/project/card.svg";
import LANDING from "../asset/project/landing.svg";
import TRANNSACTION from "../asset/project/transaction.svg";
import PROFILE from "../asset/project/profile.svg";
import { Link } from "react-router-dom";

const Neiti = () => {
  return (
    <div className="money-section">
      <div className="details">
        <div className="header">
          <div className="content">
            <div className="title">
              Mobile App and Web Landing Page Design for MONEY
            </div>
            <div className="caption">
              manage, spend and save your money without worry.
            </div>
            <div className="description">
              Money is a revolutionary mobile app built to help you manage your
              spendings, and save your money. With MONEY, transfers, banking,
              credits, and invoices are all in one place. You will always know
              where you stand.
            </div>
          </div>
        </div>
        <div className="body-content">
          <div className="body-header">overview</div>
          <div className="task">
            <div className="head">Project Brief</div>
            <div className="body">
              This is a project from the UI Design Essential Course on
              <Link
                to={{ pathname: "https://www.skillshare.com" }}
                target="_blank"
                className="link"
              >
                {" "}
                Skillshare.{" "}
              </Link>
              MONEY is a mobile app that will help users keep track of their
              spendings, savings and other transactions. In addition, with MONEY
              you can receive funds as a means of donations from friends.
            </div>
          </div>
          <div className="task">
            <div className="head">The Task</div>
            <div className="body">
              Design a mobile app and a one page website to tell more of the
              app.
            </div>
          </div>

          <div className="task">
            <div className="head">The Team</div>
            <div className="body">
              I worked on this project alone as the UI-UX designer.
            </div>
          </div>

          <div className="task">
            <div className="head">Responsibility</div>
            <div className="body">
              Come up with brand style and High fidelity designs for the mobile
              app and also the web page.
            </div>
          </div>

          <div className="task">
            <div className="head">Inspiration + Process</div>
            <div className="body">
              I was inspired by clean, colorful mobile apps and websites that
              utilized illustrated cards to express their software elements. I
              took functionalities from clean sample mobile/web apps and
              converted them into new clean cards and elements. I used linear
              gradients that ranged from red to dark purple and made use of
              shadow for a clean look and effect. This was applied across all
              screens of the app and site. entire website.
            </div>
          </div>

          <div className="task">
            <div className="head">Finished Designs</div>
            <div className="body">
              After UI & Website Discovery, I moved on to high-fidelity. I used
              existing brand guidelines for the cards, typography, colors, and
              buttons, however, I designed new look and feel for a modern
              effect. Here are the final designs.
            </div>
          </div>
          <div className="final-image-group">
            <img src={CARD} alt="" className="images" />
            <img src={TRANNSACTION} alt="" className="images" />
            <img src={PROFILE} alt="" className="images" />
            <img src={LANDING} alt="" className="images landing" />
          </div>
          <div className="full-project">
            <Link
              to={{
                pathname:
                  "https://www.figma.com/file/bcDsL2SEHL3lL3cD9Yf9br/Learn-Figma-UI-Design-Essentials-Project-Financial-App?node-id=311%3A197",
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

export default Neiti;
