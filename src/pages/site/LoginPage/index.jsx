import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Flex from "../../../components/Flex";
import Heading from "../../../components/Heading";
import Box from "../../../components/Box";
import Button from "../../../components/Button";
import {
  emailValidation,
  passwordValidation,
} from "../../../helpers/validation";
import useGetUsers from "../../../hooks/useGetUsers";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: users } = useGetUsers();
  const user = useSelector((state) => state.user);

  const [inputs, setInputs] = useState({
    email: user.email ? user.email : "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    form: "",
  });

  useEffect(() => {
    if (user.isLogin) {
      navigate("/panel");
    }
  }, [navigate, user.isLogin]);

  const inputsHandler = (field, value) => {
    setInputs((inputs) => ({ ...inputs, [field]: value }));

    if (field === "email") {
      emailValidation(value, setErrors);
    }
    if (field === "password") {
      passwordValidation(value, setErrors);
    }
  };

  const loginHandler = () => {
    emailValidation(inputs.email, setErrors);
    passwordValidation(inputs.password, setErrors);
    const validate =
      Boolean(!errors.email && inputs.email) &&
      Boolean(!errors.password && inputs.password);
    let existUser = null;
    if (!validate) {
      toast.error("Please check and fill the inputs");
      return;
    }
    existUser = users.find((user) => {
      if (user.email === inputs.email && user.password === inputs.password) {
        return user;
      }
    });

    if (!existUser) {
      toast.error("Email or Password not currect");
      return;
    }

    toast.success(`Login Successfull. Hi ${existUser.name}`);
    dispatch(userActions.login(existUser));
    localStorage.setItem("user_token", existUser.token);
    navigate("/panel");
  };

  if (user.isLogin) {
    return null;
  }

  return (
    <section className="h-screen  flex justify-center items-center">
      <Box className="border-t-8 border-indigo-800" padding="xl">
        <Flex direction="col" gap={8}>
          <Flex direction="col">
            <Heading type="h1">Agile App</Heading>
            <Heading type="h3" className="text-slate-500">
              Login to the panel
            </Heading>
            {errors.form && (
              <Heading type="p" className="text-red-500">
                {errors.form}
              </Heading>
            )}
          </Flex>

          <Flex direction="col" gap={2} className="w-[400px]">
            <Input
              type="email"
              label="Your email address"
              id="email"
              placeholder="Example@gmail.com"
              width="full"
              error={errors.email ? errors.email : ""}
              value={inputs.email}
              onChange={(e) => inputsHandler("email", e.target.value)}
              icon="fi fi-br-user"
            />
            <Input
              type="password"
              label="Your password"
              id="password"
              width="full"
              error={errors.password ? errors.password : ""}
              value={inputs.password}
              onChange={(e) => inputsHandler("password", e.target.value)}
              icon="fi fi-br-envelope"
            />
          </Flex>
        </Flex>
        <Flex direction="col" gap={3} className="mt-6">
          <Button btnStyle="indigo" className="w-full" onClick={loginHandler}>
            Login
          </Button>
          <Button link="/register" className="w-full">
            Register new account
          </Button>
        </Flex>
      </Box>
    </section>
  );
}

export default LoginPage;
