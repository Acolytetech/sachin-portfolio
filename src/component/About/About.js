import React from 'react';
import cssabout from './About.module.css';
import aboutPic from '../../img/sachin profile pic.png'
import { FaCheck } from "react-icons/fa";
const About = () => {
    return (
        <section className={cssabout.home_intro} id="about">
            <div className={cssabout.container}>
                <div className={cssabout.About_flex}>
                    <div className={cssabout.about_col_lg_5}>
                        <img src={aboutPic} className={cssabout.img_fluid} alt="About Us" />
                    </div>
                    <div className={cssabout.about_col_lg_6}>
                        <div className={cssabout.aboutText}>
                            <h6>About me</h6>
                            <h2>I' am Sachin lawaniya
                                <h5>Front-End Devloper (React js)</h5>
                            </h2>
                            <h5 className={cssabout.pt - 2}>
                            "Frontend developer passionate about designing and building user-centric, visually stunning websites. Skilled in the MERN stack, I create responsive, high-performance web applications that bring ideas to life."</h5>                        </div>
                        <div className={` ${cssabout.about_left_flex} ${cssabout.pt - 4}`}>
                            {/* <div className={` ${cssabout.col_12} ${cssabout.about_left_col_md_6} ${cssabout.block}`}>
                                <div className={cssabout.about_right}>
                                    <div className={cssabout.about_left_right}>
                                        <h1 className={cssabout.display_2}>25 </h1>
                                        <h5 className={cssabout.about_display_right}>YEARS OF<br /> EXPERIENCE</h5>
                                    </div>
                                </div>
                            </div> */}
                            <div className={` ${cssabout.col_12} ${cssabout.about_left_col_md_6} ${cssabout.block}`}>
                                <div className={cssabout.about_left}>
                                    <ul>
                                        <li><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} />Expert in crafting responsive, intuitive designs.</li>
                                        {/* <li><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} /> Proficient in HTML, CSS, JavaScript, React.js.</li> */}
                                        <li><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} />Focused on user-centric, visually appealing interfaces.</li>
                                        <li><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} />Strategic thinker for technical challenges.</li>
                                        {/* <li className={cssabout.mb_0}><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} /> Turning concepts into functional realities.</li> */}
                                        {/* <li className={cssabout.mb_0}><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} /> Creating web solutions that inspire and engage.</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
