import React, { Component } from "react";
import PageSigns from "./PageSigns";
import PrimaryPackage from "./cryptechsecurity/PrimaryPackage";
import SecondaryPackage from "./cryptechsecurity/SecondaryPackage";
import TertiaryPackage from "./cryptechsecurity/TertiaryPackage";
import LegendsPackage from "./cryptechsecurity/LegendsPackage";

type Props = {};

type State = {};

export default class CryptechSecurity extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="page-title text-effect"
        >
          Security Services
        </div>
        <PageSigns />
        <div className="normal-text">
          <span data-aos="fade" data-aos-duration="1200">
            &quot;Security Services we offer&quot;
          </span>
          <div className="ctbullets">
            <PrimaryPackage />
            <SecondaryPackage />
            <TertiaryPackage />
            <LegendsPackage />
          </div>
        </div>
      </>
    );
  }
}
