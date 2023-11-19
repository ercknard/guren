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

export default function TimelineQueue() {
  return (
    <>
      <div className="to-padding">
        <Timeline position="right">
          <TimelineItem>
            <TimelineOppositeContent
              data-aos="fade-left"
              data-aos-duration="500"
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              November, 2021 - January, 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CheckIcon className="done" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              data-aos="fade-right"
              data-aos-duration="500"
              sx={{ py: "12px", px: 2 }}
            >
              {" "}
              <div className="project-timeline">
                <Typography
                  className="text-effect"
                  variant="h6"
                  component="span"
                >
                  Maysilo Meter
                </Typography>
                <Typography>
                  Porject (Flood Monitoring System) proposal for BRGY. Maysilo.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              data-aos="fade-left"
              data-aos-duration="600"
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              October, 2022 - December, 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CheckIcon className="done" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              data-aos="fade-right"
              data-aos-duration="600"
              sx={{ py: "12px", px: 2 }}
            >
              {" "}
              <div className="project-timeline">
                <Typography
                  className="text-effect"
                  variant="h6"
                  component="span"
                >
                  Ercknard Minecraft Gallery
                </Typography>
                <Typography>
                  My Personal Gallery Builds (CryptechCraft Server)
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              data-aos="fade-left"
              data-aos-duration="700"
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              February, 2023 - March, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CheckIcon className="done" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              data-aos="fade-right"
              data-aos-duration="700"
              sx={{ py: "12px", px: 2 }}
            >
              {" "}
              <div className="project-timeline">
                <Typography
                  className="text-effect"
                  variant="h6"
                  component="span"
                >
                  CryptechCraft Website
                </Typography>
                <Typography>
                  Sample website (Cryptechcraft MC Server)
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              data-aos="fade-left"
              data-aos-duration="800"
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              April, 2023 - August, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CheckIcon className="done" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              data-aos="fade-right"
              data-aos-duration="800"
              sx={{ py: "12px", px: 2 }}
            >
              {" "}
              <div className="project-timeline">
                <Typography
                  className="text-effect"
                  variant="h6"
                  component="span"
                >
                  CryptechTest SMP Server Website
                </Typography>
                <Typography>CryptechTest Official website</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              data-aos="fade-left"
              data-aos-duration="900"
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              June, 2023 - August, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <LocalOfferIcon className="ongoing" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              data-aos="fade-right"
              data-aos-duration="900"
              sx={{ py: "12px", px: 2 }}
            >
              {" "}
              <div className="project-timeline">
                <Typography
                  className="text-effect"
                  variant="h6"
                  component="span"
                >
                  Metrix.place
                </Typography>
                <Typography>A communal graffiti board (MetrixCoin)</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              data-aos="fade-left"
              data-aos-duration="1000"
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              July, 2023 - September, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CheckIcon className="done" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              data-aos="fade-right"
              data-aos-duration="1000"
              sx={{ py: "12px", px: 2 }}
            >
              {" "}
              <div className="project-timeline">
                <Typography
                  className="text-effect"
                  variant="h6"
                  component="span"
                >
                  Cryptech Services
                </Typography>
                <Typography>Cryptech Services Official website</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              data-aos="fade-left"
              data-aos-duration="1100"
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              September, 2023 - October, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <LocalOfferIcon className="ongoing" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              data-aos="fade-right"
              data-aos-duration="1100"
              sx={{ py: "12px", px: 2 }}
            >
              <div className="project-timeline">
                <Typography
                  className="text-effect"
                  variant="h6"
                  component="span"
                >
                  Aercrypt.net
                </Typography>
                <Typography>AerCrypt Official website</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              data-aos="fade-left"
              data-aos-duration="1200"
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              October, 2023 - November, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <LocalOfferIcon className="ongoing" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              data-aos="fade-right"
              data-aos-duration="1200"
              sx={{ py: "12px", px: 2 }}
            >
              <div className="project-timeline">
                <Typography
                  className="text-effect"
                  variant="h6"
                  component="span"
                >
                  Ercknard Guren
                </Typography>
                <Typography>Web Portfolio</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}
