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

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts () {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}
