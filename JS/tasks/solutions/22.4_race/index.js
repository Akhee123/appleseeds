
const game = document.getElementsByClassName('racer-table')[0];

const player1 = document.querySelectorAll('#player1-race td');
const player2 = document.querySelectorAll('#player2-race td');

// alert("Game start");
let player1Pos = 0;
let player2Pos = 0;

window.addEventListener('keyup', (event) =>{
    console.log(event);
    if (event.key === 'ArrowRight'){
        player1[player1Pos].className = '';
        player1Pos++;
        player1[player1Pos].className = 'active';
        // console.log(player1Pos);
    }

    if (event.key === 'd'){
        player2[player2Pos].className = '';
        player2Pos++;
        player2[player2Pos].className = 'active';
    }

    if (player1Pos === 11){
        alert("Player 1 Won!!!");
    }

    if (player2Pos === 11){
        alert("Player 2 Won!!!");
    }
})

