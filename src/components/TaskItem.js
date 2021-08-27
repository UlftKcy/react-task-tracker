import React from "react";
import { FaTimesCircle } from "react-icons/fa";

export default function TaskItem({ task, onDelete, toggleDone }) {
  return (
    <div
      className={`task ${task.isDone ? "done" : ""}`}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        {task.text}
        <FaTimesCircle
          onClick={() => onDelete(task.id)}
          className="deleteBtn"
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}
