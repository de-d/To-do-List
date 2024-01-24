import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AddTaskProps } from "../../types/todoType";
import { Box, FormControl, IconButton, TextField, Typography } from "@mui/material";

function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState("");
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "34px",
          lineHeight: "123.5%",
          letterSpacing: "0.25px",
          color: "var(--primary-main, #2196F3)",
        }}
        variant="h1"
      >
        TODO
      </Typography>
      <FormControl sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "450px", height: "44px" }}>
        <TextField
          id="add-task-input"
          label="Имя новой задачи"
          variant="standard"
          sx={{ width: "450px" }}
          value={text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="add"
                size="medium"
                {...(text.trim() === "" ? { disabled: true } : {})}
                onClick={() => {
                  if (text.trim() !== "") {
                    onAddTask(text);
                    setText("");
                  }
                }}
              >
                <AddIcon fontSize="medium" color="primary" {...(text.trim() === "" ? { sx: { color: "red" } } : {})} />
              </IconButton>
            ),
          }}
        />
      </FormControl>
    </Box>
  );
}

export { AddTask };
