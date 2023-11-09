import React from "react";
import HomeTypingAnimation from "./HomeTextAnimation";
import ZodiacDivider from "./ZodiacDivider";
import PageSigns from "./PageSigns";

const Loader: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="moon" />
      <div className="landing loader-bg">
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="main-title text-effect"
        >
          Ercknard Guren
        </div>
        <PageSigns />
      </div>
    </div>
  );
};

export default Loader;
