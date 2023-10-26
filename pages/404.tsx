import React, { Component } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";

type Props = {};

type State = {};

export default class Custom404 extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | 404</title>
        </Head>
        <Layout>
          <div>
            <div className="text-motion icon-text to-hide"> ⚔ </div>
            <div className="main-title text-effect"> Error 404 </div>
          </div>
        </Layout>
      </>
    );
  }
}
