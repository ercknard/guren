import React, { Component } from "react";
import Image from "next/image";

type Props = {};

type State = {};

export default class ProjectSelection extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <section>
          <div className="to-gap-project">
            <div className="to-flex project-section">
              <div className="project-portrait">
                <span className="project-logo" />
                <span className="project-description-bg" />
                <span className="project-description">
                  Ercknard Web Portfolio
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
                <span className="project-description">Aercrypt.net</span>
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
                <span className="project-description">Cryptech Services</span>
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
                <span className="project-description">Metrix.place</span>
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
                  CryptechTest Website
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
                <span className="project-description">CryptectCraft</span>
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
                  Ercknard Minecraft Gallery
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
                <span className="project-description">Maysilo Meter</span>
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
