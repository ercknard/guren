import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function LegendsPackage() {
  return (
    <Card
      data-aos="fade-left"
      data-aos-duration="3000"
      className="security-card"
      orientation="horizontal"
      variant="outlined"
      sx={{ width: 260 }}
    >
      <CardOverflow>
        <AspectRatio ratio="1">
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography
          className="text-motion tech-title sec-title"
          textColor="primary.200"
        >
          Superscripts price notes :
        </Typography>
        <Typography className="cryptech-details que" level="body-sm">
          {" "}
          ¹Final price may be adjusted or negotiated after review of report(s).
        </Typography>
        <Typography className="cryptech-details que" level="body-sm">
          {" "}
          ²Additional Time may be arranged and allotted when expiration time
          nears.
        </Typography>
        <Typography className="cryptech-details que" level="body-sm">
          {" "}
          ³Final price may be adjusted if hours of support exceed 8 hours.
        </Typography>
        <Typography className="cryptech-details que" level="body-sm">
          {" "}
          ⁴Currency denomination may be negotiated.
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
        Legends
      </CardOverflow>
    </Card>
  );
}
