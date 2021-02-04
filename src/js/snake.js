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

            // determine head image
            if (prevItem == undefined) {
                switch (this.direction) {
                    case 'right':
                        this.ctx.drawImage(imageHeadSnakeRight, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                        break;
                    case 'bottom':
                        this.ctx.drawImage(imageHeadSnakeBottom, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                        break;
                    case 'left':
                        this.ctx.drawImage(imageHeadSnakeLeft, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                        break;
                    case 'top':
                        this.ctx.drawImage(imageHeadSnakeTop, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                        break;
                }
            }

            // determine last item body image
            else if (nextItem == undefined) {
                if (prevItem.x > currentSnakeItem.x) {
                    this.ctx.drawImage(imageSnakeLastBodyRight, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else if (prevItem.x < currentSnakeItem.x) {
                    this.ctx.drawImage(imageSnakeLastBodyLeft, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else if (prevItem.y < currentSnakeItem.y) {
                    this.ctx.drawImage(imageSnakeLastBodyTop, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else if (prevItem.y > currentSnakeItem.y) {
                    this.ctx.drawImage(imageSnakeLastBodyBottom, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                }
            }

            // determine body image
            else {
                if (currentSnakeItem.x > prevItem.x && currentSnakeItem.y > nextItem.y || currentSnakeItem.x > nextItem.x && currentSnakeItem.y > prevItem.y) {
                    this.ctx.drawImage(imageSnakeTurn3, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else if (currentSnakeItem.x < prevItem.x && currentSnakeItem.y < nextItem.y || currentSnakeItem.x < nextItem.x && currentSnakeItem.y < prevItem.y) {
                    this.ctx.drawImage(imageSnakeTurn1, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else if (currentSnakeItem.x > nextItem.x && currentSnakeItem.y < prevItem.y || currentSnakeItem.x > prevItem.x && currentSnakeItem.y < nextItem.y) {
                    this.ctx.drawImage(imageSnakeTurn2, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else if (currentSnakeItem.x < nextItem.x && currentSnakeItem.y > prevItem.y || currentSnakeItem.x < prevItem.x && currentSnakeItem.y > nextItem.y) {
                    this.ctx.drawImage(imageSnakeTurn4, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else if (currentSnakeItem.x != prevItem.x) {
                    this.ctx.drawImage(imageBodySnake, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else if (currentSnakeItem.y != prevItem.y) {
                    this.ctx.drawImage(imageBodySnakeVertical, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                } else {
                    this.ctx.drawImage(image, currentSnakeItem.x * this.gridSize, currentSnakeItem.y * this.gridSize, this.gridSize, this.gridSize);
                }
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
        // // @todo refactoriser
        if (e.key == 'ArrowUp') {
            if (this.nextsMoves[this.nextsMoves.length - 1] != 'bottom' && this.nextsMoves[this.nextsMoves.length - 1] != 'top') {
                if ((this.direction === 'bottom' && this.nextsMoves.length > 0) || (this.direction === 'top' && this.nextsMoves.length > 0) || (this.direction === 'right') || (this.direction === 'left')) {
                    this.nextsMoves.push('top')
                } else {
                    console.log('cant move top 2');
                }
            } else {
                console.log('cant move top 1');
            }
        }
        if (e.key == 'ArrowDown') {
            if (this.nextsMoves[this.nextsMoves.length - 1] != 'bottom' && this.nextsMoves[this.nextsMoves.length - 1] != 'top') {
                if ((this.direction === 'bottom' && this.nextsMoves.length > 0) || (this.direction === 'top' && this.nextsMoves.length > 0) || (this.direction === 'right') || (this.direction === 'left')) {
                    this.nextsMoves.push('bottom')
                } else {
                    console.log('cant move bottom 2');
                }
            } else {
                console.log('cant move bottom 1');
            }
        }

        if (e.key == 'ArrowRight') {
            if (this.nextsMoves[this.nextsMoves.length - 1] != 'left' && this.nextsMoves[this.nextsMoves.length - 1] != 'right') {
                if ((this.direction === 'left' && this.nextsMoves.length > 0) || (this.direction === 'right' && this.nextsMoves.length > 0) || (this.direction === 'bottom') || (this.direction === 'top')) {
                    this.nextsMoves.push('right')
                } else {
                    console.log('cant move right 2');
                }
            } else {
                console.log('cant move right 1');
            }
        }

        if (e.key == 'ArrowLeft') {
            if (this.nextsMoves[this.nextsMoves.length - 1] != 'left' && this.nextsMoves[this.nextsMoves.length - 1] != 'right') {
                if ((this.direction === 'left' && this.nextsMoves.length > 0) || (this.direction === 'right' && this.nextsMoves.length > 0) || (this.direction === 'bottom') || (this.direction === 'top')) {
                    this.nextsMoves.push('left')
                } else {
                    console.log('cant move left 2');
                }
            } else {
                console.log('cant move left 1');
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
                snakeItem.x >= this.canvasWidth/ this.gridSize ||
                snakeItem.x < 0) {
                return true;
            }
        }

        return false;
    }
}