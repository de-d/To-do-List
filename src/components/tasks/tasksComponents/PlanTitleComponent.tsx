import { Box, Typography } from "@mui/material";

function PlanTasks({ allPlanTasks }: { allPlanTasks: number }) {
  return (
    <Box sx={{ paddingTop: "24px", display: "flex", justifyContent: "center" }}>
      <Typography sx={{ margin: "0 auto" }}>ПЛАН ({allPlanTasks})</Typography>
    </Box>
  );
}

export { PlanTasks };
