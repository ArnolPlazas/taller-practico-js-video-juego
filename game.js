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

    mapRowCols.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) =>{
            const emoji = emojis[col]
            const posX = elementsSize * (colIndex + 1);
            const posY = elementsSize * (rowIndex + 1);
            game.fillText(emoji, posX, posY)
        })
    });
    
    // for (let row = 1; row <= 10; row++) {
    //     for (let col = 1; col <= 10; col++) {
    //         game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize*col, elementsSize*row);
    //     }
    // }
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