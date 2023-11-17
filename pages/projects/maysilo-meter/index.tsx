import { Component } from "react";
import * as React from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import PageSigns from "@/components/PageSigns";
import Image from "next/image";
import CustomizedTimeline from "@/components/ProjectTImeline";
import SecondaryLayout from "@/layout/SecondaryLayout";
import Footer from "@/layout/Footer";
import TertiaryLayout from "@/layout/TertiaryLayout";
import GithubLanguages from "@/components/GithubLanguages";
import GitMeter from "@/components/github/GitMeter";
import { Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {};

type State = {};

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default class ErcknardWebPortfolio extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Maysilo Meter</title>
        </Head>
        <Layout>
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big">
              <div className="content-pages">
                <div className="to-proj-meter" />
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="normal-text"
                >
                  <Image
                    className="to-project-banner"
                    alt="Project"
                    src="/static/images/projects/maysilo.webp"
                    width={3455}
                    height={1783}
                  />
                </div>
                <SecondaryLayout>
                  {/* <div
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    className="page-title text-effect"
                  >
                    Ercknard Web Portfolio
                  </div>
                  <PageSigns /> */}
                  <Breadcrumbs aria-label="breadcrumb" className="to-gray">
                    <Link underline="hover" className="to-gray" href="/">
                      Home
                    </Link>
                    <Link
                      underline="hover"
                      className="to-gray"
                      href="/projects"
                    >
                      Projects
                    </Link>
                    <Typography className="to-white">Maysilo Meter</Typography>
                  </Breadcrumbs>
                  <div className="to-flex to-align">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      className="project-portrait to-proj-up"
                    >
                      <span className="project-logo" />
                      <span className="project-description-bg" />
                      <Image
                        className="project-selection-image"
                        src="/static/images/projects/maysilo.webp"
                        alt="slide_image"
                        width={1325}
                        height={851}
                      />
                    </div>

                    <div className="to-proj-width">
                      <div className="greeting-sub-name text-effect">About</div>
                      <div className="about-sub-text">
                        {" "}
                        Porject (Flood Monitoring System) proposal for BRGY.
                        Maysilo.
                      </div>
                      <div className="to-flex to-align">
                        <div className="about-sub-text">Contributors:</div>
                        <Image
                          className="contributor"
                          src="/static/images/logos/Shotgun Boy - Gyuhwan123.png"
                          alt="contributor"
                          width={50}
                          height={50}
                        />
                        <span>Ercknard</span>
                      </div>
                      <div
                        data-aos="fade"
                        data-aos-duration="3000"
                        className="to-flex teams-end-btn to-gap"
                      >
                        <Link
                          target="_blank"
                          href="https://maysilometer.vercel.app/"
                          rel="noopener noreferrer"
                        >
                          <div className="project-button">
                            <OpenInNewIcon className="to-color send-icon" />{" "}
                            <span className="to-white"> Visit site</span>
                          </div>
                        </Link>
                        <Link
                          href="https://github.com/ercknard/MaysiloMeter"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="project-button">
                            <GitHubIcon className="to-color send-icon" />{" "}
                            <span className="to-white"> Github</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SecondaryLayout>
                <TertiaryLayout>
                  <GithubLanguages projectName="Maysilo Meter">
                    <GitMeter />
                  </GithubLanguages>
                </TertiaryLayout>
              </div>
            </div>
          </section>
          <Footer />
        </Layout>
      </>
    );
  }
}
