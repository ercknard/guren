import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";

type Props = {};

type State = {};

export default class Projects extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Projects</title>
        </Head>
        <Layout>
          <div>
            <div className="text-motion icon-text to-hide"> ⚔ </div>
            <div className="main-title text-effect"> This is Project </div>
          </div>
        </Layout>
      </>
    );
  }
}
