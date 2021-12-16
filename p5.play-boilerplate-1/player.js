class player{
    constructor(x,y,width,height){
        this.spt=createSprite(x,y,width,height);
        this.spt.addImage(player1Image);
        this.spt.scale= 0.07;
    }
}