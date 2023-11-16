import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import ProjectSelection from "@/components/ProjectSelection";
import CustomizedTimeline from "@/components/ProjectTImeline";
import SecondaryLayout from "@/layout/SecondaryLayout";
import Footer from "@/layout/Footer";
import TertiaryLayout from "@/layout/TertiaryLayout";
import GithubLanguages from "@/components/GithubLanguages";

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
                <SecondaryLayout>
                  <CustomizedTimeline />
                </SecondaryLayout>
                <TertiaryLayout>
                  <GithubLanguages />
                </TertiaryLayout>
              </div>
            </div>
          </section>
          <Footer />
        </Layout>
      </>
    );
  }
}
