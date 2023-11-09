import React, { Component } from "react";
import PageSigns from "./PageSigns";
import Skills from "./Skills";
import Link from "next/link";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import SkillsLinear from "./SkillsLinear";

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
          {/* <div className="project-button linear">
            <Link href="/skills/linear" rel="noopener noreferrer">
              <div className="to-flex to-align btn-gap">
                <LinearScaleIcon className="to-color send-icon" />{" "}
                <span> Development</span>
              </div>
            </Link>
          </div> */}
          {/* <div className="skillset">
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
          </div> */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="skillset-linear"
          >
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
