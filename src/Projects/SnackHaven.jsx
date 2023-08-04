import React from "react";
import { Link } from "react-router-dom";
import HEADER_IMAGE from "../asset/project/snackhaven header.png";
import BACK_ARROW from "../asset/backarrow.svg";
import DESIGNPROCESS_IMAGE from "../asset/project/designprocess.png"
import PERSONA_IMAGE from "../asset/project/snackhaven persona.png"
import COLOR_IMAGE from "../asset/project/color.png"
import FONT_IMAGE from "../asset/project/typography.png"



const SnackHaven = () => {
    return (
        <div className="amazintrips-section">
            <div className="details">
                <div className="goback">
                    <Link className="back" to="/projects">
                        {" "}
                        <img src={BACK_ARROW} alt="back-arrow" className="arrow" />
                    </Link>
                </div>
                <div className="header">
                    <img src={HEADER_IMAGE} alt="" className="header-image" />
                </div>

                <div className="body-content">
                    <div className="body-header">overview</div>
                    <div className="task">
                        <div className="head">Project Brief</div>
                        <div className="body">
                            SnackHaven is a mobile responsive e-commerce store for snacks.
                            It's meant to help users make order of their favorite snacks,
                            and try out new snack without leaving the comfort of their homes.
                            It offers seemless multiple payment means so users that have to encounter
                            difficulties in making payments.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">The Task</div>
                        <div className="body">
                            The task was to design a mobile responsive e-commerce
                            website for a snack store that will enable users make purchase
                            of their favorite snack and check out other snack options.
                            Users should be able to filter through different snack categories
                            based on price range, ratings, and other filter options.

                        </div>
                    </div>
                    <div className="task">
                        <div className="head">The Team</div>
                        <div className="body">
                            I worked on this project as the ui-ux designer alongside a web developer.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">Responsibility</div>
                        <div className="body">
                            As the ui-ux designer, I came up with the brand style and a High
                            fidelity design for the website - desktop and mobile view.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head process">Design Process</div>
                        <div className="body">
                            <div className="design">
                                <div className="designprocess">
                                    <img src={DESIGNPROCESS_IMAGE} alt="" className="designprocess-image" />
                                </div>
                                <div className="persona">
                                    I was able to utilize the 5 design process in the actualization of this project.
                                    After reviewing the potential users, I was able to draw out a user persona
                                    that highlights the users goals and frustrations.
                                </div>
                                <img src={PERSONA_IMAGE} alt="" className="persona-image" />

                            </div>
                            <div className="head process">Inspiration</div>
                            I was inspired by clean, colorful website designs that utilized
                            illustrated cards to express their software elements. I took
                            functionalities from clean sample websites and converted
                            them into new clean cards and elements. I made use of shadow for a
                            clean look and effect. This was applied across all screens of the
                            entire website. I ran a competitive analysis of other similar
                            products, checked out features that they lacked and
                            leveraged on them to come up with a unique, user friendly, mobile responsive design.

                        </div>
                        <div className="head process">Mini-Style Guide</div>
                        <div className="style">
                            <img src={COLOR_IMAGE} alt="" className="style-image" />
                            <img src={FONT_IMAGE} alt="" className="style-image" />
                        </div>
                    </div>
                    <div className="full-project">
                        <a
                            href="https://www.figma.com/file/IcZpEm04CUH439fZuTNEHS/E-Commerce-Website?type=design&node-id=7%3A479&mode=design&t=2VXHf7ayNCjueC8r-1"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <div className="button">View Full Project</div>
                        </a>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default SnackHaven;