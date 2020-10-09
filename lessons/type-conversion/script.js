// Type Conversion

let val;

// Number to string
val = String(555); // "555";
val = String(5+5); // "10";

// Boolean to string
val = String(true); // "true";
val = String(false); // "false"'

// Data to string
val = String(new Date());
console.log(val, val.length); // "Fri Oct 09 2020 16:59:37 GMT+0300 (Восточная Европа, летнее время)", 66;

// Array to string
val = String([1,2,3,4,5]);
console.log(val, val.length); // "1,2,3,4,5", 9;

// Method to.String()
val = (10).toString(); // "10";
val = (true).toString(); // "true";

// String to number
val = Number("5"); // 5;
val = Number("5+4"); // NaN (not a number);
val = Number("hello"); // Nan;

// Boolean to number
val = Number(true); // 1;
val = Number(false); // 0;

// Null to number
val = Number(null); // 0;

val = parseInt("100.55"); // 100
val = parseFloat("100.55"); // 100.55


// Type Coercion

const val1 = 5;
const val2 = 7;
const sum = val1 + val2; // 12

const val3 = "5";
const val4 = "7";
const sum2 = val3 + val4; // "57";
console.log(sum2);
