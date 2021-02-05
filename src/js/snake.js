// body snake
import imgBodySnake from '../images/body_snake.png';
let imageBodySnake = new Image();
imageBodySnake.src = imgBodySnake;

import imgBodySnakeVertical from '../images/body_snake_vertical.png';
let imageBodySnakeVertical = new Image();
imageBodySnakeVertical.src = imgBodySnakeVertical;

// head snake
import imgHeadSnakeRight from '../images/head_snake_right.png';
let imageHeadSnakeRight = new Image();
imageHeadSnakeRight.src = imgHeadSnakeRight;

import imgHeadSnakeLeft from '../images/head_snake_left.png';
let imageHeadSnakeLeft = new Image();
imageHeadSnakeLeft.src = imgHeadSnakeLeft;

import imgHeadSnakeTop from '../images/head_snake_top.png';
let imageHeadSnakeTop = new Image();
imageHeadSnakeTop.src = imgHeadSnakeTop;

import imgHeadSnakeBottom from '../images/head_snake_bottom.png';
let imageHeadSnakeBottom = new Image();
imageHeadSnakeBottom.src = imgHeadSnakeBottom;

// turn snake
import imgSnakeTurn1 from '../images/turn_snake_1.png';
let imageSnakeTurn1 = new Image();
imageSnakeTurn1.src = imgSnakeTurn1;

import imgSnakeTurn2 from '../images/turn_snake_2.png';
let imageSnakeTurn2 = new Image();
imageSnakeTurn2.src = imgSnakeTurn2;

import imgSnakeTurn3 from '../images/turn_snake_3.png';
let imageSnakeTurn3 = new Image();
imageSnakeTurn3.src = imgSnakeTurn3;

import imgSnakeTurn4 from '../images/turn_snake_4.png';
let imageSnakeTurn4 = new Image();
imageSnakeTurn4.src = imgSnakeTurn4;

// queue snake
import imgSnakeLastBodyTop from '../images/last_body_snake_top.png';
let imageSnakeLastBodyTop = new Image();
imageSnakeLastBodyTop.src = imgSnakeLastBodyTop;

import imgSnakeLastBodyLeft from '../images/last_body_snake_left.png';
let imageSnakeLastBodyLeft = new Image();
imageSnakeLastBodyLeft.src = imgSnakeLastBodyLeft;

import imgSnakeLastBodyRight from '../images/last_body_snake_right.png';
let imageSnakeLastBodyRight = new Image();
imageSnakeLastBodyRight.src = imgSnakeLastBodyRight;

import imgSnakeLastBodyBottom from '../images/last_body_snake_bottom.png';
let imageSnakeLastBodyBottom = new Image();
imageSnakeLastBodyBottom.src = imgSnakeLastBodyBottom;

export default class Snake {
    constructor(map) {
        this.canvas = map.canvas;
        this.ctx = map.ctx;
        this.canvasWidth = map.width;
        this.canvasHeight = map.height;
        this.gridSize = map.gridSize;
        this.position = [{
            x: 4,
            y: 1
        }, {
            x: 3,
            y: 1
        }, {
            x: 2,
            y: 1
        }, {
            x: 1,
            y: 1
        }];
        this.nextsMoves = [];

        this.direction = 'right';
        this.speed = 7;
    }

    get getPosition() {
        return this.position;
    }

    draw() {
        for (const index in this.position) {
            let currentSnakeItem = this.position[index];
            let nextItem = this.position[parseFloat(index) + 1];
            let prevItem = this.position[index - 1];
            let image;

            const directionWithUppercase = this.direction[0].toUpperCase() + this.direction.substring(1);

            // determine head image
            if (prevItem == undefined) {
                switch (this.direction) {
                    case 'right':
                        image = imageHeadSnakeRight;
                        break;
                    case 'bottom':
                        image = imageHeadSnakeBottom;
                        break;
                    case 'left':
                        image = imageHeadSnakeLeft;
                        break;
                    case 'top':
                        image = imageHeadSnakeTop;
                        break;
                }

                this.ctx.drawImage(image, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);

            }

            // determine last item body image
            else if (nextItem == undefined) {

                switch (true) {
                    case prevItem.x > currentSnakeItem.x:
                        image = imageSnakeLastBodyRight;
                        break;
                    case prevItem.x < currentSnakeItem.x:
                        image = imageSnakeLastBodyLeft;
                        break;
                    case prevItem.y < currentSnakeItem.y:
                        image = imageSnakeLastBodyTop;
                        break;
                    case prevItem.y > currentSnakeItem.y:
                        image = imageSnakeLastBodyBottom;
                        break;
                }

                this.ctx.drawImage(image, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
            }

            // determine body image
            else {

                switch (true) {
                    case currentSnakeItem.x > prevItem.x && currentSnakeItem.y > nextItem.y || currentSnakeItem.x > nextItem.x && currentSnakeItem.y > prevItem.y:
                        image = imageSnakeTurn3;
                        break;
                    case currentSnakeItem.x < prevItem.x && currentSnakeItem.y < nextItem.y || currentSnakeItem.x < nextItem.x && currentSnakeItem.y < prevItem.y:
                        image = imageSnakeTurn1;
                        break;
                    case currentSnakeItem.x > nextItem.x && currentSnakeItem.y < prevItem.y || currentSnakeItem.x > prevItem.x && currentSnakeItem.y < nextItem.y:
                        image = imageSnakeTurn2;
                        break;
                    case currentSnakeItem.x < nextItem.x && currentSnakeItem.y > prevItem.y || currentSnakeItem.x < prevItem.x && currentSnakeItem.y > nextItem.y:
                        image = imageSnakeTurn4;
                        break;
                    case currentSnakeItem.x != prevItem.x:
                        image = imageBodySnake;
                        break;
                    case currentSnakeItem.y != prevItem.y:
                        image = imageBodySnakeVertical;
                        break;
                }

                this.ctx.drawImage(image, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
            }
        }
    }

    // EAT APPLE
    checkSnakeEatApple(applePosition) {
        return (JSON.stringify(this.position[0]) === JSON.stringify(applePosition)) ? true : false;
    }

    changeDirection() {
        if (this.nextsMoves.length > 0) {
            this.direction = this.nextsMoves[0];
            this.nextsMoves.shift();
        }
    }
    addNextMove(e) {
        const autorisedMoves = [];
        const unautorisedMoves = [];
        let nextDirection;

        switch (e.key) {
            case 'ArrowUp':
                nextDirection = 'top';
                console.log('ArrowUp');
                break;

            case 'ArrowDown':
                nextDirection = 'bottom';
                console.log('ArrowDown');
                break;

            case 'ArrowRight':
                nextDirection = 'right';
                console.log('ArrowRight');
                break;
                
            case 'ArrowLeft':
                nextDirection = 'left';
                console.log('ArrowLeft');
                break;
        }

        switch (this.direction) {
            case 'bottom':
                autorisedMoves.push('left', 'right')
                unautorisedMoves.push('top', 'bottom')
                break;
            case 'top':
                autorisedMoves.push('left', 'right')
                unautorisedMoves.push('top', 'bottom')
                break;
            case 'right':
                autorisedMoves.push('top', 'bottom')
                unautorisedMoves.push('right', 'left')
                break;
            case 'left':
                autorisedMoves.push('top', 'bottom')
                unautorisedMoves.push('right', 'left')
                break;
        }

        if (this.nextsMoves[this.nextsMoves.length - 1] != unautorisedMoves[0] && this.nextsMoves[this.nextsMoves.length - 1] != unautorisedMoves[1]) {
            if ((this.direction === autorisedMoves[0] && this.nextsMoves.length > 0) || (this.direction === autorisedMoves[1] && this.nextsMoves.length > 0) || (this.direction === unautorisedMoves[0]) || (this.direction === unautorisedMoves[1])) {
                this.nextsMoves.push(nextDirection)
            }
        }
    }

    updateSnakePosition(applePosition) {
        let newHead;
        switch (this.direction) {
            case 'right':
                newHead = {
                    x: this.position[0].x + 1,
                    y: this.position[0].y
                };
                break;

            case 'bottom':
                newHead = {
                    x: this.position[0].x,
                    y: this.position[0].y + 1
                };
                break;

            case 'left':
                newHead = {
                    x: this.position[0].x - 1,
                    y: this.position[0].y
                };
                break;

            case 'top':
                newHead = {
                    x: this.position[0].x,
                    y: this.position[0].y - 1
                };
                break;
        }

        this.position.unshift(newHead);

        if (!this.checkSnakeEatApple(applePosition)) this.position.pop();
    }

    snakeColisionWithBody() {
        const [head, ...body] = this.position;
        body.shift();

        // check if head has same coordonates of one body item
        for (let bodyElem of body) {
            if (bodyElem.x === head.x && bodyElem.y === head.y) {
                return true;
            }
        }

        return false;
    }

    snakeColisionWithWall() {
        for (const index in this.position) {
            const snakeItem = this.position[index];
            if (snakeItem.y >= this.canvasHeight / this.gridSize ||
                snakeItem.y < 0 ||
                snakeItem.x >= this.canvasWidth / this.gridSize ||
                snakeItem.x < 0) {
                return true;
            }
        }

        return false;
    }
}