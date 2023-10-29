import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import ContactUs from "@/components/Email";

type Props = {};

type State = {};

export default class Contact extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Contact</title>
        </Head>
        <Layout>
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big to-width">
              <div className="content-pages">
                <div className="page-title text-effect">Contact me</div>
                <div className="text-motion zodiac">
                  <span>♒︎</span>
                  <span>♓︎</span>
                  <span>♈︎</span>
                  <span>♉︎</span>
                  <span>♊︎</span>
                  <span>♋︎</span>
                  <span>♌︎</span>
                  <span>♍︎</span>
                  <span>♎︎</span>
                  <span>♏︎</span>
                  <span>♐︎</span>
                  <span>♑︎</span>
                </div>
                <div className="normal-text">
                  &quot;Thank you for visiting my WEB Portfolio. I&apos;m
                  excited to hear from you and discuss how we can work together
                  to bring your ideas to life. Got any inquries? Please
                  don&apos;t hesitate to get in touch by filling out the form
                  below.&quot;
                  <ContactUs />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
