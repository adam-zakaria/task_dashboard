import React, { useState } from 'react';
import TaskDetail from './TaskDetail';

function TaskList({ tasks }) {
  const [displayedDetails, setDisplayedDetails] = useState({});

  const toggleTaskDetail = (id) => {
    setDisplayedDetails(prevDetails => ({
      ...prevDetails,
      [id]: !prevDetails[id]
    }));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map(task => (
          <div key={task.id} style={{ cursor: 'pointer' }}>
            <h3 onClick={() => toggleTaskDetail(task.id)}>Task Name: {task.name}</h3>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            {displayedDetails[task.id] && <TaskDetail task={task} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
