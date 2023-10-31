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
                  <span data-aos="fade-up" data-aos-duration="1200">
                    &quot;Thank you for visiting my{" "}
                    <span className="text-effect">WEB Portfolio</span>. I&apos;m
                    excited to hear from you and discuss how we can work
                    together to bring your ideas to life. Got any inquries?
                    Please don&apos;t hesitate to get in touch by filling out
                    the form below.&quot;
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
