import { getInputDirection, resetDirection } from "./input.js";
import { avaiablePositions, equalPositions } from "./grid.js";
import { GAME_BOARD_WIDTH } from "./game.js";

export const SNAKE_SPEED = 20;

let snakeBody;

export function update() {
    const inputDirection = getInputDirection();
    avaiablePositions.add(GAME_BOARD_WIDTH * (snakeBody[snakeBody.length-1].x-1) + snakeBody[snakeBody.length-1].y-1);

    for(let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = { ...snakeBody[i-1] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

    let tailPosition = GAME_BOARD_WIDTH * (snakeBody[0].x-1) + snakeBody[0].y-1;
    if(avaiablePositions.has(tailPosition)) avaiablePositions.delete(tailPosition);
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function getSnakeHeadPosition() {
    return snakeBody[0];
}

export function getSnakeLength() {
    return snakeBody.length;
}

export function newSnake() {
    snakeBody = [ { x: 11, y: 10 } ];
    let snakePosition = GAME_BOARD_WIDTH * (snakeBody[0].x-1) + snakeBody[0].y-1;
    if(avaiablePositions.has(snakePosition)) avaiablePositions.delete(snakePosition);

    resetDirection();
}

export function collisionWithBody() {
    for(let i=1; i < snakeBody.length; i++) {
        if(equalPositions(snakeBody[0], snakeBody[i]) && snakeBody.length > 2) return true;
    }
    return false;
}

export function addSegment() {
    snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length-1] };
}


