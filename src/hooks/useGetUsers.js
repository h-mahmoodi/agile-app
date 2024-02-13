import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../service/userApi";

const useGetUsers = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return { data, isLoading };
};

export default useGetUsers;
