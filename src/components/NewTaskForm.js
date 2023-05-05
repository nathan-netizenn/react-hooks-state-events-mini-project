import React, {useState}from "react";
import PropTypes  from "prop-types";
import {CATEGORIES} from "../data";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(CATEGORIES[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">
        Details:
        <input
          type="text"
          id="text-input"
          value={text}
          onChange={handleTextChange}
        />
      </label>
      <label htmlFor="category-select">
        Category:
        <select
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

NewTaskForm.propTypes = {
  categories: PropTypes.array.isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;