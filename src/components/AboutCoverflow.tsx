import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function AboutCoverflow() {
  return (
    <div className="container">
      &quot;Thank you for visiting my WEB Portfolio. I&apos;m excited to hear
      from you and discuss how we can work together to bring your ideas to life.
      Got any inquries? Please don&apos;t hesitate to get in touch by filling
      out the form below.&quot;
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"

        // autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <Image
            className="white-about"
            src="/static/images/covers/web-1.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="yellow-about"
            src="/static/images/covers/web-2.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="blood-about"
            src="/static/images/covers/web-3.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="red-about"
            src="/static/images/covers/web-4.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="magenta-about"
            src="/static/images/covers/web-5.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="purple-about"
            src="/static/images/covers/web-6.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="violet-about"
            src="/static/images/covers/web-7.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="navy-about"
            src="/static/images/covers/web-8.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="blue-about"
            src="/static/images/covers/web-9.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="ocean-about"
            src="/static/images/covers/web-10.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="green-about"
            src="/static/images/covers/web-11.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="epic-about"
            src="/static/images/covers/web-12.jpeg"
            alt="slide_image"
            width={1325}
            height={851}
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default AboutCoverflow;
