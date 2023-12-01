import * as React from "react";
import PageSigns from "./PageSigns";
import CheckIcon from "@mui/icons-material/Check";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TimelineQueue from "./TimelineQueue";
import Todos from "./Todos";

export default function CustomizedTimeline() {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1200"
        className="page-title text-effect"
      >
        Projects Timeline
      </div>
      <PageSigns />
      <div className="normal-text">
        <span data-aos="fade" data-aos-duration="1200">
          &quot; Here is the timeline representation of plan and actual progress
          of <span className="text-effect">my /Cryptech Services¹ </span>
          projects. &quot;
          <br />
          &apos;
          <CheckIcon className="done" /> = Project is considered done,{" "}
          <LocalOfferIcon className="ongoing" /> = Project is still
          ongoing.&apos;
        </span>
        <TimelineQueue />
      </div>
      <Todos />
    </>
  );
}
