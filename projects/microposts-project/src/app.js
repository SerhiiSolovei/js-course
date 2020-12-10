// CommonJS Module Syntax
// const person = require('./mymodule1');
// console.log(person.name); // John

// ES2015 Module
// import { person, sayHello } from './mymodule2'
// console.log(sayHello()); // Hello Mike

// import * as mod from './mymodule2'
// console.log(mod.person.name, mod.sayHello()); // Mike Hello Mike

// import greeting from './mymodule2'
// console.log(greeting); // Hello World!


// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');

import { http } from './http'
import { ui } from './ui'

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for submit post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Get posts
function getPosts () {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// Submit post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  // Create post
  http.post('http://localhost:3000/posts', data)
    .then(data => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts()})
    .catch(err => console.log(err))
}
