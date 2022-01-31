export default class Brick
{
    x = 0;
    y = 0;
    sizeX = 0;
    sizeY = 0;

    constructor(x,y,sizeX,sizeY)
    {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    drawBrick(ctx)
    {
        ctx.rect(this.x,this.y,this.sizeX,this.sizeY);
        ctx.fill();
    }
}