import React, { useState } from "react";
import Flex from "../../Flex";
import Input from "../../Input";
import TextArea from "../../TextArea";
import Button from "../../Button";
import useAddTask from "../../../hooks/useAddTask";
import Spinner from "../../Spinner";
import SelectOption from "../../SelectOption";
import { useDispatch } from "react-redux";
import { appActions } from "../../../store/appSlice";
import AssignTaskFrom from "../AssignTaskFrom";
import useDeleteTask from "../../../hooks/useDeleteTask";
import useEditTask from "../../../hooks/useEditTask";

function ShowTaskDetails({ task }) {
  const dispatch = useDispatch();
  const modalValue = <AssignTaskFrom task={task} />;
  const { mutate: returnMutate, isPending: returnIsPending } = useEditTask();
  const { mutate: startMutate, isPending: startIsPending } = useEditTask();
  // const newTask = {
  //   id: task.id,
  //   title,
  //   description,
  //   priority,
  //   stage: "backlog",
  //   assign_to: "",
  //   date: task.date,
  // };
  return (
    <Flex direction="col" gap="5">
      <Input
        width="full"
        label="Task Title"
        id="title"
        value={task.title}
        disabled={true}
      />
      <Flex gap="5" justify="between" className="w-full">
        <Input
          width="full"
          label="Task Priority"
          id="priority"
          value={task.priority}
          disabled={true}
        />
        <Input
          width="full"
          label="User"
          id="user"
          value={task.user}
          disabled={true}
        />
      </Flex>

      <TextArea
        width="full"
        label="Task Description"
        id="description"
        value={task.description}
        disabled={true}
      />
      <Flex justify="end" align="center" className="w-full">
        <Flex gap="3">
          <Button
            btnStyle="dark"
            size="md"
            className="flex items-center gap-3"
            disabled={returnIsPending}
            onClick={() =>
              returnMutate({ ...task, user: "", stage: "backlog" })
            }
          >
            {returnIsPending ? (
              <>
                <span>Updating</span>
                <Spinner />
              </>
            ) : (
              <span>Return to backlog</span>
            )}
          </Button>
          {task.stage === "todo" && (
            <Button
              btnStyle="emerald"
              size="md"
              className="flex items-center gap-3"
              disabled={startIsPending}
              onClick={() => startMutate({ ...task, stage: "inprogress" })}
            >
              {startIsPending ? (
                <>
                  <span>Updating</span>
                  <Spinner />
                </>
              ) : (
                <span>Start the task</span>
              )}
            </Button>
          )}

          {task.stage === "inprogress" && (
            <Button
              btnStyle="indigo"
              size="md"
              className="flex items-center gap-3"
              disabled={startIsPending}
              onClick={() => startMutate({ ...task, stage: "done" })}
            >
              {startIsPending ? (
                <>
                  <span>Updating</span>
                  <Spinner />
                </>
              ) : (
                <span>End the task</span>
              )}
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ShowTaskDetails;
