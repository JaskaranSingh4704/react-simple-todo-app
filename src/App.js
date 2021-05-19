import { useState, useRef, useEffect } from "react";
import uuid from "react-uuid";
import "./App.css";
import TodoList from "./TodoList";
function App() {
  const LOCAL_STORAGE_KEY = "todo";
  const [todoList, setTodos] = useState([]);
  const [todosCount, setTodosCount] = useState(0);
  useEffect(() => {
    let oldTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (oldTodos === null) return;
    setTodos(oldTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    let totalComleteTask = todoList.filter((todo) => todo.complete === true);
    setTodosCount(totalComleteTask.length);
  }, [todoList]);

  const todoRef = useRef();

  const handleClick = () => {
    let newName = todoRef.current.value;
    if (newName === "") return;
    let newTodo = { id: uuid(), name: newName, complete: false };
    setTodos([...todoList, newTodo]);
    todoRef.current.value = null;
  };

  const updateTodoStatus = (id) => {
    const newTodos = [...todoList];
    let todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const removeAllHandleClick = () => {
    setTodos([]);
  };

  const removeCompletedHandleClick = () => {
    let unCompleted = todoList.filter((todo) => todo.complete !== true);
    setTodos(unCompleted);
  };

  return (
    <>
      <p>{todosCount} Completed Tasks</p>

      <input ref={todoRef} placeholder="Enter new todo" />

      <button onClick={handleClick}>Add Todo</button>
      <button onClick={removeCompletedHandleClick}>Clear All Completed</button>
      <button onClick={removeAllHandleClick}>Remove All</button>

      <TodoList todoList={todoList} updateTodoStatus={updateTodoStatus} />
    </>
  );
}

export default App;
