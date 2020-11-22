// Iterator Example
function nameIterator (names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length ?
      {value: names[nextIndex++], done: false}:
      {done: true}
    }
  }
} ;


// Create an array of names
const namesArr = ['John', 'James', 'Jacob', 'Julia'];

// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next()); // {value: "John", done: false}
console.log(names.next().value); // James
console.log(names.next().value); // Jacob
console.log(names.next().value); // Julia
console.log(names.next()); // {done: true}


// Generator Example
function* sayNames () {
  yield 'John';
  yield 'James';
  yield 'Jacob';
  yield 'Julia';
};

const names1 = sayNames();
console.log(names1.next().value); // John
console.log(names1.next().value); // James
console.log(names1.next().value); // Jacob
console.log(names1.next().value); // Julia
console.log(names1.next().value); // undefined

// ID Creator
function* idsCreator () {
  let index = 1;

  while (index < 12) {
    yield index++;
  };
};

const gen = idsCreator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // 5
console.log(gen.next().value); // 6
console.log(gen.next().value); // 7
console.log(gen.next().value); // 8
console.log(gen.next().value); // 9
console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // undefined
