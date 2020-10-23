// Object.prototypes
// Person.prototypes

// Person Constructor

function Person (firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - new Date(dob).getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
};

// Calculate Age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
}

const steve = new Person('Steven', 'Johnson', 'May 30 1980');
const mary = new Person('Mary', 'Smith', '10-07-1991');

console.log(steve.lastName);
steve.getFullName() // Steven Johnson

console.log(mary.getFullName()); // Mary Smith

mary.getsMarried(steve.lastName);

console.log(mary.getFullName()); // Mary Johnson

console.log(mary.hasOwnProperty('firstName')); // true
console.log(mary.hasOwnProperty('getFullName')); // false
