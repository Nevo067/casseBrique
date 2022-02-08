export default class GameManager{
    point = 0;
    timer = 0;
    numberGameOver = 0;
    numberVictory = 0;

    constructor()
    {

    }
    addPoint(point)
    {
        if((this.point + point) >= 0)
        {
            this.point += point;
        }
        
    }
    addtimer(timer)
    {
        if((this.timer + timer) >= 0)
        {
            this.timer += timer;
        }
    }
    addNumberGameOver(numberGameOver)
    {
        if((this.numberGameOver + numberGameOver) >= 0)
        {
            this.numberGameOver += numberGameOver;
        }
    }
    addNumberVictory(numberVictory)
    {
        if((this.numbernumberVictory +numberVictory) >= 0)
        {
            this.numbernumberVictory +=numberVictory
        }
    }
}