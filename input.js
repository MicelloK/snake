let inputDirection = { x: 0, y: 0 };
let lastDirection = { x: 0, y: 0 };

window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowUp':
        case 'w':
            if(lastDirection.y != 0) return;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
        case 's':
            if(lastDirection.y != 0) return;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
        case 'a':
            if(lastDirection.x != 0) return;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
        case 'd':
            if(lastDirection.x != 0) return;
            inputDirection = { x: 1, y: 0 };
            break;
    }
})

export function getInputDirection() {
    lastDirection = inputDirection;
    return inputDirection;
}

export function resetDirection() {
    inputDirection = { x: 0, y: 0 }
}