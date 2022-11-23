const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
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
    
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize*col, elementsSize*row);
        }
    }

    // game.fillRect(0, 0, 100, 100);
    // game.clearRect(0, 0, 50, 50);

    // game.font = '25px Verdana'
    // game.fillStyle = 'purple'
    // game.textAlign = 'center'
    // game.fillText('Arnol', 25, 25)
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