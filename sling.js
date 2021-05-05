class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA ,
            pointB : pointB,
            stiffness: 0.04,
            length: 1
        }
        
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position ;
        var posB = this.pointB;
        push()
        strokeWeight(6);
        stroke(40,50,8);
        line(posA.x , posA.y , posB.x, posB.y);
        pop();
        }
    }

}