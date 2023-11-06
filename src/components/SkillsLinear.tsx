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
      <div className="full-linear-skill to-flex">
        {/* <span className="to-skillname-text">{skillName}</span> */}
        <div className="linear-bar" style={skillStyle} />
        <span className="to-skill-design-2" />
        <span className="to-skill-design" />
        <span className="to-skillpersent-text">{skillPercent}</span>
      </div>
    </>
  );
};

export default SkillsLinear;
