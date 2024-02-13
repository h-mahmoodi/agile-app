export const getUsers = async () => {
  const response = await fetch("http://localhost:9000/users");
  if (!response.ok) {
    throw new Error("Get response error");
  }
  const users = await response.json();
  return users;
};

export const registerUser = async (user) => {
  const response = await fetch("http://localhost:9000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Get response error");
  }
  const data = await response.json();
  return data;
};
