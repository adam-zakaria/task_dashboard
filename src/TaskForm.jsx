import React, { useState } from 'react';
import { Card, CardContent, TextField, TextareaAutosize, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';


function TaskForm({ onTaskCreate }) {

  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('Medium'); // Default priority

  const handleSubmit = (event) => {
      event.preventDefault();

      // Construct the new task object
      const newTask = {
          name: taskName,
          description,
          dueDate,
          assignee,
          priority,
      };

      onTaskCreate(newTask);

      // Clear the form fields
      setTaskName('');
      setDescription('');
      setDueDate('');
      setAssignee('');
      setPriority('Medium');
  };
return (
<div className="flex justify-center items-center h-screen">
      <Card className="w-1/3">
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
            <TextareaAutosize
              minRows={3}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 p-2"
            />
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
            <div className="flex justify-center mt-4">
              <Button type="submit" variant="contained" color="primary">
                Create Task
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

}

export default TaskForm;
