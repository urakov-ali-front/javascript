'use strict';

//selecting elements
const diceEl = document.querySelector('.dice');

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');


//starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

const overallScores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let activePlayer = 0;
let playing = true;

//switch function
const switchPlayer = function() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0; 
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

//rolling the dice function
btnRoll.addEventListener('click', function(){
    if (playing) {
        //1.create a random dice number
        let dice = Math.trunc(Math.random() * 6) + 1;

        //2.change the dice photo according to created number
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3.check for rolled 1: 
        if(dice !== 1) {
            //if false then add dice to current score
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore; 
        } else {
            //switch to next player
            switchPlayer();

        };
    };
});

btnHold.addEventListener('click', function() {
    if (playing) {
        //1.add current score to the active player's score
        overallScores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = overallScores[activePlayer];
        //2.check if the player score is not higher than 100
        if (overallScores[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            //finishing the game
            playing = false;
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    };
})




