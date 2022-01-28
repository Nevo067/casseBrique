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
        if(!(this.x + x > limitX || this.x + x < 0))
        {
            this.movePlayer(x,limitX)
        }
    }

    
}
