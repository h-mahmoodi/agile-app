export const getTasks = async () => {
  const response = await fetch(`http://localhost:9000/tasks`);
  if (!response.ok) {
    throw new Error("Error Get tasks data on Service");
  }
  const data = response.json();
  return data;
};

export const addTask = async (task) => {
  const response = await fetch(`http://localhost:9000/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Error Add tasks data on Service");
  }
  const data = await response.json();
  return data;
};

export const editTask = async (task) => {
  const response = await fetch(`http://localhost:9000/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Error Edit tasks data on Service");
  }
  const data = await response.json();
  return data;
};

export const assignTask = async (task) => {
  const response = await fetch(`http://localhost:9000/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Error Assign tasks data on Service");
  }
  const data = await response.json();
  return data;
};

export const deleteTask = async (id) => {
  const response = await fetch(`http://localhost:9000/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error Delete tasks data on Service");
  }
  const data = response.json();
  return data;
};
