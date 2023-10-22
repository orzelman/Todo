import { useState } from "react";
import List from "./components/List";

function App() {
  const tasksDB = ["water flowers", "Repair a car", "Make a shopping"];
  const [tasks, setTasks] = useState(tasksDB);
  tasks.map(task=> {
    return (task)
  })
  function addTask(newTask) {
    const copyTasks = [...tasks]
    copyTasks.push(newTask);
    setTasks(copyTasks)
  }
  return (
    <div className="App">
      <div className="logo">
        <List tasks={tasks} addTask = {addTask}/>
      </div>
    </div>
  );
}

export default App;
