import React, { Component } from "react";
import PageSigns from "./PageSigns";
import SkillsLinear from "./SkillsLinear";
import Link from "next/link";
import AdjustIcon from "@mui/icons-material/Adjust";

type Props = {};

type State = {};

export default class SkillSetLinear extends Component<Props, State> {
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
          <Link href="/skills" rel="noopener noreferrer">
            <div className="project-button linear">
              <AdjustIcon className="to-color send-icon" /> <span> Radial</span>
            </div>
          </Link>
          <div className="skillset-linear">
            <div className="to-linear-skill">
              <SkillsLinear skillName="HTML" skillPercent="80%" />{" "}
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="CSS" skillPercent="75%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="JavaScript" skillPercent="60%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="HTML" skillPercent="80%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="CSS" skillPercent="80%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="JavaScript" skillPercent="80%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="HTML" skillPercent="60%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="CSS" skillPercent="60%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="JavaScript" skillPercent="60%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="HTML" skillPercent="40%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="CSS" skillPercent="40%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="JavaScript" skillPercent="40%" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
