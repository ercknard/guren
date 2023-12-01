import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import PageSigns from "./PageSigns";
import CheckIcon from "@mui/icons-material/Check";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

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
