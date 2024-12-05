import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import anita from '../../img/anita.png';
// import vaj from '';
import anil from '../../img/anil.png';
import vikkarm from '../../img/vikkarm.png';
import stylecss from './Testimonialslider.module.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Testimonialslider() {
  const slides = [
    {
      image: "https://vajraveltraders.com/static/media/owner.7fd5ff9bde1e51898539.jpeg",
      content: "Vajravel Traders innovative solutions have transformed the way we manage our cattle. Their technology has significantly improved our efficiency and animal health. Highly recommend them to any farm looking to modernize!",
      clientName: 'Dinesh',
      companyName: 'vajravel',
    },
    {
      image: 'data:image/webp;base64,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',
      content: "Since partnering with Paruit, we've seen a noticeable improvement in cattle health and farm productivity. Their support team is always ready to assist, making our experience seamless and rewarding.",
      clientName: 'Subash Kumar',
      companyName: 'Dharamdev medical foundation NGO',
    },
    {
      image: 'https://www.sloanevirtualhospital.com/static/media/ceo.78cca4d378a3c93d8c63.jpeg',
      content: "Thanks to Paruit, managing our cattle has never been easier. Their technology has streamlined our operations and improved our animals' well-being. I highly recommend them to any farmer.",
      clientName: 'Mr. Faisal Usman',
      companyName: 'Sloane Virtual Hospital',

    },
    {
      image: anil,
      content: "Paruit’s solutions have made cattle management easier and more effective for our team. Their expertise in the field is unmatched, and the results speak for themselves. Truly a game-changer!",
      clientName: 'Anil Sharma',
      companyName: 'Paruit Trading',
    },
  ];

  return (
    <>
      <div className={stylecss.testimonial}>
        <h6>TESTIMONIALS</h6>
        <h2>What Our Clients Say!</h2>
        <h5>We are proud to partner with farmers and agricultural businesses who trust us.</h5>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${stylecss.swiper_container}`}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 1.9,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-button-next', // Swiper's default class
          prevEl: '.swiper-button-prev', // Swiper's default class
        }}
        pagination={{
          el: '.swiper-pagination', // Swiper's default class
          clickable: true,
          type: 'bullets',
        }}
      >
        {/* Pagination Dots */}
        <div className="swiper-pagination"></div>

        {/* Navigation Arrows */}
        <div className={`swiper-button-prev ${stylecss.swiper_button_prev}`}></div>
        <div className={`swiper-button-next ${stylecss.swiper_button_next}`}></div>

        {/* Slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={stylecss.swiper_slide}>
            <div className={stylecss.slide_content}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className={stylecss.slide_image} />
              <div className={stylecss.slide_content_text}>
                <p>{slide.content}</p>
                <h4>{slide.clientName}</h4>
                <h2>{slide.companyName}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={stylecss.fade}></div>
      </Swiper>
    </>
  );
}
