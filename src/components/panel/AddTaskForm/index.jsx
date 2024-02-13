import React, { useEffect, useMemo, useRef, useState } from "react";
import Flex from "../../Flex";
import Input from "../../Input";
import TextArea from "../../TextArea";
import Button from "../../Button";
import useAddTask from "../../../hooks/useAddTask";
import Spinner from "../../Spinner";
import SelectOption from "../../SelectOption";
import { useDispatch } from "react-redux";
import { appActions } from "../../../store/appSlice";
import toast from "react-hot-toast";

const errorMessages = {
  title: "Please enter the title",
  priority: "Please select the priority",
  description: "Please enter the description",
};

const defaultInputs = {
  title: "",
  priority: "",
  description: "",
};

const defaultErrors = {
  title: "",
  priority: "",
  description: "",
};

function AddTaskFrom() {
  const dispatch = useDispatch();
  const { mutate, isPending } = useAddTask();

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
      title: inputs.title,
      priority: inputs.priority,
      description: inputs.description,
      stage: "backlog",
      user_id: "",
      date: Date.now(),
    };

    const formIsValidate =
      Boolean(inputs.title) &&
      Boolean(inputs.priority) &&
      Boolean(inputs.description);

    if (formIsValidate) {
      mutate(newTask);
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
        label="Task priority"
        id="priority"
        value={inputs.priority}
        onChange={(e) => inputsChangeHandler("priority", e.target.value)}
        error={errors?.priority}
        options={{ high: "High", medium: "Medium", low: "Low" }}
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
      <Flex justify="end" gap="3" className="w-full">
        <Button
          btnStyle="dark"
          size="md"
          className="flex items-center gap-3"
          onClick={() => dispatch(appActions.closeModal())}
        >
          <span>Cancel</span>
        </Button>
        <Button
          btnStyle="indigo"
          size="md"
          className="flex items-center gap-3"
          disabled={isPending}
          onClick={submitHandler}
        >
          {isPending ? (
            <>
              <span>Creating</span>
              <Spinner />
            </>
          ) : (
            <span>Create</span>
          )}
        </Button>
      </Flex>
    </Flex>
  );
}

export default AddTaskFrom;
