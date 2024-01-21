import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Grid, Box, CssBaseline, AppBar, Toolbar, Card, CardContent, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreate = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now() };
    setTasks(prevTasks => [...prevTasks, taskWithId]);
  };

  const cardStyle = { height: 'calc(100vh - 96px)', overflowY: 'auto' }; // Consistent height for both cards

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
            <Card raised style={cardStyle}>
              <CardContent>
                <TaskForm onTaskCreate={handleTaskCreate} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card raised style={cardStyle}>
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
