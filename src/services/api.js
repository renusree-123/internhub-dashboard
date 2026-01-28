export const getTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Learn React Basics", status: "Pending" },
        { id: 2, title: "Build InternHub Dashboard", status: "In Progress" }
      ]);
    }, 1000);
  });
};
