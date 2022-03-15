'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);
    // whenthere is no imput
    if (!guess) {
        displayMessage('NO number ⛔');

        // when player wins
    } else if (guess === number) {
        displayMessage('🎉CORRECT NUMBER');
        document.querySelector('.number').textContent = number;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // guess is wrong
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? '📈Too high...' : '📉Too low...');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('GAME OVER😢');
            document.querySelector('.number').textContent = number;

            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }
    }
});

//Coding challenge #1
document.querySelector('#again').addEventListener('click', function() {
    //restore score
    score = 20;
    //restore number variable
    number = Math.trunc(Math.random() * 20) + 1;
    //restore message
    displayMessage('Start guessing...');
    //restore number condition
    document.querySelector('.number').textContent = '?';
    //restore score condition
    document.querySelector('.score').textContent = score;
    //restore guess input field
    document.querySelector('.guess').value = '';
    //restore bgcolor
    document.querySelector('body').style.backgroundColor = '#222';
    //restore number width
    document.querySelector('.number').style.width = '15rem';
});