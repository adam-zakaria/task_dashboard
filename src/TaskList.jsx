import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

let tasks = [
    {"id": 1, "taskName": "Task 1", "Description":"", "dueDate": "2024-01-25", "assignee":"", "priority": "High"},
    {"id": 2, "taskName": "Task 1", "Description":"", "dueDate": "2024-01-25", "assignee":"", "priority": "High"},
    {"id": 3, "taskName": "Task 1", "Description":"", "dueDate": "2024-01-25", "assignee":"", "priority": "High"},
    {"id": 4, "taskName": "Task 1", "Description":"", "dueDate": "2024-01-25", "assignee":"", "priority": "High"},
]
/*
• Task name (required)
• Description
• Due date (required)
• Assignee (required)
• Priority (required)
*/

function TaskList(){
  return(
    <div>
    <h1>Tasks</h1>
    <div>
    {tasks.map(task => (
        <div key={task.id}>
            <h3>Task Name: {task.name}</h3>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
        </div>
    ))}
    </div>
</div>
  ) 

}

export default TaskList;