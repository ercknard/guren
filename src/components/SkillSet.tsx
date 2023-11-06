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
          <div className="skillset">
            <div className="to-flex">
              <Skills
                skillName="HTML"
                skillPercent="100"
                skillRound="1"
                skillSpace="0"
              />
              <Skills
                skillName="CSS"
                skillPercent="100"
                skillRound="1"
                skillSpace="0"
              />
              <Skills
                skillName="JavaScript"
                skillPercent="100"
                skillRound="1"
                skillSpace="0"
              />
            </div>
            <div className="to-flex">
              <Skills
                skillName="HTML"
                skillPercent="80"
                skillRound="1"
                skillSpace="0"
              />
              <Skills
                skillName="CSS"
                skillPercent="80"
                skillRound="1"
                skillSpace="0"
              />
              <Skills
                skillName="JavaScript"
                skillPercent="80"
                skillRound="1"
                skillSpace="0"
              />
            </div>
            <div className="to-flex">
              <Skills
                skillName="HTML"
                skillPercent="60"
                skillRound="1"
                skillSpace="0"
              />
              <Skills
                skillName="CSS"
                skillPercent="60"
                skillRound="1"
                skillSpace="0"
              />
              <Skills
                skillName="JavaScript"
                skillPercent="60"
                skillRound="1"
                skillSpace="0"
              />
            </div>
            <div className="to-flex">
              <Skills
                skillName="HTML"
                skillPercent="40"
                skillRound="1"
                skillSpace="0"
              />
              <Skills
                skillName="CSS"
                skillPercent="40"
                skillRound="1"
                skillSpace="0"
              />
              <Skills
                skillName="JavaScript"
                skillPercent="40"
                skillRound="1"
                skillSpace="0"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
