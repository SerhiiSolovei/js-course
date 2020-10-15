// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'John');


// remove from the storage
// localStorage.removeItem('name');

// get from storage
// const nameItem = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(nameItem, age);

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved!');
  e.preventDefault();
});


const tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks, typeof tasks); // ["Walk the dog", "Walking the fire"] - object
tasks.forEach(function (task) {
  console.log(task, typeof task); // "Walk the dog", "Walking the fire" - string
});
