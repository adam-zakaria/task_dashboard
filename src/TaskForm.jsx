import { useState } from 'react'
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

      // Callback to pass the new task up to the parent component
      onTaskCreate(newTask);

      // Clear the form fields
      setTaskName('');
      setDescription('');
      setDueDate('');
      setAssignee('');
      setPriority('Medium');
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label>
                  Task Name:
                  <input 
                      type="text" 
                      value={taskName} 
                      onChange={(e) => setTaskName(e.target.value)} 
                      required 
                  />
              </label>
          </div>
          <div>
              <label>
                  Description:
                  <textarea 
                      value={description} 
                      onChange={(e) => setDescription(e.target.value)} 
                  />
              </label>
          </div>
          <div>
              <label>
                  Due Date:
                  <input 
                      type="date" 
                      value={dueDate} 
                      onChange={(e) => setDueDate(e.target.value)} 
                      required 
                  />
              </label>
          </div>
          <div>
              <label>
                  Assignee:
                  <input 
                      type="text" 
                      value={assignee} 
                      onChange={(e) => setAssignee(e.target.value)} 
                      required 
                  />
              </label>
          </div>
          <div>
              <label>
                  Priority:
                  <select 
                      value={priority} 
                      onChange={(e) => setPriority(e.target.value)} 
                      required
                  >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                  </select>
              </label>
          </div>
          <button type="submit">Create Task</button>
      </form>
  );
}

export default TaskForm;
