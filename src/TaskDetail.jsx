// TaskDetail.js
import React from 'react';

function TaskDetail({ task }) {
  if (!task) return null;

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
      <h3>Task Name: {task.name}</h3>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Assignee: {task.assignee}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}

export default TaskDetail;
