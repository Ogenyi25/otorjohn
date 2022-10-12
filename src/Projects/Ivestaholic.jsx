import React from 'react';
import HEADER from '../asset/project/investaholic/header.png'
import PROJECT_OVERVIEW from '../asset/project/investaholic/projectoverview.png'
import PROBLEM_STATEMENT from '../asset/project/investaholic/problemstatement.png'
import SOLUTION from '../asset/project/investaholic/solution.png'
import DESIGN_PROCESS from '../asset/project/investaholic/designprocess.png'
import USER_RESEARCH from '../asset/project/investaholic/userresearch.png'
import PERSONA from '../asset/project/investaholic/persona.png'
import USER_FLOW from '../asset/project/investaholic/userflow.png'
import LOW_FI from '../asset/project/investaholic/lowfi.png'
import HI_FI from '../asset/project/investaholic/hifi.png'
import STYLE_GUIDE from '../asset/project/investaholic/styleguide.png'
import FOOTER from '../asset/project/investaholic/footer.png'
import { Link } from 'react-router-dom';
import BACK_ARROW from '../asset/backarrow.svg'


const Investaholic = () => {
    return (
        <div className="investaholic-section">
            <div className="goback">
                <Link className="back" to= "/projects"> <img src={BACK_ARROW} alt="back-arrow" className="arrow" />
                </Link>
            </div>
            <div className="section top">
                <img src={HEADER} alt="" className="section-image" />
            </div>
            <div className="section footer">
                <img src={PROJECT_OVERVIEW} alt="" className="section-image" />
            </div>
            <div className="section">
                <img src={PROBLEM_STATEMENT} alt="" className="section-image" />
            </div>
            <div className="section">
                <img src={SOLUTION} alt="" className="section-image" />
            </div>
            <div className="section">
                <img src={DESIGN_PROCESS} alt="" className="section-image" />
            </div>
            <div className="section">
                <img src={USER_RESEARCH} alt="" className="section-image" />
            </div>
            <div className="section">
                <img src={PERSONA} alt="" className="section-image" />
            </div>
            <div className="section userflow">
                <img src={USER_FLOW} alt="" className="section-image" />
            </div>
            <div className="section">
                <img src={LOW_FI} alt="" className="section-image" />
            </div>
            <div className="section userflow">
                <img src={HI_FI} alt="" className="section-image" />
            </div>
            <div className="section">
                <img src={STYLE_GUIDE} alt="" className="section-image" />
            </div>
            <div className="section footer">
                <img src={FOOTER} alt="" className="section-image" />
            </div>
            {/* <div className="section-header">
                <div className="product-title">Investaholic</div>
                <div className="product-description">A stock investment mobile application</div>
                <img src={INVESTAHOLIC} alt="" className='banner-image' />
            </div>
            <div className="section-subheader">
                <div className="mini-details">
                    <div className="head">Project Type</div>
                    <div className="body">Individual project</div>
                </div>
                <div className="mini-details">
                    <div className="head">My Role</div>
                    <div className="body">UI/UX Designer</div>
                </div>
                <div className="mini-details">
                    <div className="head">Deliverables</div>
                    <div className="body">Mobile app mockups</div>
                </div>
                <div className="mini-details">
                    <div className="head">Tools</div>
                    <div className="body">Figma</div>
                    <div className="body">Figjam</div>
                </div>
                <div className="mini-details">
                    <div className="head">Duration</div>
                    <div className="body">4 weeks</div>
                </div>
            </div>

            <div className="section-body">
                <div className="body-title">background</div>
                <div className="body-contents">
                    <div className="content">
                        <div className="content-title">Challenge</div>
                        <div className="content-body">
                            Users (Stock Investors in Nigeria) find it really hard to invest in stocks using existing
                            stock investment apps due to information overload and complex presentation of information on the app.
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-title">Design Process</div>
                        <div className="content-body">
                            I adopted the design thinking process for this;
                            <ul>
                                <li>Empathize</li>
                                <li>Define</li>
                                <li>Ideate</li>
                                <li>Prototype, and</li>
                                <li>Test</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="body-title">research</div>
                <div className="body-contents">
                    <div className="content">
                        <div className="content-title">Empathize</div>
                        <div className="content-body">
                            For the empathize phase, i carried out a user interview with the use of a
                            survey form or questionniare to understand the user's problems and, or pain points.
                            After the interview was done, with the response, I was able to come up with a user persona.
                            <img src={PERSONA} alt="" className="persona-image" />
                            <img src={PERSONA2} alt="" className="persona-image" />
                        </div>
                    </div>


                    <div className="content">
                        <div className="content-title">Define</div>
                        <div className="content-body">
                            The problem statement was defined as in the image below.
                            <img src={DEFINE} alt="" className="define-image" />
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-title">Ideate</div>
                        <div className="content-body">
                            I had a brainstorm session, gathered insight from existing application that attempted to solve similar problems as my app.
                            With this knowledge i was able to come up with ideas for my app. A mobile app where -:
                            <ul>
                                <li>Graphs are represented with text</li>
                                <li>Users will have the option to fund their account / wallet via Bank transfer or Debit cards</li>
                                <li>Recent transaction history will be easily accessible</li>
                                <li>Plain and easy to understand english will be mostly used.</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="body-title">product structure</div>
                <div className="body-contents">
                    <div className="content">
                        <div className="content-title">User Task</div>
                        <div className="content-body">
                            The user main task was mapped out which is as seen below.
                            <img src={USER_TASK} alt="" className="define-image" />
                        </div>
                    </div>


                    <div className="content">
                        <div className="content-title">Information Architectural</div>
                        <div className="content-body">
                            After mapping out the user task, i went ahead and created the Information Architectural of the app.
                            <img src={USER_FLOW} alt="" className="userflow-image" />
                        </div>
                    </div>
                </div>


                <div className="body-title">design solutions</div>
                <div className="body-contents">
                    <div className="content">
                        <div className="content-title">Low Fidelity Wireframe</div>
                        <div className="content-body">
                            I went ahead to create the low fidelity wireframe of the application and tested it to ensure that it functions as expected.
                            <img src={LOW_FI} alt="" className="lowfi-image" />
                        </div>
                    </div>


                    <div className="content">
                        <div className="content-title">High Fidelity Wireframe</div>
                        <div className="content-body">
                            After completing the low fidelity wireframe, i tested to ensure that it functions as expected.
                            As soon as I was done with testing of the Low-Fi wireframes, i proceeded to creating the Hi-Fi wireframes.
                            <img src={HI_FI} alt="" className="lowfi-image" />
                            <img src={HI_FI2} alt="" className="lowfi-image" />
                        </div>
                    </div>


                    <div className="content">
                        <div className="content-title">Styles</div>
                        <div className="content-body">
                            <img src={STYLES} alt="" className="define-image" />
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-title">Link</div>
                        <div className="content-body">
                            <Link
                                to={{
                                    pathname:
                                        "https://www.figma.com/file/TXL7bRK4kAIH8kL988Jou3/Stock-Investment-Mobile-App-(Investaholic)?node-id=15%3A547",
                                }}
                                target="_blank"
                                className="link"
                            >
                                {" "}
                                Click to View Full Design.{" "}
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Investaholic;