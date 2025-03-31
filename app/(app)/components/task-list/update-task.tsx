import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: "Title is Required!" }).max(250),
  description: z
    .string()
    .min(1, { message: "Description is Required!" })
    .max(250),
});
import { SquarePen } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useTaskStore } from "@/store/use-task-store";
import { UpdateTaskProps } from "@/types/type";

const UpdateTask: React.FC<UpdateTaskProps> = ({ id, title, description }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { updateTask } = useTaskStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: id,
      title: title,
      description: description,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateTask(values.id, values.title, values.description);

    setIsOpen(false);
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <SquarePen size={20} cursor="pointer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit your task below</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter description..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button onClick={() => form.handleSubmit(onSubmit)}>
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateTask;
