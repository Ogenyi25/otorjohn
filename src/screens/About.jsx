import React from "react";
import HERO from "../asset/hero.svg";
import Circle from "../asset/circle.svg";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-title">about me</div>
      <div className="about-info">
        <div className="image">
          <img src={HERO} alt="" className="pics" />
        </div>
        <div className="text">
          <div className="content">
            I'm Otor John Stephen, a UI-UX designer who combines research, rapid
            prototyping, interaction and visual design to transform complex
            problems into elegant solutions. Designing for two years in young,
            rapidly growing startups taught me how to balance business goals and
            engineering constraints as I unrelentingly advocated for the users.
            I'm passionate about building and designing software products across
            financial institute, productivity, health, education,
            E-Commerce, and lots more.
            I have a well-rounded skill set in I.T with proficiencies in Figma, HTML,
            CSS, JavaScript and React frame work. <br />
            <strong>I love to sing and play video games</strong>
          </div>
        </div>
      </div>

      {/* education section */}
      <div className="education-section">
        <div className="details">
          <div className="title">Education</div>
          <div className="list">
            <div className="school">University of Abuja</div>
            <div className="programme">
              Bachelor of Science in Biological Sciences. Focused in Biology
            </div>
            <div className="year">
              <img src={Circle} alt="circle" />
              2015
            </div>
          </div>
        </div>

        {/* Courses & Certifications section */}
        <div className="details">
          <div className="title">Courses & Certifications</div>
          <div className="list">
            <div className="school">Coursera: Google UX Course</div>
            <div className="programme">
              Foundations of User Experience (UX) Design
            </div>
            <div className="year">
              <img src={Circle} alt="circle" />
              2021
            </div>

            <div className="programme">
              Start the UX Design Process: Empathize, Define, and Ideate
            </div>
            <div className="year">
              <img src={Circle} alt="circle" />
              2021
            </div>

            <div className="school">Interaction Design Foundation</div>
            <div className="programme">
              Visual Design: The Ultimate Guide
            </div>
            <div className="year">
              <img src={Circle} alt="circle" />
              2022
            </div>
            <div className="programme">
              UI Design Pattern for Successful Software
            </div>
            <div className="year">
              <img src={Circle} alt="circle" />
              2021
            </div>
            <div className="programme">
              User Experience: The Beginners Guide
            </div>
            <div className="year">
              <img src={Circle} alt="circle" />
              2021
            </div>
            <div className="programme">Design Thinking: The Ultimate Guide</div>
            <div className="year">
              <img src={Circle} alt="circle" />
              2021
            </div>
          </div>
        </div>

        {/* work experience section */}
        <div className="details">
          <div className="title">Work Experience</div>
          <div className="list">
            <div className="school">Omniswift Nigeria Limited</div>
            <div className="programme"> Product Designer.</div>
            <div className="year">
              <img src={Circle} alt="circle" />
              April 2021 - Present
            </div>
            <div className="school">Akriveia Infotech (Contract)</div>
            <div className="programme">UI-UX Designer</div>
            <div className="year">
              <img src={Circle} alt="circle" />
              December 2021 - May 2022
            </div>
          </div>
        </div>

      </div>

      {/* skills section */}
      <div className="skills-section">
        <div className="details">
          <div className="title">Skills</div>
          <div className="skills-type">
            <div className="types first">
              <div className="head">Industry Skills</div>
              <div className="list">
                <div className="skills">UX Research</div>
                <div className="skills">product design</div>
                <div className="skills">Wireframing</div>
                <div className="skills">Prototyping</div>
                <div className="skills">design thinking</div>
                <div className="skills">interactive design</div>
                <div className="skills">user flows</div>
                <div className="skills">visual communication</div>
              </div>
            </div>

            <div className="types">
              <div className="head">Soft Skills</div>
              <div className="list">
                <div className="skills">Empathy</div>
                <div className="skills">Interpersonal Skills</div>
                <div className="skills">Critical Thinking</div>
                <div className="skills">Curiosity</div>
                <div className="skills">Collaborative Skills</div>
                <div className="skills">Communication Skills</div>
              </div>
            </div>
          </div>

          <div className="skills-type">
            <div className="types">
              <div className="head">Software Skills</div>
              <div className="list">
                <div className="skills">FIGMA</div>
                <div className="skills">FigJam</div>
                <div className="skills">Miro</div>
                <div className="skills">Zeplin</div>
                <div className="skills">Atlassian Jira</div>
                <div className="skills">Microsoft Teams</div>
                <div className="skills">Slack</div>
                <div className="skills">Lunacy</div>
              </div>
            </div>
            <div className="types">
              <div className="head">Engineering Skills</div>
              <div className="list">
                <div className="skills">HTML/CSS</div>
                <div className="skills">Javascript</div>
                <div className="skills">React</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
