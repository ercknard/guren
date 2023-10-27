import React, { Component } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | About</title>
        </Head>
        <Layout>
          <section className="landing-for-down">
            <div className="to-background">
              <div className="to-width">
                <div className="main-title text-effect"> About </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
