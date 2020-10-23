// Create prototype object
const personPrototype = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const person1 = Object.create(personPrototype);

person1.firstName = 'Mary';
person1.lastName = 'May';
person1.age = 30;

console.log(person1.greeting()); // Hello there Mary May

person1.getsMarried('Peterson');

console.log(person1.greeting()); // Hello there Mary Peterson


const person2 = Object.create(personPrototype, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Christensen'},
  age: {value: 36},
});

console.log(person2.greeting()); // Hello there Brad Christensen
