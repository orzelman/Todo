import React, { useState } from "react";
import ListFooter from "./ListFooter";
import AddItem from "./AddItem";
import Filters from "./Filters";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { SortableItem } from "../SortableItem";

function List(props) {
  const [filter, setFilter] = useState("all");
  function newFilter(value) {
    setFilter(value);
  }
  return (
    <div className="todo-container">
      <div className="todo-logo"></div>
      <div className="todo">
        <div className="todo-top">
          <h1>TODO</h1>
          <h2 className="theme-icon" onClick={props.changeTheme}>
            <svg
              className="theme-icon-moon"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
              />
            </svg>
            <svg
              className="theme-icon-sun"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
              />
            </svg>
          </h2>
        </div>
        <AddItem addTask={props.addTask} />

        <div className="todo-list">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={props.tasks.map((task) => task.content)}>
              {props.tasks.map((task) => (
                <SortableItem
                  key={task._id}
                  id={task.content}
                  task={task}
                  deleteTask={props.deleteTask}
                  disactiveTask={props.disactiveTask}
                  filter={filter}
                ></SortableItem>
              ))}
            </SortableContext>
          </DndContext>

          <ListFooter
            tasks={props.tasks}
            newFilter={newFilter}
            clearCompleted={props.clearCompleted}
            activeFilter={filter}
          />
        </div>
        <div className="mobile-filter">
          <Filters newFilter={newFilter} activeFilter={filter} />
        </div>
        <div className="todo-drag">
          <p>Drag and drop to reorder list</p>
        </div>
      </div>
    </div>
  );

  function handleDragEnd(event) {
    console.log("drag")
    const { active, over } = event;
    let oldItem = props.tasks.findIndex((item) => item.content === active.id);
    let newItem = props.tasks.findIndex((item) => item.content === over.id);
    if (oldItem === newItem) {
      console.log("the same")
      if (event.activatorEvent.target.classList.contains("cross")) {
        console.log("cross")
        const newTasks = [...props.tasks];
        const taskToDel = newTasks.find((task) => task.content === active.id);
        const newArray = newTasks.filter((task) => task !== taskToDel);
        props.setTasks(newArray);
      }
       else {
        console.log("changing...");
        const newTasks = [...props.tasks];
        const taskToChangeStatus = newTasks.find(
          (task) => task.content === active.id
        );
        taskToChangeStatus.active = !taskToChangeStatus.active;
        props.setTasks(newTasks);
      }
    } else {
      props.setTasks(arrayMove(props.tasks, oldItem, newItem));
    }
  }
}

export default List;
