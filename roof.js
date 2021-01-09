class Roof{
    constructor(){
        var options={
                isStatic:true
    
        }
        this.body=Bodies.rectangle(400,200,400,20,options);
        this.width=400;
        this.height=20;
        World.add(world,this.body)
    }
    hello(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    }
    
    }
    