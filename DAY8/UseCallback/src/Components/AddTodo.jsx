import React, { useState } from 'react';

const AddTodo = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input.trim());
      setInput('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', width: '200px', marginRight: '10px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 12px' }}>
        Add
      </button>
    </div>
  );
};

export default React.memo(AddTodo);
