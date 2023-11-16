import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PageSigns from "./PageSigns";

type Props = {};

type State = {};

export default class ProjectSelection extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="page-title text-effect"
        >
          Projects
        </div>
        <PageSigns />
        <div className="normal-text">
          <span data-aos="fade" data-aos-duration="1200">
            &quot; Welcome to my projects page, where I showcase a collection of
            my diverse and creative endeavors. Explore a range of{" "}
            <span className="text-effect">my /Cryptech Services¹</span> work ,
            from web development to design, as I share the passion and
            dedication I bring to each project. &quot;
          </span>
          <div>
            <div className="to-gap-project">
              <div className="to-flex project-section">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="project-portrait"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="1100"
                  className="project-portrait"
                >
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect project-name">
                      Aercrypt.net¹
                    </span>
                    <Link href="/projects/aercrypnet" rel="noopener noreferrer">
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="project-portrait"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="900"
                  className="project-portrait"
                >
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect project-name">
                      Metrix.place¹
                    </span>
                    <Link
                      href="/projects/metrix-place"
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
                    src="/static/images/projects/metrixplace.webp"
                    alt="slide_image"
                    width={1325}
                    height={851}
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="800"
                  className="project-portrait"
                >
                  <span className="project-logo" />
                  <span className="project-description-bg" />
                  <span className="project-description">
                    <span className="text-effect project-name">
                      CryptechTest
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="700"
                  className="project-portrait"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="600"
                  className="project-portrait"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="500"
                  className="project-portrait"
                >
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
          </div>
        </div>
      </>
    );
  }
}
