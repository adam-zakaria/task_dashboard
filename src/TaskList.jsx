import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import TaskDetail from './TaskDetail';

function TaskList({ tasks }) {
  const [displayedDetails, setDisplayedDetails] = useState({});
  const labelStyle = { color: '#757575' }; // Light gray color

  const toggleTaskDetail = (id) => {
    setDisplayedDetails(prevDetails => ({
      ...prevDetails,
      [id]: !prevDetails[id]
    }));
  };

  return (
    <div className="flex flex-col items-center">
<Typography
  variant="h4"
  component="h1"
  className="my-4"
  sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
>
  Tasks
</Typography>
      <div className="w-full">
        {tasks.map(task => (
          <Card onClick={() => toggleTaskDetail(task.id)} key={task.id} className="mb-4" elevation={1}>
            <CardContent className="cursor-pointer">
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: 'bold' }}
              >
                {task.name}
              </Typography>
              <Typography variant="body1">
        <span style={labelStyle}>Due:</span> {task.dueDate}
      </Typography>
      <Typography variant="body1">
        <span style={labelStyle}>Priority:</span> {task.priority}
      </Typography>

              {displayedDetails[task.id] && <TaskDetail task={task} />}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
