import React, { useState, useRef } from 'react';
import { BannerImg1, BannerImg2, BannerImg3 } from '../../img';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

// Import CSS Module
import styles from './Home.module.css';

const images = [
    {
        src: BannerImg1,
        heading:"Elegant Code, Stunning Design",
        text: "We Offer high-quality cattle feed ingredients"
    },
    {
        src: BannerImg2,
        heading: "Bringing Designs to Life with Code",
        text: "Join us in revolutionizing the cattle feed industry"
    },
    {
        src: BannerImg3,
        heading: "Building Fast, Beautiful, and Responsive Web Solutions",
        text: "Fresh, eco-friendly, and efficient solutions that drive growth for all."
    }
];

const Home = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const headingRefs = useRef([]);

    const triggerAnimation = (index) => {
        const heading = headingRefs.current[index];
        if (heading) {
            heading.classList.remove(styles.animate);
            void heading.offsetWidth;  // Trigger reflow
            heading.classList.add(styles.animate);
        }
    };
  
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <>
          <div className={styles.heroSection} id='home'>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper2}
                loop={true}
            >
                <SwiperSlide>
                    <img src={BannerImg1} alt="Thumbnail 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={BannerImg2} alt="Thumbnail 6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={BannerImg3} alt="Thumbnail 7" />
                </SwiperSlide>
            </Swiper>

            {/* Main Swiper */}
            <Swiper
                modules={[FreeMode, Autoplay, Navigation, Pagination, Scrollbar, A11y, Thumbs]}
                spaceBetween={0}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => triggerAnimation(swiper.activeIndex)}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className={styles.sliderArea}
            >
                {images.map((image, index) => (
                    <SwiperSlide className={styles.item} key={index}>
                        <div className={styles.imageContainer}>
                            <img src={image.src} alt={`Slide ${index + 1}`} />
                        </div>
                        <div className={styles.carouselText} ref={(el) => headingRefs.current[index] = el}>
                            <h1>{image.heading}</h1>
                            <p>{image.text}</p>
                            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View projects</button>
                        </div>
                    </SwiperSlide>
                ))}
                <div className={styles.autoplayProgress} slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
          </div>
        </>
    );
};

export default Home;
