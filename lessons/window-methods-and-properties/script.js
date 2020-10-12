// ALERT

// alert("Hello World!");

// PROMPT

// const input = prompt();
// alert(input);

// CONFIRM

// if (confirm("Are you sure?")) {
//   alert("Yes");
// } else {
//   alert("No");
// }

let val;

// Outer height and width

val = window.outerHeight; // whole browser window, including any sidebar, window chrome, and window-resizing borders/handles.
val = window.outerWidth; // width of the whole browser window including sidebar (if expanded), window chrome and window resizing borders/handles.


//Inner height and width

val = window.innerHeight; // value of innerHeight is taken from the height of the window's layout viewport.
val = window.innerWidth; //  returns the width of the window's layout viewport.


//Scroll Object

val = window.scrollY; // returns the number of pixels that the document is currently scrolled vertically.
val = window.scrollX; // returns the number of pixels that the document is currently scrolled horizontally.

// Location Object
val = window.location;
val = window.location.hostname; // 127.0.0.1
val = window.location.port; // 5500
val = window.location.href; // http://127.0.0.1:5500/lessons/window-methods-and-properties/index.html
val = window.location.search; //

//Redirect
// window.location.href = "http://google.com";

// Reload
// window.location.reload();

// History Object
// window.history.go(-1);
val = window.history.length;


// Navigator Object

val = window.navigator;
val = window.navigator.appVersion;
val = window.navigator.appName;
val = window.navigator.userAgent;
val = window.navigator.vendor;
val = window.navigator.language;
val = window.navigator.platform;

console.log(val);
