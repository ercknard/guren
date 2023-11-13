import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function SecondaryPackage() {
  return (
    <Card
      data-aos="fade-left"
      data-aos-duration="1500"
      className="security-card"
      orientation="horizontal"
      variant="outlined"
      sx={{ width: 260 }}
    >
      <CardOverflow>
        <div className="to-hide">
          <AspectRatio ratio="1" sx={{ width: 260 }}>
            <div
              data-aos="fade"
              data-aos-duration="1500"
              className="sword-profile"
            />
          </AspectRatio>
        </div>
      </CardOverflow>
      <CardContent>
        <Typography
          className="text-motion tech-title sec-title"
          textColor="primary.200"
        >
          Deluxe (1 time¹) ⇒ 0.02 BTC⁴
        </Typography>
        <Typography className="cryptech-details que" level="body-sm">
          {" "}
          Report of Website Vulnerabilities and some basic resources to
          self-remedy any issues.
        </Typography>
        <Typography className="cryptech-details que" level="body-sm">
          {" "}
          VPS Pentest and some basic resources to self-remedy any issues.
        </Typography>
        <Typography className="cryptech-details que" level="body-sm">
          {" "}
          Additional One on One support in remedying the security issues³.
        </Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        className="card-promo"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          textAlign: "center",
          fontSize: "xs",
          fontWeight: "xl",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderLeft: "1px solid",
          borderColor: "divider",
        }}
      >
        Package 2
      </CardOverflow>
    </Card>
  );
}
