// Array to store tasks
let tasks = [];

// Event listener for form submission
document.getElementById("task-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the default form submission behavior

  // Retrieving the values from the input fields
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const dueDate = document.getElementById("task-due-date").value;

  // Retrieving the index of the task being edited from the form's data attribute
  const index = this.dataset.editIndex;

  if (index) {
    // editing an existing task
    tasks[index] = { title, description, dueDate };
    delete this.dataset.editIndex; // Clearing the edit index
  } else {
    // Creating a new task object
    const newTask = { title, description, dueDate };

    // Adding the new task to the task array
    tasks.push(newTask);
  }

  // Updating the displayed tasks
  displayTasks();

  // Clearing the form fields after submission
  this.reset();
});

// Function to display tasks
function displayTasks() {
  // Getting the container element where tasks will be displayed
  const taskContainer = document.getElementById("task-container");

  // Clearing the existing content in the task container
  taskContainer.innerHTML = "";

  // Iterating over each task in the tasks array
  tasks.forEach((task, index) => {
    // Creating a new div element for each task
    const taskElement = document.createElement("div");

    // Assigning a class name for styling
    taskElement.className = "task-item";

    // Setting the inner HTML of the task element with task details and buttons
    taskElement.innerHTML = `
         <h3>${task.title}</h3> <!-- Displaying task title -->
         <p>${task.description}</p> <!-- Displaying task description -->
         <p>Due: ${task.dueDate}</p> <!-- Displaying task due date -->
        <!-- Edit button with an onclick event to call editTask function with task index -->
         <button onClick="editTask(${index})">Edit</button>
          <!-- Delete button with an onclick event to call deleteTask function with task index -->
          <button onClick="deleteTask(${index})">Delete</button>

         `;

    // Appending the task element to the task container
    taskContainer.appendChild(taskElement);
  });
}

// Function to edit a task based on its index
function editTask(index) {
  // Retrieving the task object from the tasks array using the provided index
  const task = tasks[index];

  // Setting the value of the title input field to the task's title
  document.getElementById("task-title").value = task.title;

  // Setting the value of the description textarea to the task's description
  document.getElementById("task-description").value = task.description;

  // Setting the value of the due date input field to the task's due date
  document.getElementById("task-due-date").value = task.dueDate;

  // Storing the index of the task being edited in a data attribute on the form
  document.getElementById("task-form").dataset.editIndex = index;
}

// Function to display a task based on its index
function deleteTask(index) {
  // Prompting the user with a confirmation dialog
  if (confirm("Are you sure you want to delete this task?")) {
    // Removing the task at the specified index from the tasks array
    tasks.splice(index, 1);

    // updating the displayed tasks to reflect the deletion
    displayTasks();
  }
}
