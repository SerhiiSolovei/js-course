// Creating different arrays
const numbers = [4,64,14,43,78,8];
const numbers2 = new Array(58,21,9,44,17,36);
const vegetables = ['Potato', 'Tomato', 'Cabbage', 'Cucumber', 'Onion', 'Beans'];
const mixed = [77, 'Hello', true, undefined, null, new Date(), {a:1, b:2}];

let val;

// Array length
val = numbers.length; // 6

// Check if is array
val = Array.isArray(numbers); // true
val = Array.isArray(123); // false

// Get single value
val = numbers[1]; // 64
val = numbers[numbers.length - 1]; // last element - 8

// Insert into array
numbers[2] = 99;
val = numbers; // [4,64,99,43,78,8];

//Find index of value
val = numbers.indexOf(43); // 3;


// MUTATING ARRAYS
// Add on the end of array
val = numbers.push(15); // return new length of array - 7
val = numbers; // [4, 64, 99, 43, 78, 8, 15]

//Add on the beginning of array
val = numbers.unshift(22); // return new length of array - 8
val = numbers; // [22, 4, 64, 99, 43, 78, 8, 15]

//Take off from the end of array
val = numbers.pop(); // return number that was removed from array - 15
val = numbers; // [22, 4, 64, 99, 43, 78, 8]

//Take off from the beginning of array
val = numbers.shift(); // return number that was removed from array - 22
val = numbers; // [4, 64, 99, 43, 78, 8]

//Splice values
val = numbers.splice(2,4); // [99, 43, 78, 8]
// console.log(numbers); // [4, 64]

//Reverse
const arr = [23, 54, 6, 40, 2, 16, 84];
val = arr.reverse(); // [84, 16, 2, 40, 6, 54, 23]

//Concatenate array
//Concat method
val = numbers2.concat(arr); // [58, 21, 9, 44, 17, 36, 84, 16, 2, 40, 6, 54, 23]

//Sorting
val = vegetables.sort(); // ["Beans", "Cabbage", "Cucumber", "Onion", "Potato", "Tomato"] sorts by first char
val = numbers2.sort(); // [17, 21, 36, 44, 58, 9]

// Use the "compare function"
val = numbers2.sort(function (x,y) {return x - y}); // [9, 17, 21, 36, 44, 58]

//Reverse sort
val = numbers2.sort(function (x,y) {return y - x}); // [58, 44, 36, 21, 17, 9]

//Find method
function under30(num) {
  return num < 30;
}

val = numbers2.find(under30); // 21

console.log(val);
