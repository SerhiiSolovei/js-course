// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sum2');

console.log(sym1); // Symbol()
console.log(sym2, typeof sym2); // Symbol(sum2) "symbol"
console.log(Symbol('1') === Symbol('1')); // false
console.log(`Hello ${sym2.toString()}`); // Hello Symbol(sum2)

// Unique Object Keys
const key1 = Symbol();
const key2 = Symbol('key2');


const myObj = {};
myObj.key0 = 'Prop0';
myObj[key1] = 'Prop1';
myObj[key2] = 'Prop2';
myObj.key3 = 'Prop3';

console.log(myObj); // {Symbol(): "Prop1", Symbol(key2): "Prop2"}
console.log(myObj[key1], myObj[key2]); // Prop1 Prop2

// Symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`); // key0: Prop0, key3: Prop3
};


// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key1: "prop1"})); // {"key1":"prop1"}
console.log(JSON.stringify({[Symbol('sum1')]: "prop1"})); // {}
