import React, { ReactElement } from "react";

interface SkillsProps {
  skillName: string;
  skillPercent: string;
}

const Skills = ({ skillName, skillPercent }: SkillsProps): ReactElement => {
  const skillStyle: React.CSSProperties = {
    width: skillPercent,
  };

  return (
    <div className="skills" style={skillStyle}>
      {skillName}
    </div>
  );
};

export default Skills;
