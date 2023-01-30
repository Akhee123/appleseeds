// Images
const diceImages = ["img/dice-1.png",
                    "img/dice-2.png",
                    "img/dice-3.png",
                    "img/dice-4.png",
                    "img/dice-5.png",
                    "img/dice-6.png",
                ]
const images = document.getElementsByClassName('dice-img');

// Screens
const startPage = document.getElementById('screen-1');
const playPage = document.getElementById('screen-2');

// First Screen
const setScore = document.querySelector('#screen-1 input');
const startGame = document.querySelector('#screen-1 button');

// Second Screen
const player1Screen = document.getElementById('player-1');
const player2Screen= document.getElementById('player-2');

// Players scores
const player1Current = document.querySelector('player-1 .current');
const player1Score = document.querySelector('player-1 .score');

const player2Current = document.querySelector('player-2 .current');
const player2Score = document.querySelector('player-2 .score');

// Game
const playAgain = document.getElementById('new-game');
const roll = document.getElementById('roll-dice');
const hold = document.getElementById('hold');

// Players
let inputScore;
const players = 
[{
    id : 1,
    current : 0,
    score : 0,
    turn : false,
    },
{
    id : 2,
    current : 0,
    score : 0,
    turn : true,
    }
];

// Before the game starts
playPage.style.display = 'none';

// Hide first screen and save input score
startGame.addEventListener('click', () =>{
    inputScore = Number(setScore.value);
    startPage.style.display = 'none';
    playPage.style.display = 'flex';
    players.forEach(player => {
        player.current = 0;
        player.score = 0;
        player.turn = false;
    });
    players[0].turn = true;
})

roll.addEventListener('click', () =>{
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    
})
