import "@fontsource/ysabeau";
import "@fontsource/ysabeau/400.css";
import "@fontsource/ysabeau/400-italic.css";
import "@/styles/globals.css";
import "@/styles/App.css";
import React, { Component } from "react";
import Link from "next/link";
import AdjustIcon from "@mui/icons-material/Adjust";
import Head from "next/head";
import PageSigns from "@/components/PageSigns";
import AboutCoverflow from "@/components/AboutCoverflow";
import { Fab } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

type Props = {};

type State = {};

export default class ThemeSelection extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | ThemeSelection</title>
        </Head>
        <section>
          <div className="landing">
            <div className="to-big">
              <div className="content-pages">
                <div
                  data-aos="fade"
                  data-aos-duration="1500"
                  className="head-profile"
                />
                <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  Please select a theme
                </div>
                <PageSigns />
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="normal-text"
                >
                  <AboutCoverflow />

                  <div className="project-button linear">
                    <Link href="/" rel="noopener noreferrer">
                      <div className="to-flex to-align btn-gap">
                        <AdjustIcon className="to-color send-icon" />{" "}
                        <span> Home </span>
                      </div>
                    </Link>
                  </div>

                  <div className="theme-picked-themes to-hide">
                    {" "}
                    Selected theme :{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
