import React from "react";

function TaskList({tasks, onDelete}) {
  const handleDelete = (taskId) => {
    onDelete(taskId);
  }
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id} 
          task={task} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

export default TaskList;