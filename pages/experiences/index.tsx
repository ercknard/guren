import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import PageSigns from "@/components/PageSigns";
import Footer from "@/layout/Footer";

type Props = {};

type State = {};

export default class Experiences extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Experiences</title>
        </Head>
        <Layout>
          <section className="skill-set-container">
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big">
              <div className="content-pages">
                <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  My Experiences
                </div>
                <PageSigns />
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="normal-text"
                ></div>
              </div>
            </div>
          </section>
          <Footer />
        </Layout>
      </>
    );
  }
}
