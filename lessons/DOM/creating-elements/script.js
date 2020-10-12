// CREATE ELEMENT
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add ID
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New-Item');

// Create text node and append
li.appendChild(document.createTextNode('New Item'));

// Create link
const link = document.createElement('a');

//Add classes
link.className = 'delete-item secondary-content';

//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//Add link into li
li.appendChild(link);

// Add li as child to ul
const list = document.querySelector('ul.collection');
list.appendChild(li);

console.log(li);
