import React, { useState } from "react";
import Flex from "../../../components/Flex";
import Button from "../../../components/Button";
import TaskCategoryCard from "../../../components/panel/TaskCategoryCard";
import Heading from "../../../components/Heading";
import Modal from "../../../components/Modal";
import AddTaskFrom from "../../../components/panel/AddTaskForm";
import { useDispatch } from "react-redux";
import { appActions } from "../../../store/appSlice";

function BoardPage() {
  const dispatch = useDispatch();
  const modalValue = <AddTaskFrom />;

  const openModalHandler = () => {
    dispatch(
      appActions.openModal({ title: "Add new task", value: modalValue })
    );
  };

  return (
    <>
      <section className="">
        <div className="bg-slate-900 p-3">
          <Flex justify="between" align="center">
            <Heading>Job Board</Heading>
            <Button
              btnStyle="indigo"
              size="md"
              className="flex items-center gap-3"
              onClick={openModalHandler}
            >
              <span>Create Task</span>
              <i className="fi fi-rr-arrow-small-right flex"></i>
            </Button>
          </Flex>
        </div>
        <div className="grid grid-cols-4 gap-5 p-3">
          <TaskCategoryCard title="BackLog" stage="backlog" />
          <TaskCategoryCard title="To Do" stage="todo" />
          <TaskCategoryCard title="In Progress" stage="inprogress" />
          <TaskCategoryCard title="Done" stage="done" />
        </div>
      </section>
    </>
  );
}

export default BoardPage;
