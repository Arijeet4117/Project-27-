class Chain{
    constructor(a,b,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
      var options={
          bodyA:a,
          bodyB:b,
          stiffness:0.5,
          length:200,
          pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.body=Constraint.create(options);
      World.add(world,this.body);
    }
    disp(){
    
      var posa = this.body.bodyA.position;
      var posb =this.body.bodyB.position ;
      push();
      strokeWeight(5);
      line(posa.x,posa.y,posb.x+this.offsetX,posb.y+this.offsetY);
      pop();
    }
}