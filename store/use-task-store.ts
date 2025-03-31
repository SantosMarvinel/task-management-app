import { nanoid } from "nanoid";
import { TaskData } from "@/db/dummy-data";
import { TaskStore } from "@/types/type";
import { create } from "zustand";

export const useTaskStore = create<TaskStore>()((set) => ({
  task: TaskData,
  addTask: (title, description) =>
    set((state) => ({
      task: [
        ...state.task,
        {
          id: nanoid(),
          title,
          description,
          status: "Pending",
        },
      ],
    })),

  isCompleted: (id) =>
    set((state) => ({
      task: state.task.map((data) =>
        data.id === id
          ? {
              ...data,
              status: data.status === "Pending" ? "Completed" : "Pending",
            }
          : data
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      task: state.task.filter((data) => data.id !== id),
    })),

  updateTask: (id, title, description) =>
    set((state) => ({
      task: state.task.map((data) =>
        data.id === id
          ? { ...data, title: title, description: description }
          : data
      ),
    })),
}));
