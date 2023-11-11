import React from "react";
import PageSigns from "./PageSigns";

const Loader: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="moon" />
      <div className="landing-loader loader-bg">
        {/* <div
          data-aos="fade"
          data-aos-duration="1200"
          className="head-profile-loader loader-title"
        /> */}
        <div className="to-flex to-gap">
          <span
            data-aos="fade"
            data-aos-duration="750"
            className="page-title text-effect "
          >
            Ercknard
          </span>
          <span
            data-aos="fade"
            data-aos-duration="1200"
            className="page-title text-effect loader-title"
          >
            Guren
          </span>
        </div>
        <div className="loader-title">
          <PageSigns />
        </div>
      </div>
    </div>
  );
};

export default Loader;
