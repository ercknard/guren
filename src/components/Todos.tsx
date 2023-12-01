import * as React from "react";
import Typography from "@mui/material/Typography";
import PageSigns from "./PageSigns";

export default function Todos() {
  return (
    <>
      <div className="to-padding">
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="page-title text-effect"
        >
          in Development & To do&apos;s
        </div>
        <PageSigns />
        <div className="to-marg">
          <div className="project-timeline">
            <Typography className="text-effect" variant="h6" component="span">
              SCP Extension
            </Typography>
            <Typography>Browser Extension</Typography>
          </div>
          <div className="project-timeline">
            <Typography className="text-effect" variant="h6" component="span">
              Cryptech Services v.2
            </Typography>
            <Typography>Website</Typography>
          </div>
          <div className="project-timeline">
            <Typography className="text-effect" variant="h6" component="span">
              Metrix LGP
            </Typography>
            <Typography>Web3 DAPP</Typography>
          </div>
          <div className="project-timeline">
            <Typography className="text-effect" variant="h6" component="span">
              Metrix Extension
            </Typography>
            <Typography>Browser Extension</Typography>
          </div>
          <div className="project-timeline">
            <Typography className="text-effect" variant="h6" component="span">
              StarSeed Protocol
            </Typography>
            <Typography>Website</Typography>
          </div>
          <div className="project-timeline">
            <Typography className="text-effect" variant="h6" component="span">
              Mic Hernandez Formal Web Portfolio
            </Typography>
            <Typography>Portfolio</Typography>
          </div>
        </div>
      </div>
    </>
  );
}
