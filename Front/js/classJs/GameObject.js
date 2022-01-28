/**
 * Class that manage ball
 */
export default class Ball
{
    x = 0;
    y = 0;
    rayon = 20
    vx = 0;
    vy = 0;
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.vx = 2;
        this.vy = 5;
    }
    /**
     * Draw a ball on the canvas
     * @param {context of canvas} ctx 
     */
    drawBall(ctx)
    {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rayon,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
        
    }
    hitBox(RectX,RectY,sizeX,sizeY)
    {
        if(this.y > RectY && this.y <= RectY+sizeY )
        {
            if(this.x > RectX && this.x <= RectX+sizeX)
            {
                
                this.vy = (-this.vy);
            }
        }
    }

}
/**
 * Class that manage the player
 */
