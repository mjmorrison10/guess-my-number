'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const hiscore = document.querySelector('.highscore');
const reset = document.querySelector('.again');
const background = document.body;

let winningNumber = Math.floor(Math.random() * 21);

console.log(winningNumber);
// message.textContent = "Correct number!";

// number.textContent = 13;
// score.textContent = 20;

check.addEventListener('click', checkWinner);

function checkWinner(e) {
  e.preventDefault();
  console.log(guess.value);
  if (guess.value == winningNumber) {
    message.textContent = 'Correct number!';
    background.style.backgroundColor = 'green';
    if (hiscore.textContent < score.textContent) {
      hiscore.textContent = score.textContent;
    }
  } else if (guess.value > winningNumber) {
    message.textContent = 'Too high!';
    background.style.backgroundColor = 'red';
    score.textContent = parseInt(score.textContent) - 1;
    timeOut('#222');
  } else if (guess.value < winningNumber) {
    message.textContent = 'Too low!';
    background.style.backgroundColor = 'red';
    score.textContent = parseInt(score.textContent) - 1;
    timeOut('#222');
  } else {
    message.textContent = 'Wrong number!';
    background.style.backgroundColor = 'red';
    score.textContent = parseInt(score.textContent) - 1;
    timeOut('#222');
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
  background.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  winningNumber = Math.floor(Math.random() * 21);
  console.log(winningNumber);
}

reset.addEventListener('click', resetGame);
