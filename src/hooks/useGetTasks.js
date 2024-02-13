import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../service/taskApi";

const useGetTasks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  return { data, isLoading };
};

export default useGetTasks;
