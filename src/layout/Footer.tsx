import React, { Component } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

type Props = {};

type State = {};

export default class Footer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <section className="main-footer">
          <div className="zodiac-to-divide"></div>
          {/* <span className="zodiac-to-divide-2"></span> */}
          <div className="custom-shape-divider-bottom-1700087865">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="custom-shape-divider-top-1700089802">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="to-space-top">
            <ul className="social-icon">
              <li className="social-icon__item">
                <a className="social-icon__link" href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link" href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link" href="#">
                  <GitHubIcon />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link" href="#">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
            <ul className="menu">
              <li className="menu__item">
                <div className="menu__link">
                  <Link href="/home">Themes</Link>
                </div>
              </li>
              <li className="menu__item">
                <div className="menu__link">
                  <Link href="/skills">Skills</Link>
                </div>
              </li>
              <li className="menu__item">
                <div className="menu__link">
                  <Link href="/projects">Projects</Link>
                </div>
              </li>
              <li className="menu__item">
                <div className="menu__link">
                  <Link href="/cryptech">Cryptech</Link>
                </div>
              </li>
              <li className="menu__item">
                <div className="menu__link">
                  <Link href="/contact">Contact</Link>
                </div>
              </li>
            </ul>
            <p className="rights">
              &copy;2023 Ercknard Guren I | Web Portfolio
            </p>
          </div>
        </section>
      </>
    );
  }
}
