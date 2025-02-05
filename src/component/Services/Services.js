import cardgridcss from './Services.module.css';
import cardimg1 from '../../img/sachin project image/project 1 vajraveltraders.png'
import cardimg2 from '../../img/sachin project image/project 2 dharmdev medical foundation  wordpress.png'
import cardimg3 from '../../img/sachin project image/project 3 sloane virtual hospital react.png'
import cardimg4 from '../../img/sachin project image/project 4 paruit trading react.png'
import cardimg5 from '../../img/sachin project image/noblespgcollege-ac-in-2024-12-13-12_03_03.png'
import cardimg6 from '../../img/sachin project image/MY PORTFOLIO WEBSITE.png'
import cardimg7 from '../../img/sachin project image/green haven project.png'
import cardimg8 from '../../img/sachin project image/jd multi pro.png'


// import { useState } from 'react';
import React from 'react';




const Projects = () => {

  return (
    <>
      <div className={cardgridcss.container}>
        <div className={cardgridcss.header}>
          <h1>My Services</h1>
          <p>"Check out the services I provide to help you succeed."</p>
        </div>
        <div className={cardgridcss.services}>
          <div className={cardgridcss.servicecard}>
            <img
              src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?ga=GA1.1.612286445.1736071973&semt=ais_hybrid"
              alt="Frontend Development"
            />
            <div className={cardgridcss.cardbody}>
              <h5 className={cardgridcss.cardtitle}>Frontend Development (React)</h5>
            </div>
          </div>
          <div className={cardgridcss.servicecard}>
            <img
              src="https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093996.jpg?ga=GA1.1.612286445.1736071973&semt=ais_hybrid"
              alt="UI/UX Design"
            />
            <div className={cardgridcss.cardbody}>
              <h5 className={cardgridcss.cardtitle}>UI / UX Design <br /> (CANVA / FIGMA)</h5>
            </div>
          </div>
          <div className={cardgridcss.servicecard}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMvc9-So987jMVtvLA2gm22MvyhatfKBdcA&s"
              alt="Backend Development"
            />
            <div className={cardgridcss.cardbody}>
              <h5 className={cardgridcss.cardtitle}>Backend Development (NODE.JS/SANITY.IO)</h5>
            </div>
          </div>
        </div>
      </div>






      <div className={cardgridcss.main_card_container} id="projects">
        <div className={cardgridcss.heading_container}>
          <div className={cardgridcss.upper_line}></div>
          <p className={cardgridcss.sm_heading}>Ready to use websites.</p>
          <h3 className={cardgridcss.main_heading}>" Explore  <span>
            My Custom</span> Website Projects!"</h3>
          <p className={cardgridcss.headng_summary}>
            "This live project showcases unique designs and modern layouts, perfect for both multi-page and one-page websites."
          </p>

        </div>


        {/* /* ******************* card div container start */}
        <div className={cardgridcss.card_div_container}>
          {/* /* card 1 */}
          <div className={cardgridcss.card_div}>
            <div className={`${cardgridcss.screen} , ${cardgridcss.card_img}`}>

              <img className={cardgridcss.active_img} src={cardimg1} alt="placeholder" />
              <img className={cardgridcss.onhover_scroll_img} src={cardimg1} alt="placeholder" />
            </div>
            <div className={cardgridcss.card_content}>
              <h5>Project 1 (React js)</h5>
              <p>
                Vajravel Traders Private Limited
              </p>

            </div>
            <button
              className={cardgridcss.button_link}
              onClick={() => window.open("https://vajraveltraders.com", "_blank")}
            >
              View Project
            </button>
          </div>
          {/* /* card 2 */}
          <div className={cardgridcss.card_div}>
            <div className={`${cardgridcss.screen} , ${cardgridcss.card_img}`}>

              <img className={cardgridcss.active_img} src={cardimg2} alt="placeholder" />
              <img className={cardgridcss.onhover_scroll_img} src={cardimg2} alt="placeholder" />
            </div>
            <div className={cardgridcss.card_content}>
              <h5>Project 2 (wordpress)</h5>
              <p>

                Dharamdev Medical Foundation</p>
            </div>

            <button
              className={cardgridcss.button_link}
              onClick={() => window.open("https://dharamdevmedical.com/", "_blank")}
            >
              View Project
            </button>
          </div>
          {/* /* card 3 */}
          <div className={cardgridcss.card_div}>
            <div className={`${cardgridcss.screen} , ${cardgridcss.card_img}`}>

              <img className={cardgridcss.active_img} src={cardimg3} alt="placeholder" />
              <img className={cardgridcss.onhover_scroll_img} src={cardimg3} alt="placeholder" />
            </div>
            <div className={cardgridcss.card_content}>
              <h5>Project 3 (React js)</h5>
              <p>
                Sloane Virtual Hospital <br /></p>
            </div>


            <button
              className={cardgridcss.button_link}
              onClick={() => window.open("https://www.sloanevirtualhospital.com/", "_blank")}
            >
              View Project
            </button>
          </div>
          {/* card 4 */}
          <div className={cardgridcss.card_div}>
            <div className={`${cardgridcss.screen} , ${cardgridcss.card_img}`}>

              <img className={cardgridcss.active_img} src={cardimg4} alt="placeholder" />
              <img className={cardgridcss.onhover_scroll_img} src={cardimg4} alt="placeholder" />
            </div>
            <div className={cardgridcss.card_content}>
              <h5>Project 4 (React js)</h5>
              <p>

                PARUIT TRADING PRIVATE LIMITED</p>
            </div>

            <button
              className={cardgridcss.button_link}
              onClick={() => window.open("https://paruittrading.com/", "_blank")}
            >
              View Project
            </button>
          </div>
          {/* /* card 5 */}
          <div className={cardgridcss.card_div}>
            <div className={`${cardgridcss.screen} , ${cardgridcss.card_img}`}>

              <img className={cardgridcss.active_img} src={cardimg5} alt="placeholder" />
              <img className={cardgridcss.onhover_scroll_img} src={cardimg5} alt="placeholder" />
            </div>
            <div className={cardgridcss.card_content}>
              <h5>Project 5 (HTML,CSS,JS,BOOTSTRAP)</h5>
              <p>

                NOBLES PG COLLEGE ALWAR</p>
            </div>

            <button
              className={cardgridcss.button_link}
              onClick={() => window.open("https://www.noblespgcollege.ac.in/", "_blank")}
            >
              View Project
            </button>
          </div>
          {/* /* card 6*/}
          <div className={cardgridcss.card_div}>
            <div className={`${cardgridcss.screen} , ${cardgridcss.card_img}`}>

              <img className={cardgridcss.active_img} src={cardimg6} alt="placeholder" />
              <img className={cardgridcss.onhover_scroll_img} src={cardimg6} alt="placeholder" />
            </div>
            <div className={cardgridcss.card_content}>
              <h5>Project 6 (React js)</h5>
              <p>

                MY PORTFOLIO WEBSITE</p>
            </div>

            <button
              className={cardgridcss.button_link}
              onClick={() => window.open("https://sachin-portfolio-silk.vercel.app/", "_blank")}
            >
              View Project
            </button>
          </div>
          {/* /* card 7 */}
          <div className={cardgridcss.card_div}>
            <div className={`${cardgridcss.screen} , ${cardgridcss.card_img}`}>
              <img className={cardgridcss.active_img} src={cardimg7} alt="placeholder" />
              <img className={cardgridcss.onhover_scroll_img} src={cardimg7} alt="placeholder" />

            </div>
            <div className={cardgridcss.card_content}>
              <h5>Project 7  (React-js and Sanity)</h5>
              <p>Green Haven (E-Commerce)</p>

            </div>
            <button
              className={cardgridcss.button_link}
              onClick={() => window.open("https://greenhaven.eco", "_blank")}>View Project</button>

          </div>
          {/* /* card 8 */}  <div className={cardgridcss.card_div}>
            <div className={`${cardgridcss.screen} , ${cardgridcss.card_img}`}>
              <img className={cardgridcss.active_img} src={cardimg8} alt="placeholder" />
              <img className={cardgridcss.onhover_scroll_img} src={cardimg8} alt="placeholder" />

            </div>
            <div className={cardgridcss.card_content}>
              <h5>Project 7 (Wix platform)</h5>
              <p>JD Multi Pro (E-Commerce)</p>

            </div>
            <button
              className={cardgridcss.button_link}
              onClick={() => window.open("https://www.jdmultipro.com", "_blank")}>View Project</button>

          </div>




        </div>




      </div>
    </>
  );
};

export default Projects;