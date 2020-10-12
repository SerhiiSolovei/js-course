// document.getElementsByClassName

document.getElementsByClassName('.collection-item'); // all elements with "collection-item" class name

document.querySelector('ul').getElementsByClassName('.collection-item'); //  all elements with "collection-item" class name inside "ul" tag


// document.getElementsByTagName

let lis = document.getElementsByTagName('li'); // all items presented in HTML Collection

// Convert HTML Collection into array

// let list = Array.from(lis);

// list.reverse();

// list.forEach(function(li, index){
//   return li.textContent = `${index + 1} : Hello`;
// });

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (li, index){
  li.textContent = `${index + 1} : Hello!`;
  (index % 2 === 0) ? li.style.background = 'grey' : li.style.background = 'lightgrey';
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
