import React, { useState } from 'react';
import { Card, CardContent, TextField, TextareaAutosize, Select, MenuItem, Button, FormControl, InputLabel, Typography, OutlinedInput } from '@mui/material';


function TaskForm({ onTaskCreate }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Not Started');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      name: taskName,
      description,
      dueDate,
      assignee,
      priority,
      status,
    };

    onTaskCreate(newTask);

    // Clear the form fields
    setTaskName('');
    setDescription('');
    setDueDate('');
    setAssignee('');
    setPriority('Medium');
    setStatus('Not Started');
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Typography
        variant="h4"
        component="h1"
        className="my-4"
        sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
      >
        Create a Task
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Task Name"
              variant="outlined"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
              fullWidth
            />
            <FormControl variant="outlined" fullWidth className="mt-2">
              <InputLabel htmlFor="task-description">Description</InputLabel>
              <OutlinedInput
                id="task-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={3}
                placeholder="Description"
                label="Description"
              />
            </FormControl>
            <TextField
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Assignee"
              variant="outlined"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              required
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                labelId="priority-label"
                value={priority}
                label="Priority"
                onChange={(e) => setPriority(e.target.value)}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                value={status}
                label="Status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
            <div className="flex justify-center mt-4">
              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskForm;