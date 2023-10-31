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
