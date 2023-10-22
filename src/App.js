import { useState } from "react";
import List from "./components/List";
import db from "./db/database.json";

function App() {
  const [tasks, setTasks] = useState(db);
  tasks.map((task) => {
    return task;
  });
  function addTask(newItem) {
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
      active: true
    };
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
  }
  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);
  }
  function disactiveTask(id) {
    const newTasks = [...tasks];
    const taskToEdit = newTasks.find((task) => task._id === id);
    taskToEdit.active = !taskToEdit.active;
    setTasks(newTasks);
  }
  return (
    <div className="App">
      <div className="logo">
        <List
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          disactiveTask={disactiveTask}
        />
      </div>
    </div>
  );
}

export default App;
