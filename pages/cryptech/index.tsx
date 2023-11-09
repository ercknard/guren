import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import PageSigns from "@/components/PageSigns";
import CryptechTeam from "@/components/CryptechTeam";

type Props = {};

type State = {};

export default class Cryptech extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Cryptech</title>
        </Head>
        <Layout>
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big">
              <div className="content-pages">
                {/* <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  Cryptech Services
                </div>
                <PageSigns /> */}
                <CryptechTeam />
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
