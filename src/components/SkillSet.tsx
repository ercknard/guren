import React, { Component } from "react";
import PageSigns from "./PageSigns";
import Skills from "./Skills";

type Props = {};

type State = {};

export default class SkillSet extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="page-title text-effect"
        >
          My Skills
        </div>
        <PageSigns />
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="normal-text"
        >
          <span data-aos="fade" data-aos-duration="1200">
            &quot;List of things that I good at.&quot;
          </span>
          <div className="to-skill-gap skillset to-padding">
            <Skills skillName="HTML" skillPercent="95%" />
            <Skills skillName="CSS" skillPercent="90%" />
            <Skills skillName="JavaScript" skillPercent="75%" />
          </div>
        </div>
      </>
    );
  }
}
