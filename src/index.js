import './style.scss';

import Game from "./js/game.js"

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let game;

document.getElementById('btn-play-game').addEventListener('click', (e) => {
    game = new Game(canvas, ctx);
    game.run();
    hideStartPopUp();
});


document.getElementById('btn-replay-game').addEventListener('click', (e) => {
    game = new Game(canvas, ctx);
    game.run();    
    hideGameOverPopUp();

});

window.addEventListener('loose', function (e) {
    showGameOverPopUp();
})

// DESPLAY POPUP
const hideStartPopUp = () => {
    document.querySelector('.container-popup__start').classList.add('hide');
}

const showGameOverPopUp = () => {
    document.querySelector('.container-popup__game-over').classList.remove('hide');
}

const hideGameOverPopUp = () => {
    document.querySelector('.container-popup__game-over').classList.add('hide');
}

