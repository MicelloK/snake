import { getSnakeHeadPosition, addSegment as expandSnake } from "./snake.js";
import { getNewPosition, equalPositions } from "./grid.js";

let foodPosition = { x: 0, y: 0 };

export function updateFood() {
    if(equalPositions(foodPosition, getSnakeHeadPosition())) {
        expandSnake();
        newFoodPosition();
    }
}

export function drawFood(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = foodPosition.x;
    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

export function newFoodPosition() {
    foodPosition = getNewPosition();
}

