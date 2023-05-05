import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    const id = tasks.length + 1;
    setTasks([...tasks, { id, ...newTask }]);
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="app">
      <CategoryFilter
        categories={[...CATEGORIES, "All"]}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleTaskDelete} />
    </div>
  );
}

export default App;