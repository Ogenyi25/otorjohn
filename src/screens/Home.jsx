import React from "react";
import Instagram from "../asset/instagram.svg";
import Linkedin from "../asset/linkedin.svg";
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
            I am a <span>Ui-Ux Designer</span>
            focusing on crafting user experiences and design systems for software, web, and mobile products.
            I combine research, rapid prototyping, interaction, and visual design to transform complex problems into
            elegant solutions. I'm passionate about applying consumer psychology for an interaction science-backed approach.
            I'm about building and designing software products across financial institutes, productivity, health, education,
            E-Commerce, and lots more. I am based in Abuja, Nigeria.
          </div>

          <a href="https://drive.google.com/file/d/121jqhd0AgGj3Or0uNRHgmxJaimq_FqKV/view?usp=sharing" rel="noreferrer" target="_blank">
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
            <a href="https://www.linkedin.com/in/ogenyi25" rel="noreferrer" target="_blank">
              <img src={Linkedin} alt="social-links" />
            </a>
            <a href="https://www.instagram.com/ui.uxotor" rel="noreferrer" target="_blank">
              <img className="instagram" src={Instagram} alt="social-links" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
