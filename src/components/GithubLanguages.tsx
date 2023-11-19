import React, { Component, ReactNode } from "react";
import PageSigns from "./PageSigns";

interface GithubLanguagesProps {
  children: ReactNode;
  projectName: string;
}

const GithubLanguages: React.FC<GithubLanguagesProps> = ({
  children,
  projectName,
}) => {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1200"
        className="page-title text-effect"
      >
        GitHub Feed
      </div>
      <PageSigns />
      <div className="normal-text">
        <span data-aos="fade" data-aos-duration="1200">
          &quot; Showing 1-5 latest Github events {projectName} &quot;
        </span>
        <div className="to-flex-git">{children}</div>
      </div>
    </>
  );
};
export default GithubLanguages;
