import Map from "../js/map.js"
import Apple from "../js/apple.js"
import Snake from "../js/snake.js"

export default class Game {


    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.score = 0;
        this.speed = 5;
        this.map = new Map(this.canvas, this.ctx);
        this.apple = new Apple(this.map);
        this.snake = new Snake(this.map);

    }

    hideGameOverPopUp() {
        document.querySelector('.container-popup__game-over').classList.add('hide');
    }

    showGameOverPopUp() {
        document.querySelector('.container-popup__game-over').classList.remove('hide');
    }

    get getSpeed() {
        return this.speed;
    }
    set setSpeed(value) {
        this.speed = value;
    }

    

    run() {
        this.hideGameOverPopUp();
        requestAnimationFrame(this.frame.bind(this));
        window.addEventListener('keydown', (e) => this.snake.addNextMove(e))
    }

    drawScore() {
        this.ctx.fillStyle = "white";
        this.ctx.font = "40px sans-serif";
        this.ctx.textBaseline = "top";
        this.ctx.fillText(this.score, this.map.getGridSize, this.map.getGridSize);
    };

    frame() {
        if (!this.gameover()) {
            this.snake.changeDirection();
            this.snake.updateSnakePosition(this.apple.getPosition);
            if (this.snake.checkSnakeEatApple(this.apple.getPosition)) {
                this.apple.setRandomPosition(this.snake.getPosition);
                this.score++;
            }
            this.map.draw();
            this.apple.draw();
            this.snake.draw();
            this.drawScore();

            setTimeout(() => {
                requestAnimationFrame(this.frame.bind(this));
            }, 1000 / this.speed);
        } else {
            this.showGameOverPopUp();
            document.getElementById('score').innerText = this.score;
        }
    }

    gameover() {
        return (this.snake.snakeColisionWithBody() || this.snake.snakeColisionWithWall()) ? true : false;
    }

}