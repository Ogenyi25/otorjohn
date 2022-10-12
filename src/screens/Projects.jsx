import React from "react";
import { Link } from "react-router-dom";
import INVESTIFY from "../asset/project/investify.png";
import OGALANDLORD from "../asset/project/ogalandlord/ogalandlord.png";
// import EDUSWIFT from "../asset/project/Banner.png";
import RETRORESUME from "../asset/project/retroresume.png";
// import LANDMARK2 from "../asset/project/landmark2.png";
import CHOOPIES from "../asset/project/choopies.png";
import ARTINICT from "../asset/project/artinict.png";
import SMART_HOME_APP from "../asset/project/smarthomeapp.svg";
import NUEMORPHIC from "../asset/project/nuemorphic.svg";
// import { handlePreloader } from '../utilities/Index';

const Projects = () => {
  // useEffect(() => {
  //   handlePreloader();
  // }, []);
  return (
    <div className="project-section">
      <div className="details">
        <div className="title">featured projects</div>
        <div className="projects">
          <div className="project-details">
            <div className="project-image">
              <img src={INVESTIFY} alt="" className="image" />
            </div>
            <div className="project-content">
              <div className="head">Investaholic</div>
              <div className="body">
                Investaholic is a stock investment mobile application meant to help users invest in stocks with different companies.
                It gives users the ability to make transactions (deposit or withdraw) see all transactions and also search for a
                company of their choice to invest with.
              </div>
              <div className="tags">
                <div className="tag">UI Design</div>
                <div className="tag">Mobile App</div>
                <div className="tag">Investment</div>
                <div className="tag">UX Design</div>
                <div className="tag">Figma</div>
              </div>
              <Link className="link" to="/investaholic">
                <div className="button">View project details</div>
              </Link>
            </div>
          </div>


          <div className="project-details">
            <div className="project-image">
              <img src={RETRORESUME} alt="" className="image" />
            </div>
            <div className="project-content">
              <div className="head">retroresume</div>
              <div className="body">
                Retroresume is a resume builder application to help users crack the code for writing perfect resumes.
                Plus, it gives you a state-of-the art design to create a beautiful, professional job application resume.
                Whether this is your first job or you’re looking for a promotion, it will help you stand above the rest
                by highlighting your personality and achievements..
              </div>
              <div className="tags">
                <div className="tag">UI Design</div>
                <div className="tag">Web App</div>
                <div className="tag">Website</div>
                <div className="tag">UX Design</div>
                <div className="tag">Figma</div>
              </div>
              <Link className="link" to="/retroresume">
                <div className="button">View project details</div>
              </Link>
            </div>
          </div>

        </div>

        <div className="projects">
          <div className="project-details">
            <div className="project-image">
              <img src={ARTINICT} alt="" className="image" />
            </div>
            <div className="project-content">
              <div className="head">Artinict</div>
              <div className="body">
                This is the official website for Artinict - A tech base organization that provides Advanced and Innovative IT Solutions.
                The website showcases the Home, About us, Services, Portfolio and Contact page.
              </div>
              <div className="tags">
                <div className="tag">UI Design</div>
                <div className="tag">Website Design</div>
                <div className="tag">UX Design</div>
                <div className="tag">Figma</div>
              </div>
              <Link className="link" to="/artinict">
                <div className="button">View project details</div>
              </Link>
            </div>
          </div>


          <div className="project-details neiti">
            <div className="project-image">
              <img src={OGALANDLORD} alt="" className="image" />
            </div>
            <div className="project-content">
              <div className="head">OGA-LANDLORD</div>
              <div className="body">
                Oga Landlord is a mobile application to help people search for and rent apartments in any location of their choice.
                This helps remove the stress of physically going to scout for houses, it also take away the cost of agent fees..
              </div>
              <div className="tags">
                <div className="tag">UI Design</div>
                <div className="tag">Apartments</div>
                <div className="tag">Mobile App</div>
                <div className="tag">UX Design</div>
                <div className="tag">User Research</div>
                <div className="tag">Figma</div>
              </div>
              <Link className="link" to="/ogalandlord">
                <div className="button">View project details</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="title">other projects</div>
        <div className="explain">
          I've also created and prototyped other designs for different imaginary products as a means of improving
          on my design skills and putting into practice other design techniques and patterns.
          Some of these designs include -:
        </div>
        <div className="other-projects">
          <div className="project-cards">
            <img src={NUEMORPHIC} alt="" className="card" />
            <div className="project-name">Car Remote App</div>
            <div className="project-description">
              This is a dark screen Nuemorphic mobile app design for a car brand (Benz-G63).
              It showcases a lock screen, a home page with icon links to other subpages for temperature, battery life, location, etc.
            </div>

            <div className="prototype">Click
              <a href="https://www.figma.com/proto/eOYas8heyU5jXVXAwPE6Dm/February-Projects?node-id=265%3A7060&scaling=scale-down&page-id=264%3A6960&starting-point-node-id=279%3A8673" rel="noreferrer" target="_blank">
                here
              </a>
              to see the prototype for this design.
            </div>
          </div>

          <div className="project-cards">
            <img src={CHOOPIES} alt="" className="card" />
            <div className="project-name">Choopies</div>
            <div className="project-description">
              Choopies is a mobile food delivery app meant to help users (customers)
              place order of their favorite snack and have it delivered in a short while.
              It features order tracking, fast in-app payment and lots more.
            </div>

            <div className="prototype">Click
              <a href="https://www.figma.com/proto/eOYas8heyU5jXVXAwPE6Dm/February-Projects?node-id=37%3A76&scaling=scale-down&page-id=34%3A64&starting-point-node-id=64%3A615" rel="noreferrer" target="_blank">
                here
              </a>
              to see the prototype for this design.
            </div>

          </div>

          <div className="project-cards">
            <img src={SMART_HOME_APP} alt="" className="card" />
            <div className="project-name">Smart Home App</div>
            <div className="project-description">
              The smart home app as the name implies is a smart home automation application designed in both light and dark theme.
              It showcases the different rooms and the applicances in them that can be remotely controlled.
            </div>

            <div className="prototype">Click
              <a href="https://www.figma.com/proto/eOYas8heyU5jXVXAwPE6Dm/February-Projects?node-id=396%3A5504&scaling=scale-down&page-id=326%3A9051&starting-point-node-id=396%3A5556" rel="noreferrer" target="_blank">
                here
              </a>
              to see the prototype for this design.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
