import React from "react";
import BACK_ARROW from '../asset/backarrow.svg'
import { Link } from 'react-router-dom';
import SCREEN_1 from '../asset/project/ogalandlord/Screen 1.png'
import SCREEN_2 from '../asset/project/ogalandlord/Screen 2.png'
import SCREEN_3 from '../asset/project/ogalandlord/Screen 3.png'
import SCREEN_4 from '../asset/project/ogalandlord/Screen 4.png'
import SCREEN_5 from '../asset/project/ogalandlord/Screen 5.png'
import SCREEN_6 from '../asset/project/ogalandlord/Screen 6.png'
import SCREEN_7 from '../asset/project/ogalandlord/Screen 7.png'
import SCREEN_8 from '../asset/project/ogalandlord/Screen 8.png'
import SCREEN_9 from '../asset/project/ogalandlord/Screen 9.png'
import SCREEN_10 from '../asset/project/ogalandlord/Screen 10.png'
import SCREEN_11 from '../asset/project/ogalandlord/Screen 11.png'


const Neiti = () => {
  return (
    <div className="neiti-section">
      <div className="details">
        <div className="goback">
          <Link className="back" to="/projects"> <img src={BACK_ARROW} alt="back-arrow" className="arrow" />
          </Link>
        </div>
        <div className="section">
          <img src={SCREEN_1} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_2} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_3} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_4} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_5} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_6} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_7} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_8} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_9} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_10} alt="" className="section-image" />
        </div>
        <div className="section">
          <img src={SCREEN_11} alt="" className="section-image" />
        </div>
      </div>
    </div>
  );
};

export default Neiti;
