// FOR LOOP

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    // console.log(`${i} is my favorite number`);
    continue;
  }
  if (i >= 7) {
    // console.log(`Stop looping`);
    break;
  }
  // console.log("Number " + i);
}; // Number 0, Number 1, Number 2, Number 3, 4 is my favorite number, Number 5, Number 6, Stop looping


// WHILE LOOP

let i = 0;
while (i < 8) {
  // console.log(`Number ` + i);
  i++;
}; // Number 0, Number 1, Number 2, Number 3, Number 4, Number 5, Number 6, Number 7


// DO WHILE LOOP

let j  = 15;
do {
  // console.log(`Number ` + j);
  j++;
} // Number 15

while (j < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevrolet', 'Cadillac', 'Chrysler'];

const users = [
  {id: 0, name: "Bob"},
  {id: 1, name: "Mark"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Mary"},
];

for (let i = 0; i < cars.length; i++) {
  // console.log('The car is ' + cars[i]);
}; // The car is Ford, The car is Chevrolet, The car is Cadillac, The car is Chrysler


// FOREACH
cars.forEach(function (car,index){
  // console.log(`${index} : ${car}`);
}); // 0 : Ford, 1 : Chevrolet, 2 : Cadillac, 3 : Chrysler


// MAP
const names = users.map(function (user) {
  return user.name;
});  // ["Bob", "Mark", "Jane", "Mary"]


// FOR IN LOOP

const user = {
  firstName: "Amy",
  lastName: "Jackson",
  age: 25,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}; // firstName : Amy, lastName : Jackson, age : 25
