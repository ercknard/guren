import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import PageSigns from "@/components/PageSigns";

type Props = {};

type State = {};

export default class MetrixPlace extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Metrix.place</title>
        </Head>
        <Layout>
          <section>
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
                  Metrix.place
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