import React from "react";
import Instagram from "../asset/instagram.svg";
import Linkedin from "../asset/linkedin.svg";
import Behance from "../asset/behance.svg";
import Twitter from "../asset/twitter.svg";
import HERO from "../asset/hero.svg";
import Button from "../asset/button.svg";

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <div className="text-details">
          <div className="hello">Hello, my name is</div>
          <div className="name">Otor John Stephen</div>
          <div className="description">
            I am a <span>Creative and Enthusiastic UI UX Designer </span> with
            4+ years of hands-on experience in crafting user experiences and
            design systems for software, web, and mobile products. I am eager to
            contribute to team success through hard work, attention to detail,
            and, excellent organizational skills. I am motivated to learn, grow
            and excel in the design Industry. I have an excellent experience in
            prototyping, UI design, UX design, User research, Web design, and
            wireframing. I seek to deliver Ui-Ux excellence for the betterment
            of any organization whose goal is to attain excellence.
          </div>

          <a
            href="https://drive.google.com/file/d/1uIB7qjUhG0gcmcoF73xuzpoQlyPI-OGQ/view?usp=drive_link"
            rel="noreferrer"
            target="_blank"
          >
            <div className="button">
              <img src={Button} alt="" />
            </div>
          </a>

          <div className="quote">
            “As far as the customer is concerned, the interface is the product.”
          </div>
        </div>
        <div className="image-details">
          <img src={HERO} alt="" className="hero" />
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/ogenyi25"
              rel="noreferrer"
              target="_blank"
            >
              <img className="icon" src={Linkedin} alt="social-links" />
            </a>
            <a
              href="https://www.instagram.com/ui.uxotor"
              rel="noreferrer"
              target="_blank"
            >
              <img className="icon" src={Instagram} alt="social-links" />
            </a>
            <a
              href="https://www.behance.net/johnotor"
              rel="noreferrer"
              target="_blank"
            >
              <img className="icon" src={Behance} alt="social-links" />
            </a>
            <a
              href="https://twitter.com/uiuxotor"
              rel="noreferrer"
              target="_blank"
            >
              <img className="icon" src={Twitter} alt="social-links" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
