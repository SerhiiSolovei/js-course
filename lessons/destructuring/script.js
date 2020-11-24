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
