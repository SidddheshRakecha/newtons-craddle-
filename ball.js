class Ball{
    constructor(x,y,height,width){
       var options = {
            
            'restitution': 0,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.paper = loadImage("paper.png");
        World.add(world,this.body);

    }
    display(){
        imageMode(CENTER);
        image(this.paper,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}