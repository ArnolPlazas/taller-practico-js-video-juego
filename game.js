const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

const playerPosition = {
    x: undefined,
    y: undefined,
}

const giftPosition = {
    x: undefined,
    y: undefined,
}

let elementsSize
let canvasSize;


window.addEventListener('load', setCanvasSize)
window.addEventListener('resize', setCanvasSize)

function startGame() {
    game.font = elementsSize + 'px Verdana';
    game.textAlign ='end';
    game.fillText(emojis['X'], elementsSize, elementsSize);

    const map = maps[2]
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));


    game.clearRect(0, 0, canvasSize, canvasSize);

    mapRowCols.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) =>{
            const emoji = emojis[col]
            const posX = Math.floor(elementsSize * (colIndex + 1));
            const posY = Math.floor(elementsSize * (rowIndex + 1));
            game.fillText(emoji, posX, posY)

            if(col == 'O'){
               if(!playerPosition.x & !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
               }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            }
        })
    });

    moveplayer();
}


function setCanvasSize(){
    if (window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.75;
    } else{
        canvasSize = window.innerHeight * 0.75;
    }
    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    elementsSize = canvasSize/10;

    startGame();
}

window.addEventListener('keydown', moveByKeys)
btnUp.addEventListener('click', moveUp)
btnDown.addEventListener('click', moveDown)
btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)

function moveByKeys(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        default:
            break;
    }
}

function moveplayer() {
    if(playerPosition.x == giftPosition.x && playerPosition.y == giftPosition.y){
        console.log('You achieved to get to goal.');
    }
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}


function moveUp() {
    if((playerPosition.y - elementsSize) < elementsSize){

    } else{
        playerPosition.y -= elementsSize;
        startGame();
    }
}

function moveDown() {
    if((playerPosition.y + elementsSize) > canvasSize){
    
    }
    else{
        playerPosition.y += elementsSize;
        startGame();
    }
}

function moveLeft() {
    if((playerPosition.x - elementsSize) < elementsSize){
    
    }
    else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}

function moveRight() {
    if((playerPosition.x + elementsSize) > canvasSize){
    
    }
    else{
        playerPosition.x += elementsSize;
        startGame();
    }
}