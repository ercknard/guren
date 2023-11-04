import React, { ReactElement } from "react";

interface SkillsProps {
  skillName: string;
  skillPercent: string;
}

const Skills = ({ skillName, skillPercent }: SkillsProps): ReactElement => {
  const skillStyle: React.CSSProperties = {};

  skillStyle["--p"] = skillPercent; // Assign the skillPercent value to the --p custom property

  return (
    <div className="loader" style={skillStyle}>
      {skillName}
    </div>
  );
};

export default Skills;
