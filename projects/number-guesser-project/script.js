/*
GAME FUNCTION:
- Player must guess a number between min and max;
- Player gets a certain amount of guesses;
- Notify player of guesses remaining;
- Notify player of the correct answer if loose;
- Let player choose to play again;
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI vars
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e){
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  };

  // Check If Win
  if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct! YOU WIN!`);

  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `GAME OVER, YOU LOST! The correct answer is ${winningNum}`);

    } else {
      // Game continue - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear the input
      guessInput.value = '';

      // Tell user that its wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game Over
function gameOver (won, msg) {
  let color;

  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;

  // Change border color
  guessInput.style.borderColor =  color;

  // Set text color
  message.style.color = color;

  // Set message
  setMessage(msg);

  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
};

// Get Random Number
function getRandomNum (min, max) {
  return Math.floor(Math.random()*(max- min + 1) + min);
};

// Set message
function setMessage (msg, color) {
  message.style.color = color;
  message.textContent = msg;
};
