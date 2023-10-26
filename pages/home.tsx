import React, { Component } from "react";

type Props = {};

type State = {};

export default class Home extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div>
          <div className="text-motion icon-text"> </div>
          <div className="main-title text-effect"> ERCKNARD GUREN </div>
          <div className="sub-title">
            {""}
            Ercknard web portfolio is a digital exhibit of my creative journey.
            Explore my projects, designs, and achievements all in one place.{" "}
          </div>
          <div className="text-motion zodiac">
            <span>♒︎</span>
            <span>♓︎</span>
            <span>♈︎</span>
            <span>♉︎</span>
            <span>♊︎</span>
            <span>♋︎</span>
            <span>♌︎</span>
            <span>♍︎</span>
            <span>♎︎</span>
            <span>♏︎</span>
            <span>♐︎</span>
            <span>♑︎</span>
          </div>
        </div>
      </>
    );
  }
}
