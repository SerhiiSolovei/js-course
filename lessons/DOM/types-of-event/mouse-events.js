const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const header = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent); // EVEN TYPE: click

// Double Click
// clearBtn.addEventListener('dblclick', runEvent); // EVEN TYPE: dblclick

// MouseDown
// clearBtn.addEventListener('mousedown', runEvent);

// MouseUp
// clearBtn.addEventListener('mouseup', runEvent);

// MouseEnter
// clearBtn.addEventListener('mouseenter', runEvent);

// MouseLeave
// clearBtn.addEventListener('mouseleave', runEvent);

// MouseOver
// card.addEventListener('mouseover', runEvent);

// MouseOut
// card.addEventListener('mouseout', runEvent);

// MouseMove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent (e) {
  console.log(`EVEN TYPE: ${e.type}`);

  header.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
};
