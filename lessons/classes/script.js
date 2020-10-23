// Create class Person
class Person {
  constructor (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried (newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers (x,y) {
    return x + y;
  }
};


const mary = new Person('Mary', 'Thompson', '08-17-1994');

console.log(mary);

console.log(mary.greeting()); // Hello there Mary Thompson
console.log(mary.calculateAge()); // 26

mary.getsMarried('Williams');

console.log(mary.greeting()); // Hello there Mary Williams

// console.log(mary.addNumbers(1,2)); // TypeError: mary.addNumbers is not a function

console.log(Person.addNumbers(1,2)); // 3
