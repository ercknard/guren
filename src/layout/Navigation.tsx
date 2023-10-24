/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import Link from "next/link";

type Props = {};
type State = {};
export default class Navigation extends Component<Props, State> {
  state = {};
  render() {
    return (
      <section id="menu" className="main-navigation">
        <input type="checkbox" id="responsive-menu" />
        <label></label>
        <div className="main-sec-nav to-width">
          {/* <Link className="the-links" href="/" passHref>
            <span className="to-flex navigation-text-logo">
              {" "}
              <Image
                className="navigation-logo to-left to-hide to-seryo"
                src="/static/images/logos/ad-mrx-pyro.png"
              />{" "}
              <span className="highlight">
                {" "}
                <b className="to-wheat">Ercknard Guren</b>{" "}
              </span>{" "}
            </span>
          </Link> */}
          <div className="navigation-buttons">
            <Link href="/" passHref>
              <span className="to-flex navigation-text-logo to-hide">
                <Image
                  className="navigation-logo"
                  src="/static/images/bgs/ercknard-head.webp"
                />{" "}
                <b>Ercknard Guren</b>
              </span>
            </Link>
            <div className="the-links">
              <Link href="/device" passHref>
                ABOUT
              </Link>
            </div>
            <div className="the-links">
              <Link href="/store" passHref>
                SKILLS
              </Link>
            </div>
            <div className="the-links">
              <Link href="/project" passHref>
                EXPERIENCES
              </Link>
            </div>
            <div className="the-links">
              <Link href="/blog" passHref>
                PROJECTS
              </Link>
            </div>
            <div className="the-links">
              <Link href="/user" passHref>
                FEEDBACKS
              </Link>
            </div>
            <div className="the-links">
              <Link href="/about" passHref>
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
