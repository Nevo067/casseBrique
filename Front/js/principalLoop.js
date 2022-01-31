import Ball from "./classJs/GameObject.js";
import Player from "./classJs/Player.js";
import Brick from "./classJs/brickGameObject.js"
import brick from "./brick.js";



//Get Element in the document
let canvas = document.getElementById("sheet");
let context = canvas.getContext("2d");

let ball = new Ball(0,0);
let player = new Player(500,400,200,10,10);
let brickGrid = [];
let xBrickVal = [];
let req;

function draw()
{
    //erase canvas
    context.clearRect(0,0,canvas.width,canvas.height);
    //brick
    drawGrillBrick(context);
    // player
    player.drawPlayer(context);
    //ball
    ball.drawBall(context);



    if(ball.x > canvas.width || ball.x < 0 )
    {
        ball.vx = (-ball.vx)
    }
    if(ball.y > canvas.height || ball.y < 0 )
    {
        ball.vy = (-ball.vy)
    }
    ball.x += ball.vx;
    ball.y += ball.vy;
    
    ball.hitBox(player.x,player.y,player.sizeX,player.sizeY);
    
    window.requestAnimationFrame(draw)

}

function initLineBrick(sizeX,sizeY,step,maxwidth,y)
{
    let lineBrick = [];
    
    let nbBrick=(maxwidth/((step+sizeX))-1);
    
    for(let i = 0;i<nbBrick;i++)
    {
        let starPos=(((step+sizeX)*i)+step);
        let brick = new Brick(starPos,y,sizeX,sizeY);
        lineBrick.push(brick);
        
    }
    xBrickVal.push(y);
    brickGrid.push(lineBrick);
}

function initGrid(sizeX,sizeY,stepX,stepY,maxwidth,nbLine)
{
    for (let i = 0;i < nbLine;i++)
    {
        initLineBrick(sizeX,sizeY,stepX,maxwidth,stepY*i)
    }
}

function drawGrillBrick(ctx)
{
    brickGrid.forEach(lineBrick=>{
        lineBrick.forEach(brickVal =>{
            brickVal.drawBrick(ctx);
        })
    })
}
//Update Animation
function update()
{
    draw();
}
//add eventListener
canvas.addEventListener("mouseover",()=>{
    console.log("mouseover");
    req = window.requestAnimationFrame(draw);
  
})
canvas.addEventListener("mouseout",()=>{
    console.log("mouseout");
    window.cancelAnimationFrame(req);
})
//input player
function inputPlayer()
{
    window.addEventListener("keydown",(event)=>{
        console.log(event.code)
        switch (event.code) {
            case "ArrowLeft":
                player.movePlayerWithLimit(-1,canvas.width)
                break;
            case "ArrowRight":
                player.movePlayerWithLimit(1,canvas.width);
                break;
            default:
                break;
        }
    });
}

initGrid(50,20,10,50,canvas.width,3);
console.log(brickGrid);
inputPlayer();
draw()