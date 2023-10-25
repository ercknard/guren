import React, { Component } from "react";

type Props = {};

type State = {};

export default class Home extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div className="text-motion icon-text to-hide"> ⚔ </div>
        <div className="main-title text-effect"> ERCKNARD GUREN </div>
        <div className="sub-title to-width">
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
      </>
    );
  }
}
