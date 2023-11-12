import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Solidity() {
  return (
    <Card
      data-aos="fade-left"
      data-aos-duration="900"
      className="ctcontent"
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: "center",
        maxWidth: "100%",
        width: 500,
        // to make the demo resizable
        overflow: "auto",
      }}
    >
      <CardOverflow
        className="card-cover"
        variant="solid"
        sx={{
          flex: "0 0 200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: "var(--Card-padding)",
        }}
      >
        <Typography fontWeight="xl" textColor="#fff">
          <DataObjectIcon className="bullets-style" />
        </Typography>
        <Typography className="text-motion tech-title" textColor="primary.200">
          Solidity Development
        </Typography>
      </CardOverflow>
      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
        <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
          <div
            data-aos="fade"
            data-aos-duration="1500"
            className="head-profile"
          />
        </AspectRatio>
        <CardContent>
          {/* <Typography level="title-lg">Need Some Help?</Typography> */}
          <Typography
            className="cryptech-details"
            fontSize="l"
            sx={{ mt: 0.5 }}
          >
            We specialize in Solidity smart contract development, creating
            secure and efficient blockchain-based solutions tailored to your
            specific decentralized application needs.
          </Typography>
        </CardContent>
        {/* <Button
          variant="outlined"
          color="primary"
          sx={{
            "--variant-borderWidth": "2px",
            borderRadius: 40,
            borderColor: "primary.500",
            mx: "auto",
          }}
        >
          See FAQ
        </Button> */}
      </CardContent>
    </Card>
  );
}
