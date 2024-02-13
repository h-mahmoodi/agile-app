import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignTask, editTask } from "../service/taskApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { appActions } from "../store/appSlice";

const useAssignTask = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (task) => assignTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task assigned successfully");
      dispatch(appActions.closeModal());
    },
    onError: () => {
      toast.error("Error assign task");
    },
  });

  return { mutate, isPending };
};

export default useAssignTask;
