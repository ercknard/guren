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
          <section className="landing-for-down">
            <div className="to-background">
              <div className="to-width">
                <div className="main-title text-effect"> Feedback </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
