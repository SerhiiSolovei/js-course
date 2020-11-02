const http = new EasyHTTP();

// Get users
// http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));


// User Data
const data = {
  name: 'Serhii Solovei',
  username: 'Serhii_Solovei',
  email: 'serhiisolovei@gmail.com'
}

// Create User
// http.post('http://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// Update Post (PUT)
// http.put('http://jsonplaceholder.typicode.com/users/7', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// Delete User
http.delete('http://jsonplaceholder.typicode.com/users/7')
.then(data => console.log(data))
.catch(err => console.log(err));
