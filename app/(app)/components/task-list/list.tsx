import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useTaskStore } from "@/store/use-task-store";
import { Delete, Trash2 } from "lucide-react";
import UpdateTask from "./update-task";
import DeleteTask from "./delete-task";

const List = () => {
  const task = useTaskStore((state) => state.task);
  const { isCompleted } = useTaskStore();

  const toggleCompleted = (id: string) => {
    isCompleted(id);
  };

  return (
    <div className="">
      <ul className="flex justify-center gap-5 flex-wrap">
        {task.map((data) => (
          <li key={data.id}>
            <Card className="w-[450px]">
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className="flex justify-between">
                  <Badge
                    onClick={() => toggleCompleted(data.id)}
                    className="cursor-pointer"
                    variant={
                      data.status === "Pending" ? "destructive" : "default"
                    }
                  >
                    {data.status}
                  </Badge>

                  <div className="flex gap-4">
                    <DeleteTask id={data.id} />
                    <UpdateTask
                      id={data.id}
                      title={data.title}
                      description={data.description}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
