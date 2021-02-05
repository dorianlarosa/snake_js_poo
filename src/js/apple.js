import imgApple from '../images/apple.png';
let image = new Image();
image.src = imgApple;

export default class Apple {
    constructor(map) {
        this.canvas = map.canvas;
        this.ctx = map.ctx;
        this.image = image;
        this.canvasWidth = map.width;
        this.canvasHeight = map.height;
        this.gridSize = map.gridSize;
        this.position = {
            x: 5,
            y: 5
        }

    }

    get getPosition() {
        return this.position;
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x * this.gridSize, this.position.y * this.gridSize, this.gridSize, this.gridSize);
    }

    setRandomPosition(snakePosition) {
        const newPosition = {
            x: Math.trunc(Math.random() * this.canvasWidth / this.gridSize),
            y: Math.trunc(Math.random() * this.canvasHeight / this.gridSize),
        };

        if (snakePosition.some(snakeItems => JSON.stringify(snakeItems) === JSON.stringify(newPosition))) {
            return this.setRandomPosition(snakePosition);
        } else {
            this.position = newPosition;
        }
    }
}