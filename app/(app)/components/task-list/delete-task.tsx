import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTaskStore } from "@/store/use-task-store";

const DeleteTask = ({ id }: { id: string }) => {
  const { deleteTask } = useTaskStore();

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Trash2 size={20} className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-red-500">Delete Task</DialogTitle>
            <DialogDescription>
              Are you sure that you want to delete this task?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogTrigger asChild>
              <Button
                variant="destructive"
                onClick={() => handleDeleteTask(id)}
              >
                Delete
              </Button>
            </DialogTrigger>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteTask;
