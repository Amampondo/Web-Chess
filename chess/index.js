import Block from "./Block.js";

const canvas = document.getElementById("board");
let previousBlock ;
canvas.addEventListener('click',function(e){
    xClicked = e.offsetX;
    yClicked = e.offsetY;
    draw(xClicked,yClicked);
    unDraw();
    storePrev(xClicked,yClicked);
})
const board = canvas.getContext("2d");
let whiteCell = true;
let isEven = false;
for(let col = 0; col < 8; col ++){
    if(!isEven) whiteCell = true;
    else whiteCell = false;
    for(let row = 0; row < 8; row ++){
        if(whiteCell) {
            board.fillStyle = "white";
        }
        else{
            board.fillStyle = "black";
        }
        board.fillRect(col*100,row*100,100,100);
        whiteCell = ! whiteCell;
    }
    isEven = !isEven;
}

function toIndex(x){
    return x - x%100;
}
function draw(_x,_y){
    let x = toIndex(_x);
    let y = toIndex(_y);
    console.log(x);
    console.log(y);
    board.fillStyle = "rgb(182, 208, 226)";
    board.fillRect(x,y,100,100);
}
function unDraw(){
    if(previousBlock != null){
        let x = toIndex(previousBlock.x);
        let y = toIndex(previousBlock.y);
        console.log(x);
        console.log(y);
        board.fillStyle = "white";
        board.fillRect(x,y,100,100);
    }
}
function previousBlock(x,y){
    const imageData = board.getImageData(x,y,1,1);
    const pixelData = imageData.data;

    const red = pixelData[0];
    const green = pixelData[1];
    const blue = pixelData[2];

    const c = rgb(red,green,blue);
    previousBlock = new Block(x,y,c)
}