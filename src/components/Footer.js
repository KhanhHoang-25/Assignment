import * as React from "react";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function Footer() {
  return (
    <div style={{ position: "sticky", bottom: 0 }}>
      <Sheet
        variant="solid"
        invertedColors
        sx={{
          bgcolor: "#25252D",
          position: "sticky",
          bottom: 0,
          right: 0,
          left: 0,
          p: 2,
        }}
      >
        <Typography level="body3" sx={{ ml: "auto", textAlign: "center" }}>
          Copyright 2022
        </Typography>
      </Sheet>
    </div>
  );
}
