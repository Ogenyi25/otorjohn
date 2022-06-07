import React from "react";
import VECTOR from '../asset/hero.svg';
import EMOJI from '../asset/emoji.svg';
import { Link }  from 'react-router-dom';
import INSTAGRAM from "../asset/instagram.svg";
import DRIBBLE from "../asset/dribble.svg";
import LINKEDIN from "../asset/linkedin.svg";

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
              <Link to={{pathname: "https://www.instagram.com/ui.uxotor"}} target="_blank" className="social"><img className="instagram" src={INSTAGRAM} alt="" /></Link>
              <Link to={{pathname: "https://www.dribbble.com/ogenyi25"}} target="_blank" className="social"><img src={DRIBBLE} alt="" /></Link>
              <Link to={{pathname: "https://www.linkedin.com/in/ogenyi25"}} target="_blank" className="social"><img src={LINKEDIN} alt="" /></Link>
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
