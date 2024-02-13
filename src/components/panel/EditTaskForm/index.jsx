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
import toast from "react-hot-toast";

const errorMessages = {
  title: "Please enter the title",
  priority: "Please select the priority",
  description: "Please enter the description",
};

const defaultErrors = {
  title: "",
  priority: "",
  description: "",
};

function EditTaskForm({ task }) {
  const defaultInputs = {
    title: task.title,
    priority: task.priority,
    description: task.description,
  };

  const dispatch = useDispatch();
  const modalValue = <AssignTaskFrom task={task} />;
  const { mutate: deleteMutate, isPending: deleteIsPending } = useDeleteTask();
  const { mutate: editMutate, isPending: editIsPending } = useEditTask();

  const [inputs, setInputs] = useState(defaultInputs);
  const [errors, setErrors] = useState(defaultErrors);

  const inputsChangeHandler = (field, value) => {
    if (!value) {
      setErrors((state) => ({
        ...state,
        [field]: errorMessages[field],
      }));
    } else {
      setErrors((state) => ({ ...state, [field]: "" }));
    }
    setInputs((state) => ({ ...state, [field]: value }));
  };

  const submitHandler = () => {
    setErrors({});
    Object.keys(inputs).map((inputKey) => {
      if (inputs[inputKey] === "") {
        setErrors((state) => ({
          ...state,
          [inputKey]: errorMessages[inputKey],
        }));
      }
      return true;
    });

    const newTask = {
      id: task.id,
      title: inputs.title,
      description: inputs.description,
      priority: inputs.priority,
      stage: "backlog",
      assign_to: "",
      date: task.date,
    };

    const formIsValidate =
      Boolean(inputs.title) &&
      Boolean(inputs.priority) &&
      Boolean(inputs.description);

    if (formIsValidate) {
      editMutate(newTask);
    } else {
      Object.keys(errors).map((key) => {
        if (errors[key] !== "") {
          toast.error(errors[key]);
        }
        return true;
      });
    }
  };
  return (
    <Flex direction="col" gap="5">
      <Input
        width="full"
        label="Task Title"
        id="title"
        value={inputs.title}
        onChange={(e) => inputsChangeHandler("title", e.target.value)}
        error={errors?.title}
      />
      <SelectOption
        width="full"
        label="Task Priority"
        id="priority"
        value={inputs.priority}
        onChange={(e) => inputsChangeHandler("priority", e.target.value)}
        error={errors?.priority}
      >
        <option value="">Select</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </SelectOption>
      <TextArea
        width="full"
        label="Task Description"
        id="description"
        value={inputs.description}
        onChange={(e) => inputsChangeHandler("description", e.target.value)}
        error={errors?.description}
      />
      <Flex justify="between" className="w-full">
        <Button
          btnStyle="orange"
          size="md"
          className="flex items-center gap-3"
          onClick={() =>
            dispatch(
              appActions.openModal({
                title: "Assign Task to User",
                value: modalValue,
              })
            )
          }
        >
          <span>Assign to user</span>
        </Button>

        <Flex gap="3">
          <Button
            btnStyle="red"
            size="md"
            className="flex items-center gap-3"
            disabled={deleteIsPending}
            onClick={() => deleteMutate(task.id)}
          >
            {deleteIsPending ? (
              <>
                <span>Deleting</span>
                <Spinner />
              </>
            ) : (
              <span>Delete</span>
            )}
          </Button>
          <Button
            btnStyle="indigo"
            size="md"
            className="flex items-center gap-3"
            disabled={editIsPending}
            onClick={submitHandler}
          >
            {editIsPending ? (
              <>
                <span>Updating</span>
                <Spinner />
              </>
            ) : (
              <span>Update</span>
            )}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default EditTaskForm;
