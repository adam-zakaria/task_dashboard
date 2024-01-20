import './App.css'
import { useState } from 'react'
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
      <TaskForm onTaskCreate={handleTaskCreate} />
      <br></br>
      <br></br>
      <br></br>
      <TaskList tasks={tasks}></TaskList>
    </div>
  )

}

export default App;