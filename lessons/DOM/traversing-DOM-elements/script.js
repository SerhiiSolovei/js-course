let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes
val = list.childNodes; // 0: text 1: li.collection-item 2: text 3: li.collection-item 4: text 5: li.collection-item 6: text 7: li.collection-item 8: text 9: li.collection-item  10: text - NodeList
val = list.childNodes[0]; // text
val = list.childNodes[0].nodeName; // #text
val = list.childNodes[0].nodeType; // 3

/* Node types
  1 -Element
  2 - Attribute (deprecated)
  3 - Text node
  8 - Comment
  9 - Document itself
  10 - Doctype
*/

// Get children element nodes

val = list.children; // 0: li.collection-item 1: li.collection-item 2: li.collection-item 3: li.collection-item 4: li.collection-item - HTMLCollection

// Children of children

list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0]; //  <a href="#" class="delete-item secondary-content" id="test-link"><i class="fa fa-remove"></i></a>


// First child
val = list.firstChild; // text
val = list.firstElementChild; // <li class="collection-item">...</li>

// Last child
val = list.lastChild; // text
val = list.lastElementChild; // <li class="collection-item">...</li>


// Count child elements
val = list.childElementCount; // 5

// Get parent node
val = listItem.parentNode; // <ul class="collection">...</ul>
val = listItem.parentElement; // <ul class="collection">...</ul>
val = listItem.parentElement.parentElement; // <div class="card-action">...</div>

// Get next sibling
val = listItem.nextSibling; // text
val = listItem.nextElementSibling; // <li class="collection-item">...</li>

// Get previous sibling
val = listItem.previousSibling; // text
val = listItem.previousElementSibling; // null

console.log(val);
