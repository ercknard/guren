import React, { ReactElement } from "react";

interface SkillsProps {
  skillName: string;
  skillPercent: string;
}

const Skills = ({ skillName, skillPercent }: SkillsProps): ReactElement => {
  const skillStyle: { [key: string]: string } = {};

  skillStyle["--p"] = skillPercent;

  return (
    <div className="loader" style={skillStyle}>
      {skillName}
    </div>
  );
};

export default Skills;
