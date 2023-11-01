import React, { Component } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
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
import CryptechTeam from "@/components/CryptechTeam";

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | About</title>
        </Head>
        <Layout>
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big">
              <div className="content-pages">
                <div className="to-flex to-align main-about">
                  <div className="to-about-with">
                    <div className="greeting-main-name">---HELLO</div>
                    <div className="about-main-name text-effect">
                      I&apos;m ERCKNARD.
                    </div>
                    <div className="animated-text">
                      {" "}
                      <TypingAnimation />
                    </div>
                    <div className="about-sub-text">
                      {" "}
                      This is <span className="spies">Ercknard Guren</span>,
                      versatile creative professional with a passion for web
                      designing, web development, and graphic design. With a
                      keen eye for aesthetics and a knack for turning ideas into
                      stunning digital experiences, I bring innovation and flair
                      to every project I undertake.
                    </div>
                    <div
                      data-aos="fade"
                      data-aos-duration="3000"
                      className="to-flex socials"
                    >
                      <Link
                        target="_blank"
                        href="https://fb.com"
                        rel="noopener noreferrer"
                      >
                        <div className="social-icons">
                          <FacebookIcon className="to-color" />{" "}
                          <span className="to-hide  social-links">
                            Facebook
                          </span>
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
                    <div className="to-flex teams-end-btn to-gap">
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
                      <Link
                        href="/projects/cryptech-services"
                        rel="noopener noreferrer"
                      >
                        <div className="project-button">
                          <FileDownloadIcon className="to-color send-icon" />{" "}
                          <span> Download CV</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="main-avatar">
                    <div
                      data-aos="fade"
                      data-aos-duration="1500"
                      className="main-head-profile"
                    />
                  </div>
                </div>
                {/* <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  About me
                </div>
                <PageSigns />
                <div className="normal-text">
                  <span data-aos="fade-up" data-aos-duration="1200">
                    &quot;Thank you for visiting my WEB Portfolio. I&apos;m
                    excited to hear from you and discuss how we can work
                    together to bring your ideas to life. Got any inquries?
                    Please don&apos;t hesitate to get in touch by filling out
                    the form below.&quot;
                  </span>
                  <AboutCoverflow />
                </div> */}
                {/* <CryptechTeam /> */}
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
