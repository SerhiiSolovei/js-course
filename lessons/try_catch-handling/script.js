const user = {phone: '111-222-4442'};
try {
  // Produce a ReferenceError
  // myFunction(); // ReferenceError: myFunction is not defined

  // Produce a TypeError
  // null.myFunction(); // TypeError: Cannot read property 'myFunction' of null

  // Produce a SyntaxError
  // eval('Hello World'); // SyntaxError: Unexpected identifier

  // Produce a URIError
  // decodeURIComponent('%'); // URIError: URI malformed

  if (!user.name) {
    // throw 'User has no name'
    throw new SyntaxError('User has no name');
  } // 'User has no name'
} catch (e) {
  console.log(`User Error: ${e.message}`); // User Error: User has no name
  // console.log(e);
  // console.log(e.name); // TypeError
  // console.log(e.message); // Cannot read property 'myFunction' of null
  // console.log(e instanceof TypeError); // true
} finally {
  console.log('Finally runs regardless of result...');
}
