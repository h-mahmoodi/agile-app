import React from "react";
import Box from "../Box";
import Flex from "../Flex";
import IconButton from "../IconButton";
import Heading from "../Heading";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../store/appSlice";
import AddTaskFrom from "../panel/AddTaskForm";
import EditTaskForm from "../panel/EditTaskForm";
import AssignTaskFrom from "../panel/AssignTaskFrom";

function Modal({ width }) {
  const { isOpen, title, value } = useSelector((state) => state.app.modal);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(appActions.closeModal());
  };

  if (!isOpen) {
    return null;
  }
  return createPortal(
    <>
      <div
        onClick={closeModalHandler}
        className="absolute h-screen w-screen top-0 left-0  backdrop-blur-sm bg-slate-600/70 z-50"
      ></div>

      <Box
        bgColor="primary"
        padding="xl"
        rounded="md"
        className={`${width} z-50 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]`}
      >
        <Flex direction="col" gap="5">
          <Flex justify="between" className="w-full">
            <Heading type="h3">{title}</Heading>
            <IconButton icon="fi fi-br-cross" onClick={closeModalHandler} />
          </Flex>
          <div className="w-full">{value}</div>
        </Flex>
      </Box>
    </>,
    document.querySelector(".modal")
  );
}
// export const modals = {
//   addNewTask: {
//     title: "Add New Task",
//     value: <AddTaskFrom />,
//   },
//   updateTask: {
//     title: "Update Task",
//     value: <EditTaskForm />,
//   },
//   assignUser: {
//     title: "Assign Task For User",
//     value: <AssignTaskFrom />,
//   },
// };

export default Modal;
