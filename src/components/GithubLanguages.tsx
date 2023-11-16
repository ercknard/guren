import React, { Component } from "react";
import PageSigns from "./PageSigns";
import GitFeed from "./github/GitMainEvents";

type Props = {};

type State = {};

export default class GithubLanguages extends Component<Props, State> {
  state = {};

  render() {
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
            &quot; Showing 1-5 latest Github events [Ercknard] &quot;
          </span>
          <div className="to-flex-git">
            <GitFeed />
          </div>
        </div>
      </>
    );
  }
}
