import Brick from "./brickGameObject.js";

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

    
    constructor(x,y,rayon)
    {
        this.x = x;
        this.y = y;
        this.rayon = rayon
        this.vx = 1;
        this.vy = 2;
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
    eraseBall(ctx)
    {
        ctx.clearRect(this.x - this.rayon - 3, this.y - this.rayon - 3, this.rayon * 2 + 5, this.rayon * 2 + 5);
    }
    hitBox(RectX,RectY,sizeX,sizeY)
    {
        let perimetreYP = (this.y + this.rayon)
        let perimetreYM = (this.y - this.rayon)
        if(this.IsHitOnY(RectY,sizeY))
        {
            if(this.IsInRectx(RectX,sizeX))
            {
                
                this.vy = (-this.vy);
                return true
            }
        }
        return false;
    }
    
    brickHitbox(tabYCord,tabBrick,sizeY)
    {
        let t = 0;
        let tab = null;
        
        tabYCord.forEach(RectY => {
            
            if(this.IsHitOnY(RectY,sizeY))
            {
                let t2 = 0;
                
                let lineBrick = tabBrick[t];
                console.log(lineBrick.length);

                lineBrick.forEach(bloc=>{
                    
                    if(this.hitBox(bloc.x,bloc.y,bloc.sizeX,bloc.sizeY))
                    {
                        tab = [t,t2]
                        return tab;
                    }
                    t2++;

                });
            }
            t++;
        });
        return tab;
    }
    IsInRectx(rectX,sizeX)
    {
        let isTouch = false;
        let perimetreXP = (this.x + this.rayon)
        let perimetreXM = (this.x - this.rayon)

        if((perimetreXP > rectX) && ((perimetreXP) <= (rectX+sizeX)))
        {
            isTouch = true;
        }
        if((perimetreXM > rectX) && ((perimetreXM) <= (rectX+sizeX)))
        {
            isTouch = true;
        }
        return isTouch
    }
    IsHitOnY(RectY,sizeY)
    {
        let isTouch = false;
        let perimetreYP = (this.y + this.rayon)
        let perimetreYM = (this.y - this.rayon)
        if((perimetreYP > RectY) && ((perimetreYP) <= (RectY+sizeY)))
        {
            isTouch = true;
        }
        if((perimetreYM > RectY) && ((perimetreYM) <= (RectY+sizeY)))
        {
            isTouch = true;
        }
        return isTouch;

    }

}
/**
 * Class that manage the player
 */
