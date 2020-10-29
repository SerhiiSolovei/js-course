// const sayHello = function () {
//   console.log('Hello');
// };

// sayHello(); // 'Hello'

// const sayHello = () => {
//   console.log('Hello');
// };

// sayHello(); // 'Hello'


// One line function does not need braces
// const sayHello = () => console.log('Hello');

// sayHello(); // 'Hello'

// One line returns
// const sayHello = () => 'Hello';
// console.log(sayHello()); // 'Hello'

// Same as above
// const sayHello  = function () {
//   return 'Hello';
// };

// Return object
// const sayHello = () => ({msg: 'Hello'});

// console.log(sayHello()); // {msg: 'Hello'}


//  Single parameter does not need parentheses
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Steve'); // 'Hello Steve'


//  Multiple parameters need parentheses
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Steve', 'Smith'); // 'Hello Steve Smith'


const users = ['Steve', 'Mike', 'Elizabeth', 'Jenifer'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// }); // [5, 4, 9, 7]


// Shorter version
// const nameLengths = users.map((name) => {
//   return name.length;
// }); // [5, 4, 9, 7]


// Shortest version
const nameLengths = users.map(name => name.length);


console.log(nameLengths); // [5, 4, 9, 7]
