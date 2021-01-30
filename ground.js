class ground
{
	constructor(x,y,w,h)
	{
		var options = {
			isStatic: true
		}
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.w = w;
		this.h = h;
		World.add(world, this.body);
		//refer angry bird game and type the constructor here 

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}