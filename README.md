# Setup
This assumes npm is installed.

## Install packages
`npm i`

## Run
`npm run dev`

# Design Decisions

## Frameworks, libraries, and tools
This project uses React (bootstrapped with Vite), Tailwind CSS, and Material UI. 

### React
React is a very popular modern front end framework and is popular for a lot of reasons: tons of libraries, great templating language (JSX), modularity (components), performance, and a lot more. Because of its popularity, finding front end devs to work on React projects is very easy - there are a lot of React devs. 

### Vite
Vite and Create React App are two of the most popular ways to start and serve React project. Vite is *very* fast - when a change is made to the project Vite recompiles very quickly, a lot faster than CRA. 

### Tailwind CSS
Tailwind CSS is lauded by devs for making styling so much faster and more convenient. Tailwind provides utility classes which allow devs to inline CSS and not need to switch between markup and style files. 

### Material UI
Material UI provides wonderful out of the box components which include features like accessibility, uniform styling, error handling on forms, and more. Like all the other tools, it is also very popular.

## UI Considerations

### Color Palette
I wanted to insure that there is at least *some* color, and Material UI's default components provide enough blue and gray that the aesthetic is enhacned. With more time, a more attractive and complex palette would be created.

### Task List 
There are a lot of ways to display tasks on the screen. We'll assume this is a desktop app and will ignore responsive design (mobile). With a project management tool like Jira, tasks may be organized in columns or rows by epic, sprint, assignee, etc. For simplicity, in this application tasks are displayed in a single panel as a scrollable list.

### Task creation
I decided to create a task creation form that is always displayed on the screen. This option won out over the other options of having a separate page for task creation or having a "Add Task" button which would display a modal where a task can be created. The modal was a close second because it could be argued that the majority of time in a task dashboard is likely spent viewing tasks, so devoting more screen to the tasks could make sense, but I like the ever present task creation panel because tasks can be viewed mid-creation, and tasks are more conveniently made (no need to open a modal). If the requirements mentioned future development plans this would factor into the design, but no plans are mentioned.

## Backend
These are the endpoints required to support my current implementation. In a more fully developed implementation, there would be endpoints for functionality like updating, deleting, getting specific tasks based on criteria, etc.

* GET /tasks
Description: Retrieve a list of all tasks.
Payload: None
Response: Array of Task objects.

* POST /tasks
Description: Create a new task.
Payload: Task object (without ID; typically includes name, description, dueDate, assignee, priority, status).
Response: Newly created Task object with ID.

## Work Breakdown: Development Phase
For the task management dashboard project, the development phase can be organized by components, with specific tasks for creating each component, integration, and code review. This breakdown will ensure a structured approach to developing the application. Note that this covers only the development phase; subsequent phases like testing, UI/UX evaluation, deployment, and maintenance are not included.
Also time estimates will vary depending on the familiarility of the developers with the technologies and tasks.

### Initial Project Setup
* Bootstrap a project with React, Vite, Tailwind, and MaterialUI
* Time Estimate: 2 hours

### Implement Task List Component
* Develop the component to display a list of tasks.
* Ensure it shows the task name, due date, and priority.
* Implement fetching and displaying data
* Time Estimate: 3 hours

### Implement Task Details Component
* Develop a component to show detailed information about a task.
* This component should be displayed when a task in the Task List is clicked.
* Ensure it includes details like the task description, assignee, and status.
* Time Estimate: 2 hours

### Implement Task Creation Component
* Implement a form component for creating new tasks.
* Include necessary fields: task name, description, due date, and assignee.
* Add form validation to ensure data integrity.
* Time Estimate: 2 hours

### Integrate Components
* Ensure all components (Task List, Task Details, Task Creation Form) work together seamlessly.
* Implement state management to handle data flow across components.
* Test the integration in different development environments to ensure functionality.
* Time Estimate: 3 hours

### Conduct Code Review
* Perform code reviews for all developed components.
* Ensure coding standards, best practices, and project-specific guidelines are followed.
* Address and resolve any issues or feedback from the reviews.
* Time Estimate: 2 hours

## Additional Notes
* The assignment specifies that "Priority" should be included under Task Details, but does not specify its inclusion under Task Creation. I've decided to include it in Task Creation because it is important feature in a task system.
* This code is sparsely commented because it is a simple CRUD application - with more complex applications I put more comments. For most of the code, the naming is effective enough at conveying what is happening.