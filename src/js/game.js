import Map from "../js/map.js"
import Apple from "../js/apple.js"
import Snake from "../js/snake.js"

const eventLoose = new Event('loose');


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

    get getSpeed() {
        return this.speed;
    }
    set setSpeed(value) {
        this.speed = value;
    }

    run() {
        requestAnimationFrame(this.frame.bind(this));
        window.addEventListener('keydown', (e) => this.snake.addNextMove(e))
    }

    drawScore() {
        this.ctx.fillStyle = "white";
        this.ctx.font = "40px sans-serif";
        this.ctx.textBaseline = "top";
        this.ctx.fillText(this.score, this.map.getGridSize, this.map.getGridSize);
    }

    frame() {
        if (!this.gameover()) {

            this.snake.changeDirection();
            this.snake.updateSnakePosition(this.apple.getPosition);

            let eatApple = this.snake.checkSnakeEatApple(this.apple.getPosition);

            if (eatApple) {
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
            window.dispatchEvent(eventLoose);
            document.getElementById('score').innerText = this.score;
        }
    }

    gameover() {
        return (this.snake.snakeColisionWithBody() || this.snake.snakeColisionWithWall()) ? true : false;
    }

}