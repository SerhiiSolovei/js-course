
const id = 100;

// Equal to
if (id == "100") {
  console.log("Correct");
} else {
  console.log("Incorrect");
}; // "Correct"

// Not Equal to
if (id !== 120) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}; // "Correct"

// Equal to value & type
if (id === "100") {
  console.log("Correct");
} else {
  console.log("Incorrect");
}; // "Incorrect"

//Test if undefined
if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log(`No ID`);
}; // "The ID is 100"

//Greater of Less then
if (id > 200) {
  console.log(`${id} more then 200`);
} else {
  console.log(`${id} less then 200`);
}; // "100 less then 200"


// IF ELSE
const color = "black";

if (color === "black") {
  console.log(`The color is ${color}`);
} else if (color === "white") {
  console.log(`The color is ${color}`);
} else {
  console.log(`Other color`);
}; // "The color is black"


//Logical operators
const name = "Alex";
const age = 25;

if (age > 0 && age <= 12) {
  console.log(`${name} is a child`);
} else if (age > 13 && age <= 18) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}; // Alex is an adult

// OR ||
if (age < 6 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} can run in race`);
}; // Alex can run in race

// Ternary operators
console.log(id>=100 ? "Correct" : "Incorrect"); // "Correct"
