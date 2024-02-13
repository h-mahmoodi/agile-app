import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers, registerUser } from "../service/userApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const useUserRegistter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (newUser) => {
      const myPromise = registerUser(newUser);
      toast.promise(myPromise, {
        loading: "Waiting for registration... ",
        success: "Registered successfully",
        error: "Registeration error",
      });
      return myPromise;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log(data);
      dispatch(userActions.register(data.email));
      navigate("/login");
    },
    onError: () => {
      console.log("register error");
    },
  });

  return { mutate, isPending, isSuccess };
};

export default useUserRegistter;
