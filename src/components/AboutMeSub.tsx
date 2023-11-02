import React, { Component } from "react";

type Props = {};

type State = {};

export default class AboutMeSub extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="to-flex to-align sub-about to-switch"
      >
        <div className="to-about-with">
          <div className="greeting-sub-name text-effect">Who am i?</div>
          <div className="about-sub-text">
            {" "}
            This is <span className="spies">Ercknard Guren</span>, versatile
            creative professional with a passion for web designing, web
            development, and graphic design. With a keen eye for aesthetics and
            a knack for turning ideas into stunning digital experiences, I bring
            innovation and flair to every project I undertake.
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="main-avatar"
        >
          <div className="main-head-profile-sub" />
        </div>
      </div>
    );
  }
}
