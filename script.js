'use strict';

let score = 20;
let secretNumber;
let highscore = 0;

// -----UTILITY FUNCTIONS-----
// Generate a secret number
const generateSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1; // This should generate a random number between 1-20
};

generateSecretNumber(); // Calling secret Number Generator

// Change message text
const changeMessageText = function (str) {
  document.querySelector('.message').textContent = str;
};

// Change text display of "score"
const changeScoreDisplay = function (str) {
  document.querySelector('.score').textContent = str;
};

// Change background color
const changeBackgroundColor = function (str) {
  document.querySelector('body').style.backgroundColor = str;
};

// Change number display in heading
const changeNumberDisplay = function (str) {
  document.querySelector('.number').textContent = str;
};

// -----Add event listener for a click on the "check" button------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If player guesses correct number
  if (guess === secretNumber) {
    changeMessageText('🎉 You win!');
    changeBackgroundColor('rgb(96, 179, 71)');
    changeNumberDisplay(secretNumber);
    // Set new highscore
    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  //   If player does not input a number
  else if (!guess) {
    changeMessageText('🛑 No number!');
  }
  //   If guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      changeScoreDisplay(score);
      guess > secretNumber
        ? changeMessageText('📉 Too high!')
        : changeMessageText('📈 Too low!');
    }
    // If score is 1 & player guesses wrong (you lose)
    else {
      changeMessageText('😭 You lose!');
      changeScoreDisplay('0');
      changeNumberDisplay(secretNumber);
      score--;
    }
  }
});

// If player clicks the "Again" button return all fields to starting (except highscore)
document.querySelector('.play-again').addEventListener('click', function () {
  generateSecretNumber();
  score = 20;
  changeScoreDisplay(score);
  changeMessageText('Start guessing...');
  changeNumberDisplay('?');
  document.querySelector('.guess').value = ' '; // Change the guess field to be blank
  changeBackgroundColor('#222');
});
