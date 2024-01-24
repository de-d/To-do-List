import { useReducer } from "react";
import tasksReducer from "./tasksReducer";
import { AddTask } from "./tasksComponents/AddTask";
import TaskList from "./tasksComponents/TaskList";
import { Box } from "@mui/material";

function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <Box>
      <AddTask onAddTask={(text) => dispatch({ type: "added", id: tasks.length, text })} />
      <TaskList tasks={tasks} onChangeTask={(task) => dispatch({ type: "changed", task })} onDeleteTask={(id) => dispatch({ type: "deleted", id })} />
    </Box>
  );
}

const initialTasks = [
  { id: 0, text: "Практиковать UI фреймфорки (React + MUi)", status: "plan", edited: false },
  { id: 1, text: "Практиковать UI фреймфорки (React + MUi)", status: "done", edited: false },
  { id: 2, text: "Сделать логику приложения", status: "plan", edited: false },
  { id: 3, text: "Эта задача в процессе редактирования", status: "plan", edited: true },
  { id: 4, text: "Сделать логику приложения", status: "plan", edited: false },
  { id: 5, text: "Сделать логику приложения", status: "done", edited: false },
  { id: 6, text: "Сделать логику приложения", status: "done", edited: false },
  { id: 7, text: "Сделать логику приложения", status: "done", edited: false },
  { id: 8, text: "Не забыть про ревью кода", status: "plan", edited: false },
];

export { TaskApp };
