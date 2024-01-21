import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardContent, Button, Typography } from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreate = (newTask) => {
      // Assign a unique ID (for simplicity, using Date.now(), but consider uuid in real apps)
      const taskWithId = { ...newTask, id: Date.now() };

      // Add the new task to the existing tasks
      setTasks(prevTasks => [...prevTasks, taskWithId]);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom className="mb-6">
          Task Dashboard
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <TaskForm onTaskCreate={handleTaskCreate} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ height: 'calc(100vh - 96px)', overflow: 'auto' }}> {/* Adjust height as needed */}
              <CardContent>
                <TaskList tasks={tasks} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
