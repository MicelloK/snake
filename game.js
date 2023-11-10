import { update as updateSnake, draw as drawSnake, getSnakeHeadPosition, getSnakeLength, newSnake, SNAKE_SPEED, collisionWithBody } from "./snake.js";
import { updateFood, drawFood, newFoodPosition } from "./food.js";
import { resetAvaiablePositions } from "./grid.js";

const gameBoard = document.getElementById('game-board');

// import gameBoard size from css
const gridStyles = window.getComputedStyle(gameBoard);
export const GAME_BOARD_WITDH = gridStyles.getPropertyValue('grid-template-columns').split(' ').length;
export const GAME_BOARD_WIDTH = gridStyles.getPropertyValue('grid-template-rows').split(' ').length;

let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    clearBoard();

    updateFood();
    updateSnake();

    drawFood(gameBoard);
    drawSnake(gameBoard);

    gameOver();
}

function clearBoard() {
    gameBoard.innerHTML = '';
}

function collision() {
    let headPosition = getSnakeHeadPosition();
    if(headPosition.x > GAME_BOARD_WITDH || headPosition.x < 1) return true;
    if(headPosition.y > GAME_BOARD_WIDTH || headPosition.y < 1) return true;
    return collisionWithBody();
}

function gameOver() {
    if(collision()) {
        window.alert(`YOU LOSE! Score: ${getSnakeLength()}`);
        newGame();
    }
}

function newGame() {
    clearBoard();
    resetAvaiablePositions();

    newSnake();
    drawSnake(gameBoard);

    newFoodPosition();
    drawFood(gameBoard);

    window.requestAnimationFrame(main);
}

newGame();
