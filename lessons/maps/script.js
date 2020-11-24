// MAPS - keys-value - can use ANY type as a key or value

const map1 = new Map();

// Set keys
const key1 = 'some string',
      key2 = {},
      key3 = function () {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1, typeof map1); // Map(3) {"some string" => "Value of key1", {…} => "Value of key2", ƒ => "Value of key3"} "object"

console.log(map1.get(key1), map1.get(key2), map1.get(key3)); // Value of key1 Value of key2 Value of key3

// Count values
console.log(map1.size); // 3

// ITERATING MAPS

// Loop using for..of to get and values
for (let [keys,value] of map1) {
  console.log(`${keys} = ${value}`);
}; // some string = Value of key1 , [object Object] = Value of key2, function () {} = Value of key3

// Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}; // some string, {}, ƒ () {}

// Iterate value only
for (let value of map1.values()) {
  console.log(value);
}; // Value of key1, Value of key2, Value of key3


// Loop with forEach
map1.forEach((value, keys) => {
  console.log(`${keys} = ${value}`);
}); // some string = Value of key1 , [object Object] = Value of key2, function () {} = Value of key3;

// CONVERT TO ARRAYS

// Create an array of the key value pairs
const keyValArr = Array.from(map1);

console.log(keyValArr); // [["some string", "Value of key1"], [{…}, "Value of key2"], [ƒ, "Value of key3"]];

// Create an array of values
const valArr = Array.from(map1.values());

console.log(valArr); // ["Value of key1", "Value of key2", "Value of key3"]

// Create an array of keys
const keyArr = Array.from(map1.keys());

console.log(keyArr); // ["some string", {…}, ƒ]
