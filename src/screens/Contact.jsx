import React from "react";
import VECTOR from '../asset/hero.svg';
import EMOJI from '../asset/emoji.svg';
import INSTAGRAM from "../asset/instagram.svg";
import LINKEDIN from "../asset/linkedin.svg";
import TWITTER from "../asset/twitter.svg";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="details">
        <div className="title">contact me</div>
        <div className="contact-details">
          <div className="contact">
            <div className="contact-mail">john@omniswift.com</div>
            <div className="number"><span>Whatsapp:</span> 09081046069, <span>Call:</span> 08134756623</div>
            <div className="text">
              Always down to collaborate. Reach out and let’s have a chat. <img src={EMOJI} alt="" className="emoji" />
            </div>
            <div className="social-icons">
              <a href="https://www.instagram.com/ui.uxotor" rel="noreferrer" target="_blank" className="social">
                <img src={INSTAGRAM} alt="" className="instagram" />
              </a>
              <a href="https://www.linkedin.com/in/ogenyi25" rel="noreferrer" target="_blank" className="social">
                <img src={LINKEDIN} alt="" />
              </a>
              <a href="https://twitter.com/uiuxotor" rel="noreferrer" target="_blank" className="social">
                <img src={TWITTER} alt="" />
              </a>
            </div>
          </div>
          <div className="vector">
            <img src={VECTOR} alt="" className="contact-vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
