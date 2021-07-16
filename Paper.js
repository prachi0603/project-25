class Paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			"restitution":0.3,	
			"friction":0,
			"density":1.2,		
			}
		

		this.body=Bodies.circle(x, y, radius, options);
        this.radius = radius
			this.image=loadImage("paper.png")
 		World.add(world, this.body);

	}
	display(){
		var pos=this.body.position
		push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,this.radius,this.radius)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}