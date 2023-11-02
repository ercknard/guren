import React, { Component } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
import CryptechTeam from "@/components/CryptechTeam";
import AboutMe from "@/components/AboutMe";
import AboutMeSub from "@/components/AboutMeSub";

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
            <div className="to-big">
              <div className="content-pages">
                <AboutMe />
                <AboutMeSub />
                {/* <CryptechTeam /> */}
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
