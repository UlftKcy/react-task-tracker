import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, toggleDone }) {
  return (
    <div className="tasks-body">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
}
