import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";

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
            <div className="to-big to-width">
              <div className="content-pages">
                <div className="main-title text-effect">Skills</div>
                <div className="normal-text"></div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
