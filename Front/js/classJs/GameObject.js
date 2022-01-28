export default class Ball
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
