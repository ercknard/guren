import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import ContactUs from "@/components/Email";
import Medias from "@/components/Medias";
import Footer from "@/layout/Footer";

type Props = {};

type State = {};

export default class Contact extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Contact Me</title>
        </Head>
        <Layout>
          <section className="skill-set-container">
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big">
              <div className="content-pages">
                <Medias />
                <ContactUs />
              </div>
            </div>
          </section>
          <Footer />
        </Layout>
      </>
    );
  }
}
