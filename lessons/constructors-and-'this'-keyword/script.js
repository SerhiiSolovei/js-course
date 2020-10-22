// const alex = {
//   name: 'Alex',
//   age: 35,
// };

// Person constructor
function Person (name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
};

const steven = new Person('Steve', '05-30-1980');

// console.log(steven);
// console.log(steven.calculateAge());

// String
const name1 = 'Steven'; // 'Steven' - String
const name2 = new String('Steven'); // String{"Steven"} 0:"S" 1:"t" 2:"e" 3:"v" 4:"e" 5:"n" length:6 - Object

if (name2 === 'Steven') {
  console.log('YES');
} else {
  console.log('NO');
}; // 'NO'

if (name2 == 'Steven') {
  console.log('YES');
} else {
  console.log('NO');
}; // 'YES'

// Number
const num1 = 5; // typeof - number
const num2 = new Number(5); // typeof - object

// Boolean
const bool1 = true; // typeof - boolean
const bool2 = new Boolean(true); // typeof - object

//  Function
function getSum1 (x,y) {
  return x + y;
};

getSum1(1,2) // 3

const getSum2 = new Function('x', 'y', 'return x +y');
getSum2(1,2); // 3

//Object
const obj1 = {
  name: 'Mike',
  age: 25,
}

const obj2 = new Object({name: 'Mike', age: 25,});

console.log(obj1, obj2); // {name: "Mike", age: 25}, {name: "Mike", age: 25}

//Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1, arr2); // (4) [1, 2, 3, 4], (4) [1, 2, 3, 4]

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1, re2); // /\w+/ /\w+/
