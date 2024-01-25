import React from "react";
import { TaskApp } from "./components/tasks/TaskManager";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "450px",
          padding: "32px",
          flexDirection: "column",
          boxShadow: "2px 2px 2px 2px #e7e7e7",
          borderRadius: "25px",
        }}
      >
        <TaskApp />
      </Box>
    </Box>
  );
}

export default App;
