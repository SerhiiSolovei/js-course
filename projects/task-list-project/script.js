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
  // DOM Load  event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Add remove task event
  taskList.addEventListener('click', removeTask);
  // Add clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Add filter task event
  filter.addEventListener('keyup', filterTasks);
};

// Get Tasks
function getTasks () {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  };

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and add to li
    li.appendChild(document.createTextNode(task));

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
  });
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

  // Store in Local Storage
  storeTaskToLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = "";

  e.preventDefault();
};

// Store Task
function storeTaskToLocalStorage (task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
};


// Remove Task
function removeTask (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }

  // Remove Tasks from Local Storage
  removeTaskFromLocalStorage(e.target.parentElement.parentElement);
};

// Remove Tasks from Local Storage
function removeTaskFromLocalStorage (taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  };

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    };
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clear Tasks
function clearTasks () {
  // taskList.innerHTML = '';

  // Faster way
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear tasks from Local Storage
  clearTasksFromLocalStorage();
};

// Clear tasks from Local Storage
function clearTasksFromLocalStorage () {
  localStorage.clear();
};

// Filter Tasks
function filterTasks (e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task){
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
};
