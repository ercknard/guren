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

type Props = {};

type State = {};

export default class AboutMe extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="to-flex to-align main-about">
        <div className="to-about-with">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="greeting-main-name"
          >
            ---HELLO
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="about-main-name text-effect"
          >
            I&apos;m ERCKNARD.
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="animated-text"
          >
            {" "}
            <TypingAnimation />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="about-sub-text"
          >
            {" "}
            In essence, I am <span className="spies">Ercknard Guren</span>, a
            digital craftsman who transforms visions into realities, making the
            web a more beautiful and functional place one project at a time.
          </div>
          <div
            data-aos="fade"
            data-aos-duration="3000"
            className="to-flex main-links"
          >
            <Link
              target="_blank"
              href="https://fb.com"
              rel="noopener noreferrer"
            >
              <div className="social-icons">
                <FacebookIcon className="to-color" />{" "}
                <span className="to-hide  social-links">Facebook</span>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com"
              rel="noopener noreferrer"
            >
              <div className="social-icons">
                <TwitterIcon className="to-color" />{" "}
                <span className="to-hide  social-links">Twitter</span>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://discord.com"
              rel="noopener noreferrer"
            >
              <div className="social-icons">
                <MarkEmailReadIcon className="to-color" />{" "}
                <span className="to-hide social-links">Discord</span>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://github.com"
              rel="noopener noreferrer"
            >
              <div className="social-icons">
                <GitHubIcon className="to-color" />{" "}
                <span className="to-hide  social-links">Github</span>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com"
              rel="noopener noreferrer"
            >
              <div className="social-icons">
                <LinkedInIcon className="to-color" />{" "}
                <span className="to-hide social-links">Linkedin</span>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://indeed.com"
              rel="noopener noreferrer"
            >
              <div className="social-icons">
                <DeviceHubIcon className="to-color" />{" "}
                <span className="to-hide social-links">Indeed</span>
              </div>
            </Link>
            <Link
              target="_blank"
              href="mailto:email@example.com"
              rel="noopener noreferrer"
            >
              <div className="social-icons">
                <AlternateEmailIcon className="to-color" />{" "}
                <span className="to-hide  social-links">Email</span>
              </div>
            </Link>
          </div>
          <div
            data-aos="fade"
            data-aos-duration="3000"
            className="to-flex teams-end-btn to-gap"
          >
            <Link
              target="_blank"
              href="https://cryptech.services/"
              rel="noopener noreferrer"
            >
              <div className="project-button">
                <OpenInNewIcon className="to-color send-icon" />{" "}
                <span> Cryptech site</span>
              </div>
            </Link>
            <Link href="/projects/cryptech-services" rel="noopener noreferrer">
              <div className="project-button">
                <FileDownloadIcon className="to-color send-icon" />{" "}
                <span> Download CV</span>
              </div>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="main-avatar"
        >
          <div className="main-head-profile shadowpic" />
        </div>
      </div>
    );
  }
}
