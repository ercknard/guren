import React, { ReactElement } from "react";

interface SkillsProps {
  skillName: string;
  skillPercent: string;
  skillRound: string;
  skillSpace: string;
}

const Skills = ({
  skillName,
  skillPercent,
  skillRound,
  skillSpace,
}: SkillsProps): ReactElement => {
  const skillStyle: { [key: string]: string } = {};

  skillStyle["--p"] = skillPercent;
  skillStyle["--n"] = skillRound;
  skillStyle["--f"] = skillSpace;

  return (
    <>
      <div className="loader" style={skillStyle} />
      <span>{skillName}</span>
    </>
  );
};

export default Skills;
