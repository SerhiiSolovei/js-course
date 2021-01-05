const person = {
  name: "James",
  surname: "Smith",
  age: 34,
  hobbies: ["fishing", "singing"],
  address: {state: "NC", city: "Norfolk"},
  getBirthYear: function () {
    return 2020 - this.age;
  }
};

let val;

val = person; // {name: "James", surname: "Smith", age: 34, hobbies: Array(2), address: {…}, …}

// Get specific value

val = person.name; // "James"
val = person['age']; // 34
val = person.hobbies[0]; // "fishing"
val = person.address.city // "Norfolk"
val = person.getBirthYear(); // 1986;

const people = [
  {name: "Adam", age: 22},
  {name: "Maria", age: 25},
  {name: "Mark", age: 31}
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]); // {name: "Adam", age: 22}, {name: "Maria", age: 25}, {name: "Mark", age: 31}
}


console.log(val);

// Make shallow copy of object
const defaults = {
  host: 'localhost',
  dbname: 'blog',
  user: 'admin'
};

const opts = {
  user: 'John',
  password: 'abcd1234'
}

// Object.assign(defaults, opts);
// console.log(defaults); // {dbname: "blog", host: "localhost", password: "abcd1234", user: "John"}

const copy = Object.assign({}, defaults, opts);
console.log(copy, defaults); // copy: {host: "localhost", dbname: "blog", user: "John", password: "abcd1234"}, admin{host: "localhost", dbname: "blog", user: "admin"}


// Create shallow copy
const user = {
  name: 'Bob',
  friends:  ['Mark', 'Jacob']
}

const shallowCopy = Object.assign({}, user); // create a new object with same values

console.log(user === shallowCopy); // false

user.friends.push('Steven');

console.log(shallowCopy); // { name: 'Bob', friends:  ['Mark', 'Jacob', 'Steven']}


// Create shallow copy using object spread operator
const defaults1 = {
  host: 'localhost',
  dbname: 'blog',
  user: 'admin'
};

const opts1 = {
  user: 'John',
  password: 'abcd1234'
}

const res = { ... defaults1, ...opts1}

console.log(res); // {host: "localhost", dbname: "blog", user: "John", password: "abcd1234"}

const port = 8800;

const res1 = {
  ...defaults1,
  ...opts1,
  port,
  connect () {

  }
}

console.log(res1); // {host: "localhost", dbname: "blog", user: "John", password: "abcd1234", port: 8800, …}
