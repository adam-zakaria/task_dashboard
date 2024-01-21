import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from './TaskForm'; // adjust the import path as necessary

describe('TaskForm', () => {
  test('submits a new task with the provided information', () => {
    const handleTaskCreate = jest.fn();
    render(<TaskForm onTaskCreate={handleTaskCreate} />);

    // Fill out the form
    fireEvent.change(screen.getByRole('textbox', { name: /Task Name/i }), {
      target: { value: 'New Task' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /Description/i }), {
      target: { value: 'Task description' },
    });
    fireEvent.change(screen.getByLabelText(/Due Date/i), {
      target: { value: '2024-01-01' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /Assignee/i }), {
      target: { value: 'John Doe' },
    });

    // For Material-UI Select, we need to first open the dropdown before selecting an item
    fireEvent.mouseDown(screen.getByLabelText(/Priority/i));
    const listbox = screen.getByRole('listbox');
    fireEvent.click(screen.getByText(/High/i, listbox));

    fireEvent.mouseDown(screen.getByLabelText(/Status/i));
    const statusListbox = screen.getByRole('listbox');
    fireEvent.click(screen.getByText(/In Progress/i, statusListbox));

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Create/i }));

    // Check if handleTaskCreate was called with the right data
    expect(handleTaskCreate).toHaveBeenCalledWith({
      name: 'New Task',
      description: 'Task description',
      dueDate: '2024-01-01',
      assignee: 'John Doe',
      priority: 'High',
      status: 'In Progress',
    });
  });
});
