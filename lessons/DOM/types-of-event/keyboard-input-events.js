const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const section = document.querySelector('section');

// Submit
// form.addEventListener('submit', runEvent);

//Clear input value
taskInput.value = '';

// KeyDown
// taskInput.addEventListener('keydown', runEvent);

// KeyUp
// taskInput.addEventListener('keyup', runEvent);

// KeyPress
// taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent);

// Blur
taskInput.addEventListener('blur', runEvent);

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// Input
taskInput.addEventListener('input', runEvent);

//Change
section.addEventListener('change', runEvent);

function runEvent (e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // heading.innerText = e.target.value;
  console.log(e.target.value);
}
