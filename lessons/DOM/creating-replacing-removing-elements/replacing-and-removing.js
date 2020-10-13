// REPLACE ELEMENTS

// Create element
const newHeading = document.createElement('h5');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.querySelector('#task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENTS
const lis = document.querySelectorAll('li');
const itemsList = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
itemsList.removeChild(lis[2]);


// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const currentLink = firstLi.children[0];
let val;

// Classes
val = currentLink.className; // delete-item secondary-content
val = currentLink.classList; // 0: "delete-item" 1: "secondary-content" - DOMTokenList
currentLink.classList.add('test');
currentLink.classList.remove('test');

// Attributes
val = currentLink.getAttribute('href'); // #
val = currentLink.setAttribute('href', 'http://google.com');
val = currentLink.hasAttribute('href'); // true
val = currentLink.removeAttribute('href');
currentLink.setAttribute('href', '#');

console.log(val);
