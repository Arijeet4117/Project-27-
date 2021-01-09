class bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1
        }
     this.body=Bodies.circle(x,y,30,options);
     this.radius=30;
     World.add(world,this.body);
    }

    display(){
     ellipseMode(RADIUS) 
     ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);



        
    }
}