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
                    &quot;Welcome to my projects page, where I showcase a
                    collection of my diverse and creative endeavors. Explore a
                    range of{" "}
                    <span className="text-effect">my /Cryptech Services¹</span>{" "}
                    work , from web development to design, as I share the
                    passion and dedication I bring to each project.&quot;
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
