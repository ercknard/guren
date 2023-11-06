import React, { ReactElement } from "react";

interface SkillsProps {
  skillName: string;
  skillPercent: string;
}

const SkillsLinear = ({
  skillName,
  skillPercent,
}: SkillsProps): ReactElement => {
  const skillStyle: React.CSSProperties = {
    width: skillPercent,
  };

  return (
    <>
      <div className="full-linear-skill">
        <div className="linear-bar" style={skillStyle} />
      </div>
    </>
  );
};

export default SkillsLinear;
