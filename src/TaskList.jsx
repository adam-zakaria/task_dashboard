import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
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
    <div className="flex flex-col items-center">
      <Typography variant="h4" component="h1" className="my-4">
        Tasks
      </Typography>
      <div className="w-full md:w-2/3 lg:w-1/2">
        {tasks.map(task => (
          <Card key={task.id} className="mb-4">
            <CardContent className="cursor-pointer">
              <Typography variant="h5" component="h3" onClick={() => toggleTaskDetail(task.id)}>
                Task Name: {task.name}
              </Typography>
              <Typography variant="body1">Due Date: {task.dueDate}</Typography>
              <Typography variant="body1">Priority: {task.priority}</Typography>
              {displayedDetails[task.id] && <TaskDetail task={task} />}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
