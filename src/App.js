import { useState, useEffect } from "react";
import List from "./components/List";
import db from "./db/database.json";

function App() {
  const [tasks, setTasks] = useState(db);
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const initialTheme = localStorage.getItem("theme") || "light";
    localStorage.setItem("theme", initialTheme);
    setTheme(initialTheme);
  }, []);
  function changeTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    console.log("theme: ", theme);
  }

  function addTask(newItem) {
    console.log("add Task");
    const maxId = () => {
      let currentMax = 0;
      tasks.forEach((item) => {
        if (item._id > currentMax) currentMax = item._id;
      });
      return currentMax;
    };
    const newTask = {
      _id: maxId() + 1,
      content: newItem,
      active: true,
    };
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
  }
  function deleteTask(id) {
    console.log("delete Task");
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);
  }
  function disactiveTask(id) {
    console.log("disactive Task");
    const newTasks = [...tasks];
    const taskToEdit = newTasks.find((task) => task._id === id);
    taskToEdit.active = !taskToEdit.active;
    setTasks(newTasks);
  }
  function clearCompleted() {
    console.log("clear");
    const newTasks = tasks.filter((task) => task.active !== false);
    setTasks(newTasks);
  }
  return (
    <div className={`app ${theme === "light" ? "" : "dark"}`}>
      <div className="logo">
        <List
          tasks={tasks}
          setTasks={setTasks}
          addTask={addTask}
          deleteTask={deleteTask}
          disactiveTask={disactiveTask}
          changeTheme={changeTheme}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
