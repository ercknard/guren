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
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big to-width">
              <div className="content-pages">
                <div className="page-title text-effect">
                  Error 404: Not found
                </div>
                <div className="text-motion zodiac">
                  <span>♒︎</span>
                  <span>♓︎</span>
                  <span>♈︎</span>
                  <span>♉︎</span>
                  <span>♊︎</span>
                  <span>♋︎</span>
                  <span>♌︎</span>
                  <span>♍︎</span>
                  <span>♎︎</span>
                  <span>♏︎</span>
                  <span>♐︎</span>
                  <span>♑︎</span>
                </div>
                <div className="normal-text"></div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
