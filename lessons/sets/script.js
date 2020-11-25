// SETS - store unique values of any types

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'Steve'});
set1.add(true);
set1.add(100);

console.log(set1, typeof set1); // Set(4) {100, "A string", {…}, true} "object"

const set2 = new Set([1, 'A string', true]);

console.log(set2); // Set(3) {1, "A string", true}

// Get count
console.log(set1.size); // 4

// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true
console.log(set1.has({name: 'Steve'})); // false - reference value not a primitive one

// Delete form set
console.log(set1.delete({name: 'Steve'})); // false - reference value not a primitive one
console.log(set1.delete(100)); // true

console.log(set1); // Set(3) {"A string", {…}, true}

// ITERATING THROUGH SETS

// For..of
for (let item of set1) {
  console.log(item);
}; // A string, {name: "Steve"}, true

// ForEach Loop
set1.forEach((value)=>console.log(value)); // // A string, {name: "Steve"}, true

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr); // ["A string", {…}, true]
