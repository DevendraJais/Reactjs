import React from 'react';

const TodoList = ({ todos, removeTask }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '4px'
        }}>
          <span>{todo.text}</span>
          <button
            onClick={() => removeTask(todo.id)}
            style={{ backgroundColor: 'red', color: '#fff', border: 'none', padding: '5px 10px' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
