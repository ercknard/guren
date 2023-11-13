import React, { ReactNode, useState, useEffect } from "react";
import ZodiacDivider from "@/components/ZodiacDivider";

interface SecondaryLayoutProps {
  children: ReactNode;
}

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="to-relative">
        <ZodiacDivider />
        <div> {children} </div>
        <div className="skewed"></div>
        <div className="to-effect-dark"></div>
        <div className="to-dust-effect"></div>
        <div className="to-corridor-effect"></div>
        <ZodiacDivider />
      </div>
    </>
  );
};

export default SecondaryLayout;
