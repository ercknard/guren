import React from "react";
import HomeTypingAnimation from "./HomeTextAnimation";
import ZodiacDivider from "./ZodiacDivider";
import PageSigns from "./PageSigns";

const Loader: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="moon" />
      <div className="landing-loader loader-bg">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="head-profile loader-title"
        />
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="main-title text-effect loader-title"
        >
          Ercknard Guren
        </div>
        <div className="loader-title">
          <PageSigns />
        </div>
      </div>
    </div>
  );
};

export default Loader;
