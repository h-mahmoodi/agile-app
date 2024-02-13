import React from "react";
import Box from "../../Box";
import Spinner from "../../Spinner";
import useGetTasks from "../../../hooks/useGetTasks";
import TaskCard from "../TaskCard";
import Button from "../../Button";

function TaskCategoryCard({ title, stage }) {
  const { data, isLoading } = useGetTasks();
  const tasks = !isLoading ? data.filter((task) => task.stage === stage) : [];

  return (
    <Box
      rounded="md"
      bgColor="primary_dark"
      className="h-[770px] overflow-auto"
    >
      <h2 className=" font-semibold text-lg mb-4">{title}</h2>
      {/* <hr className="w-full border-slate-600 my-2" /> */}
      {isLoading && <Spinner />}
      {tasks.length === 0 && (
        <div className="text-center p-2">there is nothing!!</div>
      )}
      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </Box>
  );
}

export default TaskCategoryCard;
