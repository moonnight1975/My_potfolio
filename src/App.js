
import React from "react";
import { Box, Typography } from "@mui/material";

export default function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "radial-gradient(circle, #007BFF, #004080)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "white",
          fontFamily: "'Georgia', serif",
        }}
      >
        Myself Litto Biju Pappachan
      </Typography>
    </Box>
  );
}



