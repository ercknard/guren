import React, { Component } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
import TypingAnimation from "@/components/AboutTextAnimation";
import AboutCoverflow from "@/components/AboutCoverflow";
import PageSigns from "@/components/PageSigns";
import CryptechTeam from "@/components/CryptechTeam";

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
                {/* <div className="to-flex">
                  <div className="">
                    <div className="">___ HELLO,</div>
                    <div className="">I&apos;m Ercknard.</div>
                    <div className="">
                      {" "}
                      <TypingAnimation />
                      Web Designer | Developer | Graphic Designer
                    </div>
                    <div className="">
                      {" "}
                      I am a versatile creative professional with a passion for
                      web designing, web development, and graphic design. With a
                      keen eye for aesthetics and a knack for turning ideas into
                      stunning digital experiences, I bring innovation and flair
                      to every project I undertake.
                    </div>
                  </div>
                </div> */}
                {/* <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  About me
                </div>
                <PageSigns />
                <div className="normal-text">
                  <span data-aos="fade-up" data-aos-duration="1200">
                    &quot;Thank you for visiting my WEB Portfolio. I&apos;m
                    excited to hear from you and discuss how we can work
                    together to bring your ideas to life. Got any inquries?
                    Please don&apos;t hesitate to get in touch by filling out
                    the form below.&quot;
                  </span>
                  <AboutCoverflow />
                </div> */}
                <CryptechTeam />
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
