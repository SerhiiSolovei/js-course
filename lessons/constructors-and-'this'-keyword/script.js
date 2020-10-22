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

console.log(steven);
console.log(steven.calculateAge());
