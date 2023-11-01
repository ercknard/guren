import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import PageSigns from "./PageSigns";

export default function CustomizedTimeline() {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1200"
        className="page-title text-effect"
      >
        Project Timelines
      </div>
      <PageSigns />
      <div className="normal-text">
        <span data-aos="fade" data-aos-duration="1200">
          &quot;Welcome to my projects page, where I showcase a collection of my
          diverse and creative endeavors. Explore a range of{" "}
          <span className="text-effect">my /Cryptech Services¹</span> work ,
          from web development to design, as I share the passion and dedication
          I bring to each project.&quot;
        </span>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Because you need strength</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}
