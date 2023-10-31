import React, { Component } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
import AboutCoverflow from "@/components/AboutCoverflow";
import PageSigns from "@/components/PageSigns";

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
                <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  About me
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
