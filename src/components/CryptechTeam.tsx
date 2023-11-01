import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Props = {};

type State = {};

export default class CryptechTeam extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <section data-aos="fade-up" data-aos-duration="1200">
          <div className="to-gap-project">
            <div className="to-flex project-section">
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">Vanikoro</span>
                  <div className="read-more">
                    <span> Developer</span>
                  </div>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/team/vani-2.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">RasalGhul</span>
                  <div className="read-more">
                    <span> Developer</span>
                  </div>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/team/raz.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">Boehmerang</span>
                  <div className="read-more">
                    <span> Developer</span>
                  </div>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/team/valor3.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">Baydroid</span>
                  <div className="read-more">
                    <span> Developer</span>
                  </div>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/team/loma3.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">Jekz</span>
                  <div className="read-more">
                    <span> Security Researcher</span>
                  </div>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/team/jekz9.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">Squidicuz</span>
                  <div className="read-more">
                    <span> Admin</span>
                  </div>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/team/squid.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">SeqSee</span>
                  <div className="read-more">
                    <span> Admin</span>
                  </div>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/team/seqsee-1.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">Ercknard</span>
                  <div className="read-more">
                    <span> Developer</span>
                  </div>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/team/ercknard3.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
