import React, { Component } from "react";

type Props = {};

type State = {};

export default class ZodiacDivider extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section
        data-aos="fade"
        data-aos-duration="1500"
        className="zodiac-divider"
      >
        <div className="zodiac-to-divide"></div>
      </section>
    );
  }
}
