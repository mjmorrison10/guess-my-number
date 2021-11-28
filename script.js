'use strict';

// const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const hiscore = document.querySelector('.highscore');
const reset = document.querySelector('.again');
// const background = document.body;

let winningNumber = Math.floor(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const backgroundColor = function (color) {
  document.body.style.backgroundColor = color;
};

const errorMessage = function (color) {
  background.style.backgroundColor = color;
  score.textContent = parseInt(score.textContent) - 1;
  timeOut('#222');
};

console.log('winning number', winningNumber);
// message.textContent = "Correct number!";

// number.textContent = 13;
// score.textContent = 20;

check.addEventListener('click', checkWinner);

function checkWinner(e) {
  e.preventDefault();
  console.log(guess.value);
  if (guess.value == winningNumber) {
    displayMessage('Correct number!');
    backgroundColor('green');
    number.textContent = winningNumber;
    if (hiscore.textContent < score.textContent) {
      hiscore.textContent = score.textContent;
    }
  } else if (guess.value != winningNumber) {
    displayMessage(guess.value > winningNumber ? 'Too high!' : 'Too low!');
    errorMessage('red');
  } else {
    displayMessage('Please enter a number!');
    errorMessage('red');
  }
}

function timeOut(color) {
  setTimeout(function () {
    background.style.backgroundColor = color;
  }, 100);
}

function resetGame() {
  guess.value = '';
  score.textContent = 20;
  backgroundColor('#222');
  displayMessage('Start guessing...');
  winningNumber = Math.floor(Math.random() * 21);
  console.log('winning number', winningNumber);
}

reset.addEventListener('click', resetGame);
