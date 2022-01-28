import Ball from "./classJs/GameObject.js";
import Player from "./classJs/Player.js";



//Get Element in the document
let canvas = document.getElementById("sheet");
let context = canvas.getContext("2d");

let ball = new Ball(0,0);
let player = new Player(500,400,200,10,10);
let req;

function draw()
{
    
    context.clearRect(0,0,canvas.width,canvas.height)
    player.drawPlayer(context)

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


inputPlayer();
draw()