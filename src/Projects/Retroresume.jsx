import React from 'react';
import { Link } from "react-router-dom";

const Retroresume = () => {
    return (
        <div className="retroresume-section">
            <div className="details">
                <div className="header">
                    <div className="contents">
                        <div className="title">Retro Resume Website / Webapp</div>
                        <div className="caption1">
                            Building the perfect resume to land you that dream job.
                        </div>
                        <div className="description">
                            Retroresume is a resume builder application to help users crack the code for writing perfect resumes.
                            Plus, it gives you a state-of-the art design to create a beautiful, professional job application resume.
                            Whether this is your first job or you’re looking for a promotion, it will help you stand above the rest
                            by highlighting your personality and achievements..
                        </div>
                    </div>
                </div>

                <div className="body-content">
                    <div className="body-header">overview</div>
                    <div className="task">
                        <div className="head">Project Brief</div>
                        <div className="body">
                            This is a resume builder for users, job seekers, and everyone in need of a professional resume.
                            Retroresume is meant to show case different resume category for users to choose from.
                            It provides option for users to purchase a template and edit it's contents to suit their own requirement.
                            Users can download edited resume in both word docx and pdf formats.
                            The product entails a website, a webapp and, a mobile app as well.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">The Task</div>
                        <div className="body">
                            Build a user-friendly website, webapp and mobile app for a resume builder organization.
                            It should showcase the about us, resume categories, contacts and user dashboard section.
                            A login and sign up feature was included as well.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">The Team</div>
                        <div className="body">
                            I worked on this project as the ui-ux designer along side the engineers who built the product.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">Responsibility</div>
                        <div className="body">
                            As the ui-ux designer, I came up with the brand style and a High fidelity design for the website,
                            user dashboard and mobile application.
                        </div>
                    </div>
                    <div className="task">
                        <div className="head">Inspiration + Process</div>
                        <div className="body">
                            I was inspired by clean, colorful website designs that
                            utilized illustrated cards to express their software elements. I
                            took functionalities from clean sample mobile/web apps and
                            converted them into new clean cards and elements. I made use of
                            shadow for a clean look and effect. This was applied across all
                            screens of the entire website.
                        </div>
                    </div>
                    <div className="full-project">
                        <Link
                            to={{
                                pathname:
                                    "https://www.figma.com/file/dKFNn900jw2RP4aMkE0Rmm/RetroResume?node-id=1%3A3",
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

export default Retroresume;