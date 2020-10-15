// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-links');

// Load All Event Listeners
loadEventListeners();

// Load Event Listeners
function loadEventListeners () {
  // Add task event
  form.addEventListener('submit', addTask);
};

// Add Task
function addTask (e) {
  if (taskInput.value === "") {
    alert('Add a Task!');
  };

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and add to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  taskInput.value = "";
  e.preventDefault;
};
