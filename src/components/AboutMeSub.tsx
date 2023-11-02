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
