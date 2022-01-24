let cv = this.document.getElementById("sheet");

let context;


if(cv.getContext)
{
     context = cv.getContext("2d");
     //drawRebond(context,500,450);
     //drawBall(context,500,400)
     window.requestAnimationFrame(drawImage("../image/11.jpg",context);)
     //drawImage("../image/11.jpg",context);
     
     
}
else
{

}
/**Draw a rectangle */
function drawRect(ctx)
{
    ctx.fillStyle ='rgb(200,0,0)';
    ctx.fillRect(30,20,20,20);
}
function drawStrock(ctx)
{
    ctx.strokeRect(30,20,20,20)
}
function drawTriangle(ctx)
{
    ctx.beginPath()
    ctx.moveTo(20,20)
    ctx.lineTo(40,40)
    ctx.lineTo(20,60)
    ctx.fill()
}

/**
 * Draw a circle
 * @param {context that draw} ctx 
 */
function drawArc(ctx)
{
    ctx.arc(20,20,20,0,degreToRadian(360))
    ctx.fill()
}
/**
 * convert degre to radius
 * @param {degre of the angle} degre 
 * @returns float
 */
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
function drawImage(linkImage,ctx)
{
    let img = new Image();
    img.addEventListener('load',()=>{
        ctx.drawImage(img,0,0);
        drawBall(context,535,425)
        drawRebond(context,500,450)
        drawBrick(ctx,1000,200,40,50);
        
    })
    img.src = linkImage;


}
function drawBrick(ctx,maxX,maxY,offsetX,offsetY)
{   nbX = (maxX/offsetX)-1
    nbY = (maxY/offsetY)-1

    ctx.save()
    ctx.fillRect(0,0,20,10)
    

    for(y = 0;y < nbY;y++)
    {
        for(x = 0;x < nbX;x++)
        {   
            ctx.save()
            ctx.translate(x*offsetX,y*offsetY);
            ctx.fillRect(0,0,20,20)
            ctx.restore()
        }
    }
}
/**
 * Draw a rectangle that will touche the ball
 * @param {context of the application} ctx 
 * @param {*position on axis x} positionX 
 * @param {*position on axis y} positionY 
 */
function drawRebond(ctx,positionX,positionY)
{
    let sizeX = 75;
    let sizeY = 12;
    
    ctx.fillRect(positionX,positionY,sizeX,sizeY);
    
}
function drawBall(ctx,positionX,positionY)
{
    ctx.beginPath();
    ctx.arc(positionX,positionY,25,0,degreToRadian(360))
    ctx.fill()
    
}
