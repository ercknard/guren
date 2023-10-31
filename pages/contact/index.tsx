import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import ContactUs from "@/components/Email";
import PageSigns from "@/components/PageSigns";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import DiscFullIcon from "@mui/icons-material/DiscFull";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Image from "next/image";

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
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="pages-banner" />
            <div className="to-big to-width">
              <div className="content-pages">
                <div
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="page-title text-effect"
                >
                  Contact me
                </div>
                <PageSigns />
                <div
                  data-aos="fade"
                  data-aos-duration="1200"
                  className="head-profile"
                />
                <div
                  data-aos="fade"
                  data-aos-duration="3000"
                  className="to-flex socials"
                >
                  <div className="social-icons">
                    <FacebookIcon className="to-color" />{" "}
                    <span className="to-hide  social-links">Facebook</span>
                  </div>
                  <div className="social-icons">
                    <TwitterIcon className="to-color" />{" "}
                    <span className="to-hide  social-links">Twitter</span>
                  </div>
                  <div className="social-icons">
                    <DiscFullIcon className="to-color" />{" "}
                    <span className="to-hide social-links">Discord</span>
                  </div>
                  <div className="social-icons">
                    <AlternateEmailIcon className="to-color" />{" "}
                    <span className="to-hide  social-links">Email</span>
                  </div>
                  <div className="social-icons">
                    <GitHubIcon className="to-color" />{" "}
                    <span className="to-hide  social-links">Github</span>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="normal-text"
                >
                  &quot;Thank you for visiting my{" "}
                  <span className="text-effect">WEB Portfolio</span>. I&apos;m
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
