import React from "react";
import { Link } from "react-router-dom";
import SNACKHAVEN from "../asset/project/snackhaven thumbnail.png";
import AMAZINTRIPS from "../asset/project/amazintrips.png";
import OGALANDLORD from "../asset/project/ogalandlord.png";
// import EDUSWIFT from "../asset/project/Banner.png";
import RETRORESUME from "../asset/project/retroresume.png";
// import LANDMARK2 from "../asset/project/landmark2.png";
// import CHOOPIES from "../asset/project/choopies.png";
import HUMANR from "../asset/project/hrdashboard.png";
import ARTINICT from "../asset/project/artinict.png";
import SMART_HOME_APP from "../asset/project/smarthomeapp.svg";
import NUEMORPHIC from "../asset/project/nuemorphic.svg";
import RELIAERP from "../asset/project/reliaerp.png"
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
            <Link className="link" to="/amazintrips">
              <div className="project-image">
                <img src={AMAZINTRIPS} alt="" className="image" />
              </div>
            </Link>
            <div className="project-content">
              <div className="head">Amazin Trips</div>
              <div className="body">
                Amazin Trips is a full-suite digital travel advisory platform
                that supports travelers to manage their end-to-end travel needs.
                Our multilevel approach to travel management isn't just centered
                on bookings but extends to providing a full program range
                support for a low-risk, efficient and affordable travel planning
                experience.
              </div>
              <div className="tags">
                <div className="tag">UI Design</div>
                <div className="tag">Mobile App</div>
                <div className="tag">Website</div>
                <div className="tag">UX Design</div>
                <div className="tag">Figma</div>
                <div className="tag">WebApp</div>
                <div className="tag">Travelling</div>
              </div>
              <Link className="link" to="/amazintrips">
                <div className="button">View project details</div>
              </Link>
            </div>
          </div>

          <div className="project-details">
            <Link className="link" to="/snackhaven">
              <div className="project-image">
                <img src={SNACKHAVEN} alt="" className="image" />
              </div>
            </Link>
            <div className="project-content">
              <div className="head">SnackHaven</div>
              <div className="body">
                SnackHaven is a mobile responsive e-commerce store for snacks.
                It's meant to help users make order of their favorite snacks,
                and try out new snack without leaving the comfort of their homes.
                It offers seemless multiple payment means so users that have to encounter
                difficulties in making payments.
              </div>
              <div className="tags">
                <div className="tag">UI Design</div>
                <div className="tag">Website</div>
                <div className="tag">Food</div>
                <div className="tag">Mobile Responsive</div>
                <div className="tag">UX Design</div>
                <div className="tag">Figma</div>
              </div>
              <Link className="link" to="/snackhaven">
                <div className="button">View project details</div>
              </Link>
            </div>
          </div>


          <div className="project-details">
            <Link className="link" to="/retroresume">
              <div className="project-image">
                <img src={RETRORESUME} alt="" className="image" />
              </div>
            </Link>
            <div className="project-content">
              <div className="head">retroresume</div>
              <div className="body">
                Retroresume is a resume builder application to help users crack
                the code for writing perfect resumes. Plus, it gives you a
                state-of-the art design to create a beautiful, professional job
                application resume. Whether this is your first job or you’re
                looking for a promotion, it will help you stand above the rest
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
                This is the official website for Artinict - A tech base
                organization that provides Advanced and Innovative IT Solutions.
                The website showcases the Home, About us, Services, Portfolio
                and Contact page.
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
                Oga Landlord is a mobile application to help people search for
                and rent apartments in any location of their choice. This helps
                remove the stress of physically going to scout for houses, it
                also take away the cost of agent fees..
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
          Here are other design projects that i have been able to create.
        </div>
        <div className="other-projects">
          <div className="project-cards">
            <img src={NUEMORPHIC} alt="" className="card" />
            <div className="project-name">Car Remote App</div>
            <div className="project-description">
              This is a dark screen Nuemorphic mobile app design for a car brand
              (Benz-G63). It showcases a lock screen, a home page with icon
              links to other subpages for temperature, battery life, location,
              etc.
            </div>

            <div className="prototype">
              <a
                href="https://www.figma.com/proto/eOYas8heyU5jXVXAwPE6Dm/February-Projects?node-id=265%3A7060&scaling=scale-down&page-id=264%3A6960&starting-point-node-id=279%3A8673"
                rel="noreferrer"
                target="_blank"
              >
                view design
              </a>
            </div>
          </div>


          <div className="project-cards">
            <img src={HUMANR} alt="" className="card" />
            <div className="project-name">HR Management</div>
            <div className="project-description">
              Human R. is a Human Resource (HR) Management System designed to
              help the HR personnel of an organisation keep track of daily office activities.
            </div>

            <div className="prototype">
              <a
                href="https://www.figma.com/file/LOMuqHCdhPRkrvmaHOqivB/Mini-HR-Dashboard?type=design&node-id=9%3A56&mode=design&t=B9D7mDpze2kiuNpj-1"
                rel="noreferrer"
                target="_blank"
              >
                View Design
              </a>
            </div>
          </div>

          <div className="project-cards">
            <img src={SMART_HOME_APP} alt="" className="card" />
            <div className="project-name">Smart Home App</div>
            <div className="project-description">
              The smart home app as the name implies is a smart home automation
              application designed in both light and dark theme. It showcases
              the different rooms and the applicances in them that can be
              remotely controlled.
            </div>

            <div className="prototype">
              <a
                href="https://www.figma.com/proto/eOYas8heyU5jXVXAwPE6Dm/February-Projects?node-id=396%3A5504&scaling=scale-down&page-id=326%3A9051&starting-point-node-id=396%3A5556"
                rel="noreferrer"
                target="_blank"
              >
                view design
              </a>
            </div>
          </div>
        </div>


        <div className="other-projects">
          <div className="project-cards">
            <img src={RELIAERP} alt="" className="card" />
            <div className="project-name">Relia ERP</div>
            <div className="project-description">
              Relia ERP is an Enterprise Resource Planning (ERP) 
              System that was designed to help the organization carryout and keep track 
              of all project information, financial records, and other managerial activities.
            </div>

            <div className="prototype">
              <a
                href="https://www.figma.com/file/SHi4N9kpOGwfB2Ly7j9zKD/Relia-Energy-Projects?type=design&node-id=18%3A5&mode=design&t=o7jb3DhPQSnorgmn-1"
                rel="noreferrer"
                target="_blank"
              >
                view design
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
