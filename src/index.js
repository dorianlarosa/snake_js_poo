import './style.scss';

import Game from "./js/game.js"



// // IMAGES

// import imgApple from './images/apple.png';
// let imageApple = new Image();
// imageApple.src = imgApple;

// import imgSnakeTurn4 from './images/turn_snake_4.png';
// let imageSnakeTurn4 = new Image();
// imageSnakeTurn4.src = imgSnakeTurn4;


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
});

// DESPLAY POPUP
const hideStartPopUp = () => {
    document.querySelector('.container-popup__start').classList.add('hide');
}





// // init game var 

//console.log(apple);





// let nextsMoves = [];

// let score = 0;
// let speed = initialSpeed;
// let lastScoreIncreaseSpeed;


// // DRAW GAME

// // const drawMap = () => {
// //     ctx.fillStyle = "#202020";
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);

// //     let c = 0;
// //     let countColumn = canvas.width / gridElem;

// //     for (let indexColumn = 0; indexColumn < countColumn; indexColumn++) {
// //         let l = 0;
// //         if (indexColumn % 2) {
// //             l = gridElem;
// //         } else {
// //             l = 0;
// //         }
// //         for (let indexLine = 0; indexLine < countColumn; indexLine++) {
// //             ctx.fillStyle = "rgb(29, 29, 29)";
// //             ctx.fillRect(c, l, gridElem, gridElem);
// //             l += gridElem + gridElem;
// //         }

// //         c += gridElem;
// //     }
// // };





// const drawScore = () => {
//     ctx.fillStyle = "white";
//     ctx.font = "40px sans-serif";
//     ctx.textBaseline = "top";
//     ctx.fillText(score, gridElem, gridElem);
// };



// // COLISIONS
// const snakeColisionWithWall = () => {
//     for (const index in snake) {
//         const snakeItem = snake[index];
//         if (snakeItem.y >= canvas.height / gridElem ||
//             snakeItem.y < 0 ||
//             snakeItem.x >= canvas.width / gridElem ||
//             snakeItem.x < 0) {
//             return true;
//         }
//     }

//     return false;
// }



// const gameover = () => {
//     return (snakeColisionWithBody() || snakeColisionWithWall()) ? true : false;
// };




// const generatePositionAvailableForApple = () => {
//     const {
//         x,
//         y
//     } = {
//         x: Math.trunc(Math.random() * canvas.width / gridElem),
//         y: Math.trunc(Math.random() * canvas.width / gridElem),
//     };


//     if (snake.some(snakeItems => JSON.stringify(snakeItems) === JSON.stringify({
//             x,
//             y
//         }))) {
//         return generatePositionAvailableForApple();
//     } else {
//         apple = {
//             x: x,
//             y: y
//         };
//     }
// }






// // EVENTS
// // @todo refactoriser

// document.getElementById('btn-play-game').addEventListener('click', (e) => {
//     runGame();
//     hideStartPopUp();
// });

// document.getElementById('btn-replay-game').addEventListener('click', (e) => {
//     runGame();
//     toggleGameOverPopUp();
// });

// window.addEventListener('load', (e) => {
//     //drawMap();
//     drawScore();
// }); 


// // DESPLAY POPUP
// const hideStartPopUp = () => {
//     document.querySelector('.container-popup__start').classList.add('hide');
// }

// const toggleGameOverPopUp = () => {
//     document.querySelector('.container-popup__game-over').classList.toggle('hide');
// }