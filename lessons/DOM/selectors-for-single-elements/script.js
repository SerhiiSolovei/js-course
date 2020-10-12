// document.getElementById
const taskTitle = document.getElementById('task-title'); // <h5 id="task-title">Tasks</h5>

// Get things from the element
taskTitle.id; // task-title

// Change styling
taskTitle.style.background = 'lightgrey';
taskTitle.style.color = 'darkblue';

// Change content
taskTitle.textContent = 'Tasks List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span>Tasks</span>';


// document.querySelector();

document.querySelector('#task-title'); // <h5 id="task-title">Tasks</h5> - use '#' for ID
document.querySelector('.card-title'); // <span class="card-title">Task List</span> - use '.' for class
document.querySelector('li'); // first li element in DOM


document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'orange';
