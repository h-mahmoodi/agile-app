import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "../service/taskApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { appActions } from "../store/appSlice";

const useAddTask = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (task) => addTask(task),
    onSuccess: () => {
      console.log("added");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("New task added successfully");
      dispatch(appActions.closeModal());
    },
    onError: () => {
      console.log("error");
    },
  });

  return { mutate, isPending };
};

export default useAddTask;
