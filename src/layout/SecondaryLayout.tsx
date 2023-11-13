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
        <div className="to-up-z"> {children} </div>
        <div className="skewed"></div>
        <div className="to-effect-dark"></div>
        <div className="to-dust-effect"></div>
        <div className="to-corridor-effect"></div>
        <div className="custom-shape-divider-top-1699865429 primary-svg">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fills"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-top-1699865429 secondary-svg">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-top-1699865429 tertiary-svg">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-top-1699865429 quaternary-svg">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fills"
            ></path>
          </svg>
        </div>
        <ZodiacDivider />
      </div>
    </>
  );
};

export default SecondaryLayout;
