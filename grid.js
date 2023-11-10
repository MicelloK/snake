import { GAME_BOARD_WITDH, GAME_BOARD_WIDTH } from "./game.js";

export const avaiablePositions = new Set();

export function resetAvaiablePositions() {
    for(let x=0; x < GAME_BOARD_WITDH; x++) {
        for(let y=0; y < GAME_BOARD_WIDTH; y++) {
            avaiablePositions.add(GAME_BOARD_WIDTH * x + y)
        }
    }
}

export function equalPositions(pos1, pos2) {
    if(pos1.x == pos2.x && pos1.y == pos2.y) return true;
    return false;
}

export function getNewPosition() {
    let newPosition = { x: 0, y: 0 };
    let avaiablePositionsArray = Array.from(avaiablePositions);
    const randomElement = avaiablePositionsArray[Math.floor(Math.random() * avaiablePositions.size)]
    newPosition.y = randomElement % GAME_BOARD_WITDH + 1;
    newPosition.x = Math.floor(randomElement / GAME_BOARD_WIDTH) + 1;
    return newPosition;
}