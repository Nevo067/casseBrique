import Ball from "./classJs/GameObject.js";
import Player from "./classJs/Player.Js";
import Brick from "./classJs/brickGameObject.js"
import GameManager from "./classJs/GameManager.js"




//Get Element in the document
let canvas = document.getElementById("sheet");
let context = canvas.getContext("2d");

let ball = new Ball(0,0,10);
let player = new Player(10,600,80,10,25);
let gameManager = new GameManager();



let brickGrid = [];
let xBrickVal = [];
let req;

function draw()
{
    let brickDestroyed;
    //erase canvas
    
    //eraseGrillBrick(context);
    //brick
    drawGrillBrick(context);
    //player
    player.erasePlayer(context,canvas.width);
    player.drawPlayer(context);
    //ball
    ball.eraseBall(context)
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

    

    brickDestroyed = ball.brickHitbox(xBrickVal,brickGrid,20);
    console.log
    if(brickDestroyed != null)
    {
        console.log("detruit");
        let y = brickDestroyed[1];
        let x = brickDestroyed[0];
        console.log(x)
        brickGrid[x][y].eraseBrick(context);
        brickGrid[x].splice(y,1);
        gameManager.addPoint(1);
        updateScore("score");
    }
    
    window.requestAnimationFrame(draw)

}
//Grid Method
function initLineBrick(sizeX,sizeY,step,maxwidth,y)
{
    let lineBrick = new Array();
    
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
function eraseGrillBrick(ctx)
{
    brickGrid.forEach(lineBrick=>{
        lineBrick.forEach(brickVal =>{
            brickVal.eraseBrick(ctx);
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


//update text Node
function updateTextNode(id,text)
{
    document.getElementById(id).innerText = text;
}
function updateScore()
{
    let text = ("score"+gameManager.point);
    updateTextNode("score",text)
   /*
   let nodeText = document.createTextNode(("score:"+gameManager.point));
   score.replaceChild(score.textContent,nodeText);
   */
}
function updateVictory()
{
    let text = ("victory;"+gameManager.point);
    updateTextNode("victory",text);
}
function updateGameOver()
{
    let text = ("gameOver:"+gameManager.numberGameOver);
    updateTextNode("gameOver",text);
}

initGrid(20,20,10,50,canvas.width,5);
console.log(brickGrid);
inputPlayer();
draw()