import React, { Component } from "react";

type Props = {};

type State = {};

export default class AboutMeSubTer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="to-flex to-align main-about">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="to-about-with"
        >
          <div className="greeting-sub-name text-effect">What do I do?</div>
          <div className="about-sub-text">
            {" "}
            Every project is a canvas for my{" "}
            <span className="spies">creativity</span>, an opportunity to turn
            ordinary ideas into extraordinary digital experiences. My work is
            not just a reflection of my skills; it&apos;s a reflection of my
            dedication, my passion, and my commitment to excellence. Whether
            it&apos;s a small website, a complex web application, or a stunning
            graphic design piece, I approach each task with the same vigor and
            determination to exceed expectations.
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="main-avatar"
        >
          <div className="main-head-profile-sub-ter" />
        </div>
      </div>
    );
  }
}
