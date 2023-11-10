import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import SkillSet from "@/components/SkillSet";

type Props = {};

type State = {};

export default class Skills extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Skills</title>
        </Head>
        <Layout>
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big">
              <div className="content-pages">
                <SkillSet />
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
