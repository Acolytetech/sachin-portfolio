import React, { useState, useEffect } from 'react';
import styleportfolio from './Portfolio.module.css';
import { motion } from "framer-motion";
import html from '../../img/skills images/html.png';
import css from '../../img/skills images/css-file-format-with-brackets.png';
import javascript from '../../img/skills images/js.png';
import reactjs from '../../img/skills images/react.png';
import nodejs from '../../img/skills images/nodejs.png';
import mongodb from '../../img/skills images/mongo db.jpg';
import wordpress from '../../img/skills images/wordpress.png';
import wixstudio from '../../img/skills images/wix.png';
import figma from '../../img/skills images/figma.png';
import canva from '../../img/skills images/canva-logo.png';


import 'animate.css';
// import { a } from '@react-spring/web';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [animate, setAnimate] = useState(false); // New state to trigger animation

  // Portfolio items data
  const portfolioItems = [
    { id: 1, category: 'category1', title: 'Project 1', description: '', img: html },
    { id: 2, category: 'category2', title: 'Project 2', description: '', img: css },
    { id: 3, category: 'category3', title: 'Project 3', description: ' ', img: javascript },
    { id: 4, category: 'category4', title: 'Project 4', description: '', img: reactjs },
    { id: 5, category: 'category5', title: 'Project 5', description: ' ', img: nodejs },
    { id: 6, category: 'category6', title: 'Project 6', description: 'mongo-db', img: mongodb },
    { id: 7, category: 'category7', title: 'Project 7', description: '', img: wordpress },
    { id: 8, category: 'category8', title: 'Project 8', description: '', img: wixstudio },
    { id: 9, category: 'category9', title: 'Project 9', description: 'figma', img: figma },
    { id: 10, category: 'category10', title: 'Project 10', description: '', img: canva },

    // { id: 7, category: 'category1', title: 'Project 7', description: 'dorb', img: dorb2 },
    // { id: 8, category: 'category2', title: 'Project 8', description: 'domc', img: domc2 },
    // { id: 9, category: 'category3', title: 'Project 9', description: 'korma', img: korma2 },
    // { id: 10, category: 'category4', title: 'Project 10', description: 'rice', img: rice2 },
    // { id: 11, category: 'category5', title: 'Project 11', description: 'MAIZE', img: maze2 },
    // { id: 12, category: 'category6', title: 'Project 12', description: 'MOLASSES', img: molas1 },

    // { id: 13, category: 'category1', title: 'Project 13', description: 'dorb', img: dorb3 },
    // { id: 14, category: 'category2', title: 'Project 14', description: 'domc', img: domc3 },
    // { id: 15, category: 'category3', title: 'Project 15', description: 'korma', img: korma3 },
    // { id: 16, category: 'category4', title: 'Project 16', description: 'rice', img: rice3 },
    // { id: 17, category: 'category5', title: 'Project 17', description: 'MAIZE', img: maze3 },
    // { id: 18, category: 'category6', title: 'Project 18', description: 'MOLASSES', img: molas2 },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Filtered portfolio items
  const filteredItems = portfolioItems.filter((item) =>
    activeFilter === '*' ? true : item.category === activeFilter
  );

  // Handle filter click and trigger animation
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setAnimate(true); // Trigger animation on filter change
  };

  // Sort portfolio items based on title in ascending order
  // const sortedItems = [...filteredItems].sort((a, b) => a.title.localeCompare(b.title));

  // Limit the items to 6 when the "All" filter is selected
  // const displayedItems = activeFilter === '*' ? filteredItems.slice(0, 6) : filteredItems;
  const displayedItems = filteredItems;  // Show all items when "All" filter is selected


  // Remove animation class after it completes (optional)
  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setAnimate(false), 5000); // Reset animation state after 1 second
      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [animate]);

  return (
    <section id="portfolio" className={styleportfolio.portfolio}>
      <div className={styleportfolio.container_fluid}>
        <div className={styleportfolio.row}>
          <div className={styleportfolio.col_12}>
            <div className={`herotext ${styleportfolio.herotext}`}>
              <h6>My Skills</h6>
              <h2>Here are my updated skills</h2>
              {/* <h5 className={styleportfolio.pt-2}>
              Now manage your farm with greater efficiency
              </h5> */}
            </div>
          </div>
        </div>

        <div className={styleportfolio.Portfolio_bottom}>
          <div className={styleportfolio.Portfolio_bottom_col_12}>
            <div id="options" className={styleportfolio.options}>
              {/* <ul id="filters" className={`${styleportfolio.option_set}`} data-option-key="filter">
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === '*' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('*')}
                  >
                    All Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category2' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category2')}
                  >
                    Domc
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category3' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category3')}
                  >
                    KORMA
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category1' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category1')}
                  >
                    dorb
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category4' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category4')}
                  >
                    RICE BRAN
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category5' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category5')}
                  >
                    MAIZE
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category6' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category6')}
                  >
                    MOLASSES
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <motion.ul
          className={styleportfolio.container}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className={`${styleportfolio.portfolio_bottom_container}`}>
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className={`Portfolio-bottom-col-12 portfolio-item ${item.category} ${animate ? 'animate__animated animate__backInRight' : ''}`}
                style={{ animationDuration: '0.1s', animationTimingFunction: 'ease-in-out' }} // Smooth animation
              >
                <div className={styleportfolio.make4columns}  data-aos="flip-left" data-aos-duration="2000">
                  <div className={styleportfolio.picture}>
                    <img src={item.img} alt={item.title} className={styleportfolio.img_fluid}  />
                  </div>
                  <div className={styleportfolio.text_overlay}>
                    {/* <h4>{item.title}</h4> */}
                    {<p>{item.description}</p>}




                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.ul>
      </div>
    </section>
  );
};

export default Portfolio;
