import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import PageSigns from "@/components/PageSigns";
import ProjectSelection from "@/components/ProjectSelection";

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
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big">
              <div className="content-pages">
                <ProjectSelection />
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
