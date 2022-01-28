
class Ball
{
    x = 0;
    y = 0;
    vx = 0;
    vy = 0;
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.vx = 2;
        this.vy = 5;
    }
    drawBall(ctx)
    {
        ctx.beginPath();
        ctx.arc(this.x,this.y,20,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
        
    }
}

function degreToRadian(degre)
{
    if(degre >= 0 && degre <= 360)
    {
        console.log((Math.PI/180)*degre)
        return (Math.PI/180)*degre
        
    }
    else
    {
        return 0
    }
}

let canvas = document.getElementById("sheet");
let context = canvas.getContext("2d");
let ball = new Ball(0,0)
let req;

function draw()
{
    
    context.clearRect(0,0,canvas.width,canvas.height)
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
    console.log(ball.y)
    
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



draw()