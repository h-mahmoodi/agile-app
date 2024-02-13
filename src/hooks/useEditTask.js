import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTask } from "../service/taskApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { appActions } from "../store/appSlice";

const useEditTask = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (task) => editTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task edited successfully");
      dispatch(appActions.closeModal());
    },
    onError: () => {
      toast.error("Error deleted task");
    },
  });

  return { mutate, isPending };
};

export default useEditTask;
