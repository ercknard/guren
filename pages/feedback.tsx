import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";

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
            <div className="to-big to-width">
              <div className="content-pages">
                <div className="main-title text-effect">Feedback</div>
                <div className="normal-text"></div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
