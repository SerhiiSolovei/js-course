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
