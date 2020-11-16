let re;
re = /hello/;
re = /hello/i; // i - case insensitive
// re = /hello/g; // g - global search

// console.log(re, typeof re); // /hello/, object
// console.log(re.source); // hello


// exec() - Return result in an array or null
// const result = re.exec('hello world');
// console.log(result); // ["hello", index: 0, input: "hello world", groups: undefined]
// console.log(result[0]); // hello
// console.log(result.index); // 0
// console.log(result.input); // hello world

// const result2 = re.exec('hell world');
// console.log(result2); // null

// test() - Returns true or false
// const result = re.test('Hello');
// const result2 = re.test('hello');
// console.log(result); // true
// console.log(result2); // true


// match() - Return result array or null
// const str = 'Hello There';
// const str1 = 'Hell There';
// let result = str.match(re);
// console.log(result); // ["Hello", index: 0, input: "Hello There", groups: undefined]
// result = str1.match(re);
// console.log(result); // null

// search() - Return index of the first match if not found returns -1
// const str = 'Hello There';
// const str1 = 'Steve Hello There';
// const str2 = 'Hell There'
// let result = str.search(re);
// console.log(result); // 0
// result = str1.search(re); //
// console.log(result); // 6
// result = str2.search(re); //
// console.log(result); // -1

// replace() - Return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr); // 'Hi There'
