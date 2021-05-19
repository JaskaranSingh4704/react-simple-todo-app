import React from "react";

export default function Todo({ todo, updateTodoStatus }) {
  const handleClick = (id) => {
    updateTodoStatus(id);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            handleClick(todo.id);
          }}
          checked={todo.complete}
        />
        {todo.name}
      </label>
    </>
  );
}
