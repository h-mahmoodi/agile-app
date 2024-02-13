import React, { useState } from "react";
import Button from "../../Button";
import Flex from "../../Flex";
import Box from "../../Box";
import Badge from "../../Badge";
import Heading from "../../Heading";
import Modal, { modals } from "../../Modal";
import AddTaskFrom from "../AddTaskForm";
import EditTaskForm from "../EditTaskForm";
import { useDispatch } from "react-redux";
import { appActions, appReducer } from "../../../store/appSlice";
import ShowTaskDetails from "../ShowTaskDetails";

function TaskCard({ task }) {
  const dispatch = useDispatch();
  const modalValue = task.user ? (
    <ShowTaskDetails task={task} />
  ) : (
    <EditTaskForm task={task} />
  );
  const modalTitle = task.user ? "Task details" : "Update the task";
  const newDate = new Date(task.date);
  const time = `${newDate.toDateString()} - ${newDate.getHours()}:${newDate.getMinutes()}`;

  return (
    <>
      <Box
        bgColor="primary_light"
        className="my-8 border-b-2 border-slate-700 hover:scale-95 duration-200 cursor-pointer relative z-0"
        rounded="md"
        padding="sm"
        onClick={() =>
          dispatch(
            appActions.openModal({
              title: modalTitle,
              value: modalValue,
            })
          )
        }
      >
        <Flex direction="col" gap="2">
          <Flex
            gap="3"
            justify="between"
            className="w-full absolute -top-4 -left-0"
          >
            <Badge bgColor="slate_700" label={`#${task.id}`} />
            <Badge bgColor="slate_700" label={time} />
          </Flex>
          <Flex
            direction="col"
            gap="1"
            className="text-slate-300 bg-slate-800 w-full mt-3 p-2 rounded-md "
          >
            <Heading type="h3">{task.title}</Heading>
            <Heading type="p">{task.description}</Heading>
          </Flex>
          <Flex gap="3" justify="between" className="w-full">
            {task.user && <Badge bgColor="emerald" label={` ${task.user}`} />}
            {!task.user && <Badge bgColor="slate" label="not assigned" />}
            {task.priority === "high" && <Badge bgColor="red" label="High" />}
            {task.priority === "medium" && (
              <Badge bgColor="orange" label="Medium" />
            )}
            {task.priority === "low" && <Badge bgColor="emerald" label="Low" />}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default TaskCard;
