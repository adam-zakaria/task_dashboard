import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreate = (newTask) => {
      // Logic to add newTask to your tasks state or send it to the backend
      setTasks(prevTasks => [...prevTasks, newTask]);
  };
  return(
    <div>
      {
      /*
      <TaskForm onTaskCreate={handleTaskCreate} />
      */
      <TaskList></TaskList>
      }
    </div>
  )

}

export default App;