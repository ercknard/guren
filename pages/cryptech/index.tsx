import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import CryptechTeam from "@/components/CryptechTeam";
import CryptechBullets from "@/components/CryptechBullets";
import CryptechSecurity from "@/components/CryptechSecurity";
import SecondaryLayout from "@/layout/SecondaryLayout";
import TertiaryLayout from "@/layout/TertiaryLayout";
import Footer from "@/layout/Footer";

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
                <SecondaryLayout>
                  <CryptechBullets />
                </SecondaryLayout>
                <TertiaryLayout>
                  <CryptechSecurity />
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
