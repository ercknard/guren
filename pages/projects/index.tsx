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
                <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  Projects
                </div>
                <PageSigns />
                <div className="normal-text">
                  <span data-aos="fade" data-aos-duration="1200">
                    &quot;Welcome to project&apos;s gallery, where you&apos;ll
                    find a curated selection of my/Cryptech services latest
                    work. Explore a diverse range of projects that showcase my
                    skills and passion for creativity, spanning across web
                    development, design, and more.&quot;
                  </span>
                  <ProjectSelection />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
