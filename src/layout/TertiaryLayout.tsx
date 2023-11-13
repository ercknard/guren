import React, { ReactNode, useState, useEffect } from "react";
import ZodiacDivider from "@/components/ZodiacDivider";

interface TertiaryLayoutProps {
  children: ReactNode;
}

const TertiaryLayout: React.FC<TertiaryLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="to-relative">
        <div> {children} </div>
        <div className="skewed-tertiary"></div>
        <div className="to-effect-dark-tertiary"></div>
        <div className="toblack"></div>
        <ZodiacDivider />
      </div>
    </>
  );
};

export default TertiaryLayout;
