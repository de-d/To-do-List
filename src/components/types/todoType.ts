type TaskData = {
  id?: number;
  text?: string;
  status?: string;
  edited?: boolean;
};

type Action = { type: "added"; id: number; text: string } | { type: "changed"; task: TaskData } | { type: "deleted"; id: number } | { type: "none" };

type TaskProps = {
  task: TaskData;
  onChange?: (task: TaskData) => void;
  onDelete?: (id: number) => void;
};

type AddTaskProps = {
  onAddTask: (text: string) => void;
};

export type { Action, TaskProps, TaskData, AddTaskProps };
