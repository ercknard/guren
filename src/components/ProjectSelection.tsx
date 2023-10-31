import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Props = {};

type State = {};

export default class ProjectSelection extends Component<Props, State> {
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
                  <span className="text-effect project-name">
                    Ercknard Web Portfolio
                  </span>
                  <Link
                    href="/projects/ercknard-web-portfolio"
                    rel="noopener noreferrer"
                  >
                    <div className="read-more">
                      <OpenInNewIcon className="to-color" />{" "}
                      <span> Read more</span>
                    </div>
                  </Link>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/projects/erckportfolio.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">Aercrypt.net</span>
                  <Link href="/projects/aercynet" rel="noopener noreferrer">
                    <div className="read-more">
                      <OpenInNewIcon className="to-color" />{" "}
                      <span> Read more</span>
                    </div>
                  </Link>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/projects/aercrypt.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">
                    Cryptech Services
                  </span>
                  <Link
                    href="/projects/cryptech-services"
                    rel="noopener noreferrer"
                  >
                    <div className="read-more">
                      <OpenInNewIcon className="to-color" />{" "}
                      <span> Read more</span>
                    </div>
                  </Link>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/projects/cryptechservices.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">Metrix.place</span>
                  <Link href="/projects/metrix-place" rel="noopener noreferrer">
                    <div className="read-more">
                      <OpenInNewIcon className="to-color" />{" "}
                      <span> Read more</span>
                    </div>
                  </Link>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/projects/metrixplace.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">
                    CryptechTest Website
                  </span>
                  <Link
                    href="/projects/cryptechtest-website"
                    rel="noopener noreferrer"
                  >
                    <div className="read-more">
                      <OpenInNewIcon className="to-color" />{" "}
                      <span> Read more</span>
                    </div>
                  </Link>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/projects/cryptechtest.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">
                    CryptectCraft
                  </span>
                  <Link
                    href="/projects/cryptechcraft"
                    rel="noopener noreferrer"
                  >
                    <div className="read-more">
                      <OpenInNewIcon className="to-color" />{" "}
                      <span> Read more</span>
                    </div>
                  </Link>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/projects/cryptechcraft.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">
                    Ercknard Minecraft Gallery
                  </span>
                  <Link
                    href="/projects/ercknard-minecraft-gallery"
                    rel="noopener noreferrer"
                  >
                    <div className="read-more">
                      <OpenInNewIcon className="to-color" />{" "}
                      <span> Read more</span>
                    </div>
                  </Link>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/projects/minecraftgallery.webp"
                  alt="slide_image"
                  width={1325}
                  height={851}
                />
              </div>
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  <span className="text-effect project-name">
                    Maysilo Meter
                  </span>
                  <Link
                    href="/projects/maysilo-meter"
                    rel="noopener noreferrer"
                  >
                    <div className="read-more">
                      <OpenInNewIcon className="to-color" />{" "}
                      <span> Read more</span>
                    </div>
                  </Link>
                </span>
                <Image
                  className="project-selection-image"
                  src="/static/images/projects/maysilo.webp"
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
