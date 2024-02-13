export const nameValidation = (name, setErrors) => {
  if (!name) {
    setErrors((state) => ({
      ...state,
      name: "Please enter your name",
    }));
    return;
  } else if (name.length < 3) {
    setErrors((state) => ({
      ...state,
      name: "Name must be at least 3 charecter",
    }));
    return;
  }
  setErrors((state) => ({
    ...state,
    name: "",
  }));
};

export const emailValidation = (email, setErrors) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email) {
    setErrors((state) => ({
      ...state,
      email: "Please enter your email address",
    }));
    return;
  } else if (!emailRegex.test(email)) {
    setErrors((state) => ({
      ...state,
      email: "Please enter a valid email address",
    }));
    return;
  }

  setErrors((state) => ({
    ...state,
    email: "",
  }));
};

export const passwordValidation = (password, setErrors) => {
  if (!password) {
    setErrors((state) => ({
      ...state,
      password: "Please enter your password",
    }));
    return;
  } else if (password.length < 5) {
    setErrors((state) => ({
      ...state,
      password: "Password must be at least 5 charecter",
    }));
    return;
  }
  setErrors((state) => ({
    ...state,
    password: "",
  }));
};

export const passwordConfirmationValidation = (
  passwordConfirmation,
  password,
  setErrors
) => {
  if (!passwordConfirmation) {
    setErrors((state) => ({
      ...state,
      passwordConfirmation: "Please enter your password confirmation",
    }));
    return;
  } else if (passwordConfirmation !== password) {
    setErrors((state) => ({
      ...state,
      passwordConfirmation: "Password and confirmation must be the same",
    }));
    return;
  }
  setErrors((state) => ({
    ...state,
    passwordConfirmation: "",
  }));
};
