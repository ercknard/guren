"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import useLocalStorage from "use-local-storage";
import "@fontsource/ysabeau";
import "@fontsource/ysabeau/400.css";
import "@fontsource/ysabeau/400-italic.css";
import "@/styles/globals.css";
import "@/styles/App.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function AboutCoverflow() {
  const [theme, setTheme] = useLocalStorage("theme", "theme");

  const [particleColor, setParticleColor] = useLocalStorage(
    "particleColor",
    "particleColor"
  );

  const switchThemeYellow = () => {
    const newTheme = "yellow";
    setTheme(newTheme);
    const newColor = "#f0d056";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Pisces";
  };

  const switchThemeRed = () => {
    const newTheme = "red";
    setTheme(newTheme);
    const newColor = "#ff5e5a";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Aries";
  };

  const switchThemeBlood = () => {
    const newTheme = "blood";
    setTheme(newTheme);
    const newColor = "#f58231";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Taurus";
  };

  const switchThemeMagenta = () => {
    const newTheme = "magenta";
    setTheme(newTheme);
    const newColor = "#9b3a98";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Gemini";
  };

  const switchThemePurple = () => {
    const newTheme = "purple";
    setTheme(newTheme);
    const newColor = "#b075f8";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Cancer";
  };

  const switchThemeWhite = () => {
    const newTheme = "white";
    setTheme(newTheme);
    const newColor = "#ffffff";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Aquarius";
  };

  const switchThemeViolet = () => {
    const newTheme = "violet";
    setTheme(newTheme);
    const newColor = "#7b8ffc";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Leo";
  };

  const switchThemeBlue = () => {
    const newTheme = "blue";
    setTheme(newTheme);
    const newColor = "#4389ff";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Virgo";
  };

  const switchThemeNavy = () => {
    const newTheme = "navy";
    setTheme(newTheme);
    const newColor = "#0000e7";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Libra";
  };

  const switchThemeOcean = () => {
    const newTheme = "ocean";
    setTheme(newTheme);
    const newColor = "#5cc2e4";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Scorpio";
  };

  const switchThemeGreen = () => {
    const newTheme = "green";
    setTheme(newTheme);
    const newColor = "#6ef0bc";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Sagittarius";
  };

  const switchThemeEpic = () => {
    const newTheme = "epic";
    setTheme(newTheme);
    const newColor = "#bfef45";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Capricorn";
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  console.log({ theme });

  const themeColors = [
    switchThemeWhite,
    switchThemeYellow,
    switchThemeBlood,
    switchThemeRed,
    switchThemeMagenta,
    switchThemePurple,
    switchThemeViolet,
    switchThemeNavy,
    switchThemeBlue,
    switchThemeOcean,
    switchThemeGreen,
    switchThemeEpic,
  ];

  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const handleThemeChangeNext = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themeColors.length);
    themeColors[currentThemeIndex]();
  };

  const handleThemeChangePrev = () => {
    setCurrentThemeIndex((prevIndex) =>
      prevIndex === 0 ? themeColors.length - 3 : prevIndex - 1
    );

    themeColors[currentThemeIndex]();
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1200" className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        noSwiping={true}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: false }}
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
            src="/static/images/covers/web-1.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeWhite}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="yellow-about"
            src="/static/images/covers/web-2.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeYellow}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="blood-about"
            src="/static/images/covers/web-3.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeBlood}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="red-about"
            src="/static/images/covers/web-4.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeRed}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="magenta-about"
            src="/static/images/covers/web-5.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeMagenta}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="purple-about"
            src="/static/images/covers/web-6.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemePurple}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="violet-about"
            src="/static/images/covers/web-7.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeViolet}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="navy-about"
            src="/static/images/covers/web-8.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeNavy}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="blue-about"
            src="/static/images/covers/web-9.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeBlue}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="ocean-about"
            src="/static/images/covers/web-10.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeOcean}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="green-about"
            src="/static/images/covers/web-11.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeGreen}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="epic-about"
            src="/static/images/covers/web-12.webp"
            alt="slide_image"
            width={1325}
            height={851}
            // onClick={switchThemeEpic}
          />
        </SwiperSlide>

        <div className="slider-controler">
          {/* <div
            className="swiper-button-prev slider-arrow"
            onClick={handleThemeChangePrev}
          ></div> */}
          <div
            className="swiper-button-next slider-arrow"
            onClick={handleThemeChangeNext}
          ></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default AboutCoverflow;
