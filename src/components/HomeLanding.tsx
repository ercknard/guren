import React, { Component } from "react";
import HomeTypingAnimation from "./HomeTextAnimation";

type Props = {};

type State = {};

export default class Home extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div className="to-animate-home">
          <div className="landing-for-down" />
          <div
            data-aos="fade-down"
            data-aos-duration="1200"
            className="text-motion icon-text to-hide"
          ></div>
          <div
            data-aos="fade-down"
            data-aos-duration="1200"
            className="main-title text-effect"
          >
            {" "}
            <HomeTypingAnimation />{" "}
          </div>
          <div className="sub-title">
            {""}
            Ercknard web portfolio is a digital exhibit of my creative journey.
            Explore my projects, designs, and achievements all in one place.{" "}
          </div>
          <div className="text-motion zodiac-main">
            <span data-aos="fade-down" data-aos-duration="1200">
              ♒︎
            </span>
            <span data-aos="fade-down" data-aos-duration="1100">
              ♓︎
            </span>
            <span data-aos="fade-down" data-aos-duration="1000">
              ♈︎
            </span>
            <span data-aos="fade-down" data-aos-duration="900">
              ♉︎
            </span>
            <span data-aos="fade-down" data-aos-duration="800">
              ♊︎
            </span>
            <span data-aos="fade-down" data-aos-duration="700">
              ♋︎
            </span>
            <span data-aos="fade-down" data-aos-duration="700">
              ♌︎
            </span>
            <span data-aos="fade-down" data-aos-duration="800">
              ♍︎
            </span>
            <span data-aos="fade-down" data-aos-duration="900">
              ♎︎
            </span>
            <span data-aos="fade-down" data-aos-duration="1000">
              ♏︎
            </span>
            <span data-aos="fade-down" data-aos-duration="1100">
              ♐︎
            </span>
            <span data-aos="fade-down" data-aos-duration="1200">
              ♑︎
            </span>
          </div>
        </div>
      </>
    );
  }
}
