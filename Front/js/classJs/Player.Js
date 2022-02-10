export default class Player{
    x = 0;
    y = 0;
    sizeX = 0;
    sizeY = 0;
    
    speed = 0;

    constructor(x,y,sizeX,sizeY,speed)
    {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.speed = speed;
    }
    /**
     * draw player
     * @param {context of the canvas} ctx 
     */
    drawPlayer(ctx)
    {
        
        ctx.rect(this.x,this.y,this.sizeX,this.sizeY);
        ctx.fill(); 
    }
    erasePlayer(ctx,maxwidth)
    {
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fillRect(0,this.y,maxwidth,this.sizeY);
        ctx.fillStyle = 'rgba(0,0,0,1)';
    }
    /**
     * move player
     * @param {move's vector on x axis} x 
     */
    movePlayer(x,y)
    {
        this.x += x * this.speed; 
    }
    /**
     * 
     * @param {move's vector on x axis} x 
     * @param {cordonnate that can't exceed} limitX 
     */
    movePlayerWithLimit(x,limitX)
    {
        //Todo improve
        if(!((this.x + x*this.speed) > limitX || (this.x + x*this.speed) < 0))
        {
            this.movePlayer(x,limitX)
        }
    }

    
}
