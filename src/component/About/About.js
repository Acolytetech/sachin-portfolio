import React from 'react';
import cssabout from './About.module.css';
import aboutPic from '../../img/sachin fomal.jpg'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import resume from'../../img/resume.png'
const About = () => {
    return (
        <div className={cssabout.home_intro} id="about">
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
                                "Frontend developer passionate about designing and building user-centric, visually stunning websites. Skilled in the MERN stack, I create responsive, high-performance web applications that bring ideas to life."</h5>
                            <ul className={cssabout.socialList}>
                                <li><Link to="https://www.facebook.com/sachinlawaniya.s.5/"><i className={`fa-brands fa-facebook-f ${cssabout.facebbok}`}></i></Link></li>
                                <li><Link to="https://www.instagram.com/sachinlawaniyadev/"><i className={`fa-brands fa-instagram ${cssabout.instagram}`}></i></Link></li>
                                <li><Link href=""><i className={`fa-brands fa-pinterest-p ${cssabout.pinterest}`}></i></Link></li>
                                <li><Link href=""><i className={`fa-solid fa-envelope ${cssabout.envelope}`}></i></Link></li>
                                <li><Link href=""><i className={`fa-brands fa-whatsapp ${cssabout.whatsapp}`}></i></Link></li>
                            </ul>
                        </div>
                        <div className={` ${cssabout.about_left_flex} ${cssabout.pt - 4}`}>

                            <div className={` ${cssabout.col_12} ${cssabout.about_left_col_md_6} ${cssabout.block}`}>
                                <div className={cssabout.about_left}>
                                    {/* <ul>
                                        <li><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} />Expert in crafting responsive, intuitive designs.</li>
                                        <li><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} /> Proficient in HTML, CSS, JavaScript, React.js.</li>
                                        <li><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} />Focused on user-centric, visually appealing interfaces.</li>
                                        <li><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} />Strategic thinker for technical challenges.</li>
                                        <li className={cssabout.mb_0}><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} /> Turning concepts into functional realities.</li>
                                        <li className={cssabout.mb_0}><FaCheck style={{ color: '#0ed7e5', marginRight: '10px' }} /> Creating web solutions that inspire and engage.</li>
                                    </ul> */}
                                    <button type="button" style={{ padding: '10px 20px', borderRadius: '20px' }}><Link to={resume} target='blank'>VIEW RESUME</Link></button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
