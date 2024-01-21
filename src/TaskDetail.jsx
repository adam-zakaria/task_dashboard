// TaskDetail.js
import React from 'react';

function TaskDetail({ task }) {
  const labelStyle = { color: '#757575' }; // Light gray color
  if (!task) return null;
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
      <p><span style={labelStyle}>Description:</span> {task.description}</p>
      <p><span style={labelStyle}>Assignee:</span> {task.assignee}</p>
      <p><span style={labelStyle}>Status:</span> {task.status}</p>
    </div>
  );
}

export default TaskDetail;
