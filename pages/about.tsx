import React, { Component } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
import AboutCoverflow from "@/components/AboutCoverflow";

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
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big to-width">
              <div className="content-pages">
                <div className="page-title text-effect">About me</div>
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
                <div className="normal-text">
                  <AboutCoverflow />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
