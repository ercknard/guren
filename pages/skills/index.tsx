import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import PageSigns from "@/components/PageSigns";
import CryptechTeam from "@/components/CryptechTeam";
import AboutCoverflow from "@/components/AboutCoverflow";

type Props = {};

type State = {};

export default class Skills extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Skills</title>
        </Head>
        <Layout>
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big">
              <div className="content-pages">
                {/* <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  My Skills
                </div>
                <PageSigns /> */}
                {/* <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="normal-text"
                > */}
                <CryptechTeam />
                <AboutCoverflow />
                {/* </div> */}
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
