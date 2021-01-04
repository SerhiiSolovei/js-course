//  Destructuring Assignment
let a,b;
[a,b] = [1,2];
console.log(1,2); // 1 2

// Rest Pattern
[a,b,c, ...rest] = [1,2,3,4,5,6,7];
console.log(a,b,c, rest); // 1 2 3 (4) [4, 5, 6, 7]
console.log(a,b,c, ...rest); // 1 2 3 4 5 6 7

({a, b} = {a: 1, b: 2, c: 3, d: 4, f: 5});

console.log(a,b); // 1 2

({a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4, f: 5});
console.log(a,b, rest); // 1 2 {c: 3, d: 4, f: 5}

// Array Destructuring
const people = ['John', 'Mike', 'Alex'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3, typeof person1); // John Mike Alex string

const fib = [1, 1, 2, 3, 5, 8, 13];
// const [firstNum, secondNum, thirdNum] = fib;
// console.log(firstNum, secondNum, thirdNum); // 1 1 2

const [, secondNum, , fourthNum] = fib;
console.log(secondNum, fourthNum); // 1 3

const line = [[10,17], [14,7]];
const [[p1x,p1y],[p2x,p2y]] = line;
console.log(p1x,p1y,p2x,p2y); // 10 17 14 7

// Parse array returned from function
function getPeople() {
  return ['Steve', 'Bruce', 'Chris'];
};

let person4, person5, person6;
[person4, person5, person6] = getPeople();
console.log(person4, person5, person6, typeof person4); // Steve Bruce Chris string

// Object Destructuring
const person = {
  name: 'Alex Smith',
  age: 25,
  city: 'Boston',
  gender: 'male',
  sayHello: () => console.log('Hello')
};

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6
const {name, age, city, sayHello} = person;

console.log(name, age, city); // Alex Smith 25 Boston

sayHello(); // Hello


const anotherPerson = {
  name: {
    first: 'Mike',
    last: 'Johnson'
  },
  age: 32,
  city: 'Miami'
};

// const { name: {first, last} } = anotherPerson;

// console.log(first, last); // Mike Johnson

const { name: {first: firstName, last: lastName} } = anotherPerson;
console.log(firstName, lastName); // Mike Johnson

// Default property
const { role = 'user' } = anotherPerson;
console.log(role); // user

// Rest element
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak'
};

const {duck, ...otherAnimals} = dict;
console.log(duck, otherAnimals); // quack {dog: "wuff", mouse: "squeak"}

// Find everyone who makes 'squeak'
const dict1 = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak'
};

const res = Object.entries(dict1)
  .filter(([key, value]) => value === 'squeak')
  .map(([key]) => key);

  console.log(res); // ["mouse", "hamster"]

// Function Destructuring
function connect ({
  host = 'localhost',
  port = 12345,
  user = 'guest'
} = {}) {
  console.log(`User: ${user}, host: ${host}, port: ${port}`);
};

connect({port: 77777}); // User: guest, host: localhost, port: 77777
connect(); // User: guest, host: localhost, port: 12345


// Combination of array and object destructuring
const shape = {
  type: 'segment',
  coordinations: {
    start: [10, 15],
    end: [17, 15]
  }
};

const { coordinations: { start: [startX, startY], end: [endX, endY]}} = shape;

console.log(`X: ${startX}, ${endX}, Y: ${startY},${endY}`); // X: 10, 17, Y: 15,15
