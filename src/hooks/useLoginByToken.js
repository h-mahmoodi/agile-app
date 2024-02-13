import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";
import useGetUsers from "./useGetUsers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLoginByToken = () => {
  const navigate = useNavigate();
  const { data: users, isLoading } = useGetUsers();

  const reduxUser = useSelector((state) => state.user);

  const [isLogedin, setIsLogedIn] = useState(reduxUser.isLogedin);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogedin) {
      return;
    }
    if (isLoading) {
      return;
    }
    const token = localStorage.user_token ? localStorage.user_token : "";
    if (!token) {
      navigate("/login");
      return;
    }
    const onlineUser = users.find((user) => user.token === token);
    if (!onlineUser) {
      return;
    }
    setIsLogedIn(true);

    dispatch(userActions.login(onlineUser));
  }, [dispatch, isLoading, users, isLogedin]);

  return { isLoading, isLogedin };
};

export default useLoginByToken;
