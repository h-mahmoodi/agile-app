import React, { useEffect, useState } from "react";
import Flex from "../../Flex";
import Button from "../../Button";
import useAddTask from "../../../hooks/useAddTask";
import Spinner from "../../Spinner";
import SelectOption from "../../SelectOption";
import { useDispatch } from "react-redux";
import { appActions } from "../../../store/appSlice";
import EditTaskForm from "../EditTaskForm";
import useGetUsers from "../../../hooks/useGetUsers";
import useAssignTask from "../../../hooks/useAssignTask";

function AssignTaskFrom({ task }) {
  const dispatch = useDispatch();
  const modalValue = <EditTaskForm task={task} />;
  const { mutate, isPending } = useAssignTask(task.id);
  const [user, setUser] = useState(task.user);
  const [error, setError] = useState("");
  const { data: users, isLoading: usersIsLoading } = useGetUsers();

  const inputChangeHandler = (value) => {
    if (!value) {
      setError("Please select a user");
    } else {
      setError("");
    }
    setUser(value);
  };

  const assignHandler = () => {
    if (!user) {
      setError("Please select a user");
      return;
    }
    mutate({ ...task, stage: "todo", user: user });
  };

  return (
    <Flex direction="col" gap="5">
      {usersIsLoading && <Spinner />}
      {!usersIsLoading && (
        <SelectOption
          width="full"
          label="Select user"
          id="title"
          value={user}
          onChange={(e) => {
            inputChangeHandler(e.target.value);
          }}
          error={error}
        >
          <option value="">Select</option>
          {users.map((userItem) => (
            <option value={userItem.name} key={userItem.id}>
              {userItem.name}
            </option>
          ))}
        </SelectOption>
      )}

      <Flex justify="end" gap="3" className="w-full">
        <Button
          btnStyle="dark"
          size="md"
          className="flex items-center gap-3"
          onClick={() =>
            dispatch(
              appActions.openModal({ title: "Add new task", value: modalValue })
            )
          }
        >
          <span>Back</span>
        </Button>
        <Button
          btnStyle="indigo"
          size="md"
          className="flex items-center gap-3"
          disabled={isPending}
          onClick={assignHandler}
        >
          {isPending ? (
            <>
              <span>Assigning</span>
              <Spinner />
            </>
          ) : (
            <span>Assign</span>
          )}
        </Button>
      </Flex>
    </Flex>
  );
}

export default AssignTaskFrom;
