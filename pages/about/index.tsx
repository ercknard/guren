import React, { Component } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
import AboutMe from "@/components/AboutMe";
import AboutMeSub from "@/components/AboutMeSub";
import AboutMeSubTer from "@/components/AboutMeTer";
import ZodiacDivider from "@/components/ZodiacDivider";

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
                <AboutMeSubTer />
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
