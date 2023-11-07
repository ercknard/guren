import React, { Component } from "react";
import PageSigns from "./PageSigns";
import SkillsLinear from "./SkillsLinear";
import Link from "next/link";
import AdjustIcon from "@mui/icons-material/Adjust";
import ZodiacDivider from "./ZodiacDivider";

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
            <div className="skills-title text-effect">
              {" "}
              Front-End Development
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="HTML5" skillPercent="85%" />{" "}
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="CSS3" skillPercent="80%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="JavaScript" skillPercent="75%" />
            </div>
            <div className="skills-title text-effect"> CSS Preprocessors</div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="SASS" skillPercent="70%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="LESS" skillPercent="65%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="PostCSS" skillPercent="50%" />
            </div>
            <div className="skills-title text-effect">
              {" "}
              Frameworks / Libraries
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="ReactJS" skillPercent="60%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="Bootstrap" skillPercent="75%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="Tailwind" skillPercent="75%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="MUI Core" skillPercent="60%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="Semantic UI" skillPercent="40%" />
            </div>

            <div className="skills-title text-effect">
              {" "}
              Server-Side Programming
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="Java" skillPercent="70%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="Python" skillPercent="70%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="C#" skillPercent="70%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="Node.js" skillPercent="60%" />
            </div>

            <div className="skills-title text-effect"> Databases</div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="MySql" skillPercent="75%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="MongoDB" skillPercent="70%" />
            </div>

            <div className="skills-title text-effect"> Version Control</div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="Git" skillPercent="50%" />
            </div>
            <div className="to-linear-skill">
              <SkillsLinear skillName="GitHub" skillPercent="70%" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
