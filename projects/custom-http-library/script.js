const http = new easyHTTP();

// GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// GET Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: "Custom Post",
  body: "This is a Custom Post"
};

// POST POSTS
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   };
// });

// PUT POST (Update)
// http.put('https://jsonplaceholder.typicode.com/posts/7', data, function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   };
// });


// DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/7', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  };
});
