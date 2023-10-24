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
                <b className="to-wheat">AerCrypt.net</b>{" "}
              </span>{" "}
            </span>
          </Link> */}
          <div className="navigation-buttons">
            <div className="the-links">
              <Link href="/device" passHref>
                ABOUT
              </Link>
            </div>
            <div className="the-links">
              <Link className="the-links" href="/store" passHref>
                SKILLS
              </Link>
            </div>
            <div className="the-links">
              <Link className="the-links" href="/project" passHref>
                EXPERIENCES
              </Link>
            </div>
            <div className="the-links">
              <Link className="the-links" href="/blog" passHref>
                PROJECTS
              </Link>
            </div>
            <div className="the-links">
              <Link className="the-links" href="/user" passHref>
                FEEDBACKS
              </Link>
            </div>
            <div className="the-links">
              <Link className="the-links" href="/about" passHref>
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
