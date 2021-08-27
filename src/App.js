import React, { useState } from "react";
import "./App.css";
import { initialState } from "./store/initialStates";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(initialState);
  const [onToggle, setOnToggle] = useState(false);

  // create task
  const onCreate = (task) => {
    const id = Date.now();
    const newTask = { id, ...task };
    setTasks((prevState) => [...prevState, newTask]);
  };

  // delete task
  const onDelete = (deleteId) =>
    setTasks(tasks.filter((task) => task.id !== deleteId));

  // Toggle Done
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // Toggle show and hide
  const onToggleShow = () => setOnToggle(!onToggle);

  return (
    <div className="task-container">
      <Header title="Task Tracker" onToggleShow={onToggleShow} />
      {onToggle && <CreateTask onCreate={onCreate} />}
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={onDelete} toggleDone={toggleDone} />
      ) : (
        <p className="noTask">No show task</p>
      )}
    </div>
  );
}

export default App;
