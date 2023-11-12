import React, { Component } from "react";
import PageSigns from "./PageSigns";
import FullStack from "./cryptechbullets/FullStack";
import Web3 from "./cryptechbullets/Web3";
import Solidity from "./cryptechbullets/Solidity";
import WebDesign from "./cryptechbullets/WebDesign";
import GrapgicDesign from "./cryptechbullets/GraphicDesign";
import TechSupport from "./cryptechbullets/TechSupport";

type Props = {};

type State = {};

export default class CryptechBullets extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="page-title text-effect"
        >
          Our Services
        </div>
        <PageSigns />
        <div className="normal-text">
          <span data-aos="fade" data-aos-duration="1200">
            &quot;We specialize in providing robust{" "}
            <span className="text-effect">web3</span> and{" "}
            <span className="text-effect">fullstack development services</span>,
            with a primary focus on cryptocurrency, blockchain technology, and
            web design. Additionally, we offer expert services in the realms of
            cybersecurity , as well as technical support and consultation.&quot;
          </span>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="ctbullets"
          >
            <FullStack />
            <Web3 />
            <Solidity />
            <WebDesign />
            <GrapgicDesign />
            <TechSupport />
          </div>
        </div>
      </>
    );
  }
}
