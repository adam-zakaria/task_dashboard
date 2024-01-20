// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreate = (newTask) => {
      // Assign a unique ID (for simplicity, using Date.now(), but consider uuid in real apps)
      const taskWithId = { ...newTask, id: Date.now() };

      // Add the new task to the existing tasks
      setTasks(prevTasks => [...prevTasks, taskWithId]);
  };

  return (
    <div>
      <TaskForm onTaskCreate={handleTaskCreate} />
      <br />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
