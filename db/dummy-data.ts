import { TaskModel } from "@/types/type";
import { nanoid } from "nanoid";

export const TaskData: TaskModel[] = [
  {
    id: nanoid(),
    title: "Learn React",
    description: "Learn React Hooks",
    status: "Pending",
  },

  {
    id: nanoid(),
    title: "Learn CSS",
    description: "Learn CSS flex box",
    status: "Completed",
  },
];
