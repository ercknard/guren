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
          <div className="to-flex project-section">
            <Image
              className="project-selection-image"
              src="/static/images/projects/erckportfolio.jpeg"
              alt="slide_image"
              width={1325}
              height={851}
            />
            <Image
              className="project-selection-image"
              src="/static/images/projects/aercrypt.jpeg"
              alt="slide_image"
              width={1325}
              height={851}
            />
            <Image
              className="project-selection-image"
              src="/static/images/projects/cryptechservices.PNG"
              alt="slide_image"
              width={1325}
              height={851}
            />
            <Image
              className="project-selection-image"
              src="/static/images/projects/metrixplace.jpeg"
              alt="slide_image"
              width={1325}
              height={851}
            />
            <Image
              className="project-selection-image"
              src="/static/images/projects/cryptechtest.PNG"
              alt="slide_image"
              width={1325}
              height={851}
            />
            <Image
              className="project-selection-image"
              src="/static/images/projects/cryptechcraft.PNG"
              alt="slide_image"
              width={1325}
              height={851}
            />
            <Image
              className="project-selection-image"
              src="/static/images/projects/minecraftgallery.PNG"
              alt="slide_image"
              width={1325}
              height={851}
            />
            <Image
              className="project-selection-image"
              src="/static/images/projects/maysilo.PNG"
              alt="slide_image"
              width={1325}
              height={851}
            />
          </div>
        </section>
      </>
    );
  }
}
