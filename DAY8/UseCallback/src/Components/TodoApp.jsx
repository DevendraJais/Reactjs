import React, { useState, useCallback } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTask = useCallback((task) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: task }
    ]);
  }, []);

  const removeTask = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo App (with useCallback)</h2>
      <AddTodo addTask={addTask} />
      <TodoList todos={todos} removeTask={removeTask} />
    </div>
  );
};

export default TodoApp;
