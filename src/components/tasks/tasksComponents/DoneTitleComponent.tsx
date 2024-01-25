import React from "react";
import { Box, Typography } from "@mui/material";

function DoneTasks({ allDoneTasks }: { allDoneTasks: number }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "24px", justifyContent: "center" }}>
      <Typography sx={{ margin: "0 auto" }}>ГОТОВО ({allDoneTasks})</Typography>
    </Box>
  );
}

export { DoneTasks };
