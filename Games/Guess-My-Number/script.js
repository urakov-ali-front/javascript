'use strict';

let targetNumber = Math.trunc(Math.random() * 20) + 1;
let startScore = 20;
let highScore = 0;

const resultNumber = document.querySelector('.number')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
score.textContent = startScore


document.querySelector('.check').addEventListener('click', function () 
{
    const guessValue = document.querySelector('.guess').value;
    if (startScore > 1) {

        if (guessValue == targetNumber) {
            message.textContent = '🔥  You won'
            resultNumber.textContent = targetNumber
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'
            
            if (startScore > highScore) {
                highScore = startScore
                document.querySelector('.highscore').textContent = highScore
            }
        } else if (guessValue !== targetNumber) {
            message.textContent = guessValue > targetNumber ? '📈 too high' : '📉 too low' 
            startScore--
            score.textContent = startScore
        }

    } else {
        message.textContent = 'Game over'
        score.textContent = 0
    }

    if (!guessValue) {
        document.querySelector('.message').textContent = 'No number is written'
    }
});

document.querySelector('.again').addEventListener('click', function() {
    
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222222'
    message.textContent = 'Start guessing...'
    score.textContent = 20
    startScore = 20
    targetNumber = Math.trunc(Math.random() * 20) + 1;
    
    resultNumber.textContent = '?'
})
