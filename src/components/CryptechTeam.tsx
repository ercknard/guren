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
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="page-title text-effect"
        >
          Cryptech Services Team
        </div>
        <PageSigns />
        <div className="normal-text">
          <span data-aos="fade" data-aos-duration="1200">
            &quot; Unlocking Tomorrow`s Digital Frontier with Cryptech Services:
            Your Vision, Our Expertise. &quot;
          </span>
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="to-gap-project">
              <div className="to-flex team-section">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="team-portrait"
                >
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
                <div
                  data-aos="fade-right"
                  data-aos-duration="1100"
                  className="team-portrait"
                >
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
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="team-portrait"
                >
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
                <div
                  data-aos="fade-right"
                  data-aos-duration="900"
                  className="team-portrait"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="800"
                  className="team-portrait"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="700"
                  className="team-portrait"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="600"
                  className="team-portrait"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="500"
                  className="team-portrait"
                >
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
                    <span> Official site</span>
                  </div>
                </Link>
                <Link
                  href="/projects/cryptech-services"
                  rel="noopener noreferrer"
                >
                  <div className="project-button">
                    <OpenInNewIcon className="to-color send-icon" />{" "}
                    <span> Read more</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
