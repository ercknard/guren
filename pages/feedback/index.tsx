import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import PageSigns from "@/components/PageSigns";

type Props = {};

type State = {};

export default class Feedbacks extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Feedbacks</title>
        </Head>
        <Layout>
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big to-width">
              <div className="content-pages">
                <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  Feedbacks
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
        </Layout>
      </>
    );
  }
}