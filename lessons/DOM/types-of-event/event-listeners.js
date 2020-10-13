// document.querySelector('.clear-tasks').addEventListener('click', function(e){

//   e.preventDefault();
//   console.log('Hello World!');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick (e) {
  // console.log('Hello World');

  let val;
  val = e;

  // Even target element
  val = e.target; // <a class="clear-tasks btn black" href="#">Clear Tasks</a>
  val = e.target.id; //
  val  = e.target.className; // clear-tasks btn black
  val = e.target.classList; // 0: "clear-tasks" 1: "btn" 2: "black" - DOMTokenList

  // Even type
  val = e.type; // click

  // Timestamp
  val = e.timeStamp; // returns the time (in milliseconds) at which the event was created.

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
