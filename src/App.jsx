import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Card, CardContent, Button, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment'; // An example icon


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
      <AppBar position="static">
        <Toolbar>
          <AssignmentIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card raised>
              <CardContent>
                <TaskForm onTaskCreate={handleTaskCreate} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card raised style={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
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