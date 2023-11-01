import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PageSigns from "./PageSigns";

type Props = {};

type State = {};

export default class CryptechTeam extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        {/* <div className="to-divide"> */}
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="page-title text-effect"
        >
          Cryptech Services Team
        </div>
        <PageSigns />
        <div className="normal-text">
          <span data-aos="fade-up" data-aos-duration="1200">
            &quot;We specialize in providing robust{" "}
            <span className="text-effect">web3</span> and{" "}
            <span className="text-effect">fullstack development services</span>,
            with a primary focus on cryptocurrency, blockchain technology, and
            web design. Additionally, we offer expert services in the realms of
            cybersecurity , as well as technical support and consultation.&quot;
          </span>
          <section data-aos="fade-up" data-aos-duration="1200">
            <div className="to-gap-project">
              <div className="to-flex team-section">
                <div className="team-portrait">
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect team-project-name">
                      Vanikoro
                    </span>
                    <div className="team-read-more">
                      <span> Developer</span>
                    </div>
                  </span>
                  <Image
                    className="project-selection-image"
                    src="/static/images/team/vani-2-nobg-em.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
                <div className="team-portrait">
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect team-project-name">
                      RasalGhul
                    </span>
                    <div className="team-read-more">
                      <span> Developer</span>
                    </div>
                  </span>
                  <Image
                    className="project-selection-image"
                    src="/static/images/team/raz-nobg-2.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
                <div className="team-portrait">
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect team-project-name">
                      Boehmerang
                    </span>
                    <div className="team-read-more">
                      <span> Developer</span>
                    </div>
                  </span>
                  <Image
                    className="project-selection-image"
                    src="/static/images/team/valor3-nobg.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
                <div className="team-portrait">
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect team-project-name">
                      Baydroid
                    </span>
                    <div className="team-read-more">
                      <span> Developer</span>
                    </div>
                  </span>
                  <Image
                    className="project-selection-image"
                    src="/static/images/team/loma1-nobg.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
                <div className="team-portrait">
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect team-project-name">Jekz</span>
                    <div className="team-read-more">
                      <span> Security Researcher</span>
                    </div>
                  </span>
                  <Image
                    className="project-selection-image"
                    src="/static/images/team/jekz9-bg.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
                <div className="team-portrait">
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect team-project-name">
                      Squidicuz
                    </span>
                    <div className="team-read-more">
                      <span> Admin</span>
                    </div>
                  </span>
                  <Image
                    className="project-selection-image"
                    src="/static/images/team/squid-nobg.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
                <div className="team-portrait">
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect team-project-name">
                      SeqSee
                    </span>
                    <div className="team-read-more">
                      <span> Admin</span>
                    </div>
                  </span>
                  <Image
                    className="project-selection-image"
                    src="/static/images/team/seqsee-1-nobg.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
                <div className="team-portrait">
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect team-project-name">
                      Ercknard
                    </span>
                    <div className="team-read-more">
                      <span> Developer</span>
                    </div>
                  </span>
                  <Image
                    className="project-selection-image"
                    src="/static/images/team/ercknard3-nobg.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
              </div>
              <div className="to-flex to-space-between teams-end-btn">
                <Link
                  target="_blank"
                  href="https://cryptech.services/"
                  rel="noopener noreferrer"
                >
                  <div className="project-button">
                    <OpenInNewIcon className="to-color send-icon" />{" "}
                    <span> Visit</span>
                  </div>
                </Link>
                <Link
                  href="/projects/cryptech-services"
                  rel="noopener noreferrer"
                >
                  <div className="project-button">
                    <OpenInNewIcon className="to-color send-icon" />{" "}
                    <span> View</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* </div> */}
      </>
    );
  }
}
