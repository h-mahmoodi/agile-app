import React, { useCallback, useEffect, useState } from "react";
import Input from "../../../components/Input";
import Flex from "../../../components/Flex";
import Heading from "../../../components/Heading";
import Box from "../../../components/Box";
import Button from "../../../components/Button";
import {
  emailValidation,
  nameValidation,
  passwordConfirmationValidation,
  passwordValidation,
} from "../../../helpers/validation";
import Spinner from "../../../components/Spinner";
import useUserRegistter from "../../../hooks/useUserRegister";
import { getUsers } from "../../../service/userApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useGetUsers from "../../../hooks/useGetUsers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const initialInputs = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

function RegisterPage() {
  const queryClient = useQueryClient();

  const { data: users, isLoading: usersIsLoading } = useGetUsers();

  const [inputs, setInputs] = useState(initialInputs);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const newUser = {
    name: inputs.name,
    email: inputs.email,
    password: inputs.password,
    token: "1234567890",
  };

  const checkUserExistanceByName = useCallback(() => {
    if (!users) {
      return false;
    }
    const existUser = users.find(
      (user) => user.name.toLowerCase() === inputs.name.toLowerCase()
    );
    if (existUser) {
      setErrors((state) => ({
        ...state,
        name: "This name is already exist",
      }));
      return false;
    }
    return true;
  }, [inputs.name, users]);

  const checkUserExistanceByEmail = useCallback(() => {
    if (!users) {
      return false;
    }
    const existUser = users.find(
      (user) => user.email.toLowerCase() === inputs.email.toLowerCase()
    );
    if (existUser) {
      setErrors((state) => ({
        ...state,
        email: "This email is already exist",
      }));
      return false;
    }
    return true;
  }, [inputs.email, users]);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLogin) {
      navigate("/panel");
    }
  }, [navigate, user.isLogin]);

  useEffect(() => {
    checkUserExistanceByName();
    checkUserExistanceByEmail();
  }, [checkUserExistanceByName, checkUserExistanceByEmail]);

  const { mutate, isPending, isSuccess } = useUserRegistter();

  const inputsHandler = (field, value) => {
    setInputs((inputs) => ({ ...inputs, [field]: value }));

    if (field === "name") {
      nameValidation(value, setErrors);
    }
    if (field === "email") {
      emailValidation(value, setErrors);
    }
    if (field === "password") {
      passwordValidation(value, setErrors);
      passwordConfirmationValidation(
        inputs.passwordConfirmation,
        value,
        setErrors
      );
    }
    if (field === "passwordConfirmation") {
      passwordConfirmationValidation(value, inputs.password, setErrors);
      passwordValidation(inputs.password, setErrors);
    }
  };

  const loginHandler = () => {
    nameValidation(inputs.name, setErrors);
    emailValidation(inputs.email, setErrors);
    passwordValidation(inputs.password, setErrors);
    passwordConfirmationValidation(
      inputs.passwordConfirmation,
      inputs.password,
      setErrors
    );
    checkUserExistanceByName();
    checkUserExistanceByEmail();

    const nameValidate = Boolean(!errors.name && inputs.name);
    const emailValidate = Boolean(!errors.email && inputs.email);
    const passwordValidate = Boolean(!errors.password && inputs.password);
    const passwordConfirmationValidate = Boolean(
      !errors.passwordConfirmation && inputs.passwordConfirmation
    );

    const validate =
      nameValidate &&
      emailValidate &&
      passwordValidate &&
      passwordConfirmationValidate;

    if (!validate) {
      toast.error("Please check and fill the inputs");
      return;
    }

    mutate(newUser);

    setInputs(initialInputs);
  };

  if (user.isLogin) {
    return null;
  }

  return (
    <section className="h-screen  flex justify-center items-center">
      <Box className="border-t-8 border-indigo-800">
        <Flex direction="col" gap={8}>
          <Flex direction="col">
            <Heading type="h1">Agile App</Heading>
            <Heading type="h3" className="text-slate-500">
              Register new account
            </Heading>
            {errors.form && (
              <Heading type="p" className="text-red-500">
                {errors.form}
              </Heading>
            )}
          </Flex>
          <Flex direction="col" gap={2}>
            <Input
              type="text"
              label="Your name"
              id="name"
              placeholder="Hesam"
              width="lg"
              error={errors.name ? errors.name : ""}
              value={inputs.name}
              onChange={(e) => inputsHandler("name", e.target.value)}
              icon="fi fi-br-user"
            />
            <Input
              type="email"
              label="Your email address"
              id="email"
              placeholder="Example@gmail.com"
              width="lg"
              error={errors.email ? errors.email : ""}
              value={inputs.email}
              onChange={(e) => inputsHandler("email", e.target.value)}
              icon="fi fi-br-envelope"
            />
            <Input
              type="password"
              label="Your password"
              id="password"
              width="lg"
              error={errors.password ? errors.password : ""}
              value={inputs.password}
              onChange={(e) => inputsHandler("password", e.target.value)}
              icon="fi fi-br-lock"
            />
            <Input
              type="password"
              label="Your confirmation password"
              id="confirmation-password"
              width="lg"
              error={
                errors.passwordConfirmation ? errors.passwordConfirmation : ""
              }
              value={inputs.passwordConfirmation}
              onChange={(e) =>
                inputsHandler("passwordConfirmation", e.target.value)
              }
              icon="fi fi-br-lock"
            />
          </Flex>
        </Flex>
        <Flex direction="col" gap={3} className="mt-6">
          <Button
            btnStyle="indigo"
            className="w-full"
            onClick={loginHandler}
            disabled={isPending}
          >
            {isPending ? <Spinner /> : "Register"}
          </Button>
          <Button link="/login" className="w-full">
            Already have an account
          </Button>
        </Flex>
      </Box>
    </section>
  );
}

export default RegisterPage;
