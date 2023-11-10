import "@fontsource/ysabeau";
import "@fontsource/ysabeau/400.css";
import "@fontsource/ysabeau/400-italic.css";
import "@/styles/globals.css";
import "@/styles/App.css";
import React, { Component } from "react";
import Head from "next/head";
import AboutCoverflow from "@/components/AboutCoverflow";

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
          <div className="landing-container-cosmic" />
          {/* <div className="landing-container-theme" /> */}
          <div className="landing">
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="to-big">
              <div className="content-pages">
                <AboutCoverflow />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
