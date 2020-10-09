const firstName = "Steven";
const secondName = "Gerrard";
const str = "Hello there my name is Serhii"
const tags = "web design, wed developer, programming"


let val;

//Concatenation
val = firstName + secondName; // "StevenGerrard"
val = firstName + " " + secondName; // "Steven Gerrard"
val = "The best footballer in Liverpool Football History is " + firstName + " " + secondName; // "The best footballer in Liverpool Football History is Steven Gerrard"

// Append
val = "David "; // "David "
val += "Beckham"; // "David Beckham"

// Escaping
val = 'That\'s awesome, I can\'t wait'; // "That's awesome, I can't wait"

// Length
val = firstName.length; // 6

// Concat
val = firstName.concat(" ", secondName); // "Steven Gerrard"

// Change case
val = secondName.toUpperCase(); // "GERRARD"
val = secondName.toLowerCase(); // "gerrard"

// indexOf & lastIndexOf
val = firstName[3]; // "v";

val = firstName.indexOf('e'); // 2
val = firstName.lastIndexOf('e'); //4

// charAt
val = firstName.charAt(1); // "t"

// Get last char
val = firstName.charAt(firstName.length - 1); // "n"

// substring
val = firstName.substring(0,5); // "Steve"

// slice
val = firstName.slice(0,5); // "Steve"
val = firstName.slice(-3); // "ven"

// split
val = str.split(" "); // ["Hello", "there", "my", "name", "is", "Serhii"]
val = tags.split(","); // ["web design", " wed developer", " programming"]

// replace
val = str.replace("Serhii", "Alex"); // Hello there my name is Alex

// includes
val = str.includes("name"); // true
val = str.includes("Name"); // false
