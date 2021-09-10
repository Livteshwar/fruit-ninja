class Link{
    constructor(body1,body2){
        var llink=body1.body.bodies.length-2
        this.link=Constraint.create(
            {
                bodyA:body1.body.bodies[llink],
                bodyB:body2,
                length:-10,
                stiffness:0.01
            }
        )
        World.add(world,this.link)
    }
}