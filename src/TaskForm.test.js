import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from './TaskForm'; // adjust the import path as necessary

describe('TaskForm', () => {
  test('submits a new task with the provided information', () => {
    const handleTaskCreate = jest.fn();
    render(<TaskForm onTaskCreate={handleTaskCreate} />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Task Name:/i), {
      target: { value: 'New Task' },
    });
    fireEvent.change(screen.getByLabelText(/Description:/i), {
      target: { value: 'Task description' },
    });
    fireEvent.change(screen.getByLabelText(/Due Date:/i), {
      target: { value: '2024-01-01' },
    });
    fireEvent.change(screen.getByLabelText(/Assignee:/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Priority:/i), {
      target: { value: 'High' },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Create Task/i));

    // Check if handleTaskCreate was called with the right data
    expect(handleTaskCreate).toHaveBeenCalledWith({
      name: 'New Task',
      description: 'Task description',
      dueDate: '2024-01-01',
      assignee: 'John Doe',
      priority: 'High',
    });
  });
});
