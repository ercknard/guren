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
          <div>
            <div className="text-motion icon-text to-hide"> ⚔ </div>
            <div className="main-title text-effect"> This is About </div>
          </div>
        </Layout>
      </>
    );
  }
}
