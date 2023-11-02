import React, { Component } from "react";
import TypingAnimation from "@/components/AboutTextAnimation";
import Link from "next/link";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import Image from "next/image";
import AboutCoverflow from "@/components/AboutCoverflow";
import PageSigns from "@/components/PageSigns";

type Props = {};

type State = {};

export default class AboutMeSubTer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="to-flex to-align main-about">
        <div className="to-about-with">
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
        <div className="main-avatar">
          <div
            data-aos="fade"
            data-aos-duration="1500"
            className="main-head-profile-sub-ter"
          />
        </div>
      </div>
    );
  }
}
