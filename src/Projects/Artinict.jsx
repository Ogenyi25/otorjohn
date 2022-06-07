import React from 'react';
import { Link } from 'react-router-dom';

const Artinict = () => {
    return (
        <div className="choopies-section">
            <div className="details">
                <div className="header">
                    <div className="contents">
                        <div className="title">Artinict Official Website</div>
                        <div className="caption1">
                            Advanced, and Innovative IT Solutions.
                        </div>
                        <div className="description">
                            This is the official website for Artinict.
                        </div>
                    </div>
                </div>

                <div className="body-content">
                    <div className="body-header">overview</div>
                    <div className="task">
                        <div className="head">Project Brief</div>
                        <div className="body">
                        This is the official website for Artinict - A tech base organization that provides Advanced and Innovative IT Solutions.
                        The website showcases the Home, About us, Services, Portfolio and Contact page.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">The Task</div>
                        <div className="body">
                            Design a website for our organization. It should showcase a home page, an about page that gives 
                            information about our organization, what we do, our mission and vision as well as our core values.
                            It should also showcase a service section that will list out all the services we provide, a portfolio 
                            section to display works we have done and also a contact page that will give information as to how our 
                            clients can reach out to us.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">The Team</div>
                        <div className="body">
                            I worked on this project as the ui-ux designer.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">Responsibility</div>
                        <div className="body">
                            As the ui-ux designer, I came up with the brand style and a High fidelity design for the website, desktop and mobile view.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">Inspiration + Process</div>
                        <div className="body">
                            I was inspired to use a dark theme for this website by clean, colorful website designs that
                            utilized illustrated cards to express their software elements. I
                            took functionalities from clean sample mobile/web apps and
                            converted them into new clean cards and elements. I made use of
                            shadow for a clean look and effect. This was applied across all
                            screens of the entire website. I used vector images from unsplash
                        </div>
                    </div>
                    <div className="full-project">
                        <Link
                            to={{
                                pathname:
                                    "https://www.figma.com/file/H2uUfvq8r1wur9PRcofwxa/Artinict-Nigeria-Limited?node-id=2%3A3",
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
    )
}

export default Artinict;