//FUNCTION DECLARATION

function greeting (firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
};

console.log(greeting("Adam", "Gold")); // "Hello Adam Gold"

// no argument values
function greeting1 (firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
};

console.log(greeting1()); // "Hello undefined undefined"

// default argument values
function greeting2 (firstName = "John", lastName = "Smith") {
  // if (typeof firstName === "undefined") {firstName === "John"};
  // if (typeof lastName === "undefined") {lastName === "Smith"};
  return "Hello " + firstName + " " + lastName;
};

console.log(greeting2()); // "Hello John Smith"


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs

(function(){
  console.log("Hello world!");
})(); // "Hello world!"

(function(name){
  console.log(`Hello ${name}`);
})("Mike"); // "Hello Mike"

//  PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo...");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo...");
};

todo.add(); // Add todo...
todo.edit(87); //Edit todo 87
todo.delete(); //Delete todo...
