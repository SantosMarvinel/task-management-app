export type TaskModel = {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "Completed";
};

export type TaskStore = {
  task: TaskModel[];
  addTask: (title: string, description: string) => void;
  isCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, title: string, description: string) => void;
};

export interface UpdateTaskProps {
  id: string;
  title: string;
  description: string;
}
