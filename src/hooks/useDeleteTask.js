import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../service/taskApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { appActions } from "../store/appSlice";

const useDeleteTask = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteTask(id),
    onSuccess: () => {
      toast.success("Task deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      dispatch(appActions.closeModal());
    },
    onError: () => {
      toast.error("Error deleted task");
    },
  });

  return { mutate, isPending };
};

export default useDeleteTask;
