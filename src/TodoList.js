import React from "react";
import Todo from "./Todo";
export default function TodoList({ todoList, updateTodoStatus }) {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} updateTodoStatus={updateTodoStatus} />
        );
      })}
    </div>
  );
}
