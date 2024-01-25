import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import { PlanTasks } from "./PlanTitleComponent";
import { DoneTasks } from "./DoneTitleComponent";
import { Checkbox, FormControl, IconButton, List, ListItem, TextField, Box } from "@mui/material";
import { TaskProps, TaskData } from "../../types/todoType";

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: TaskData[];
  onChangeTask: (task: TaskData) => void;
  onDeleteTask: (id: number) => void;
}) {
  const planTasksCount = tasks.filter((task) => task.status === "plan").length;
  const doneTasksCount = tasks.filter((task) => task.status === "done").length;

  return (
    <>
      {tasks.some((task) => task.status === "plan") && (
        <>
          <PlanTasks allPlanTasks={planTasksCount} />
          <List>
            {tasks
              .filter((task) => task.status === "plan")
              .map((task) => (
                <ListItem key={task.id} sx={{ padding: "0" }}>
                  <AddedTaskForm task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </ListItem>
              ))}
          </List>
        </>
      )}
      {tasks.some((task) => task.status === "done") && (
        <>
          <DoneTasks allDoneTasks={doneTasksCount} />
          <List>
            {tasks
              .filter((task) => task.status === "done")
              .map((task) => (
                <ListItem key={task.id} sx={{ padding: "0" }}>
                  <AddedTaskForm task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </ListItem>
              ))
              .reverse()}
          </List>
        </>
      )}
    </>
  );
}

function AddedTaskForm({ task, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const EditableTask = ({ task, onChange }: TaskProps) => {
    const [localText, setLocalText] = useState(task.text);

    return (
      <FormControl sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "450px", height: "60px" }}>
        <TextField
          label="Имя задачи"
          variant="standard"
          value={localText}
          sx={{ width: "450px", height: "60px" }}
          onChange={(e) => {
            setLocalText(e.target.value);
          }}
          InputLabelProps={{
            style: { paddingTop: "15px" },
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="save"
                size="medium"
                onClick={() => {
                  if (onChange) {
                    onChange({
                      ...task,
                      text: localText,
                      edited: true,
                    });
                  }
                  setIsEditing(false);
                }}
              >
                <DoneIcon fontSize="medium" color="primary" />
              </IconButton>
            ),
          }}
        />
      </FormControl>
    );
  };

  const ReadOnlyTask = ({ task, onChange }: TaskProps) => (
    <>
      <Checkbox
        checked={task.status === "done"}
        onClick={() => {
          if (onChange) {
            onChange({
              ...task,
              status: task.status === "done" ? "plan" : "done",
            });
          }
        }}
      />
      <Box style={{ textAlign: "left" }}>{task!.text}</Box>
      <Box sx={{ marginLeft: "auto" }}>
        {task.status === "done" ? null : (
          <IconButton
            aria-label="edit"
            size="medium"
            onClick={() => {
              if (onChange) {
                onChange({
                  ...task,
                  edited: true,
                });
                setIsEditing(true);
              }
            }}
          >
            <EditIcon fontSize="medium" color="primary" />
          </IconButton>
        )}
        <IconButton
          aria-label="delete"
          size="medium"
          onClick={() => {
            if (onDelete) {
              onDelete(task.id as number);
            }
          }}
        >
          <DeleteIcon fontSize="medium" style={{ color: "orange" }} />
        </IconButton>
      </Box>
    </>
  );

  return (
    <FormControl sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "450px", height: "44px" }}>
      {isEditing ? <EditableTask task={task} onChange={onChange} /> : <ReadOnlyTask task={task} onChange={onChange} />}
    </FormControl>
  );
}

export { AddedTaskForm };
