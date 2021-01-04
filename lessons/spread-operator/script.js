// Spread operator in array
const arr1 = [1,2,3,4];
const arr2 = [7,2,5]

console.log(arr1, ...arr1); // [1, 2, 3, 4]; 1 2 3 4


const res = Math.max(...arr1, ...arr2);
console.log(res); // 7

const shallowCopy = [...arr1];

console.log(shallowCopy, arr1 === shallowCopy); // [1, 2, 3, 4], false

const shallowCopy2 = [...arr1, ...arr2];
console.log(shallowCopy2); // [1, 2, 3, 4, 7, 2, 5]

// Spread operator in function
function sumAll(...args) {
  let sum = 0;

  args.forEach(arg => sum += arg);

  return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6
