#pragma strict

var leftborder:float = -17.0;
var rightborder:float = 17;
var touchedrightwall:boolean = false;
var touchedleftwall:boolean = false;

var alien:Rigidbody;

function moveDown()
{
	//move down
	transform.position.y--;
}


createAliens(rows:int,cols:int)
{
	//for all the rows of aliens
	for(var row=0;row<rows;row++)
	{
		//creates the aliens as required
		for(var counter=0;counter<cols;counter++)
		{
			var tempAlien:Rigidbody;
			//create instances of the alien in these positions
			tempAlien = Instantiate(alien,Vector3(counter*2,transform.position.y-row,1),Quaternion.identity);
			//the parent of the alien is the swarm
			tempAlien.transform.parent = this.transform;
		}
	}
}



function Start () {
	//this loop will run 5 times
	//create one row with five aliens
	if(GameController.levelsPlayed < 5)
	{
		createAliens(GameController.rows,GameController.cols);
			
		for(var counter=0;counter<4;counter++)
		{
			//wait for five seconds
			yield WaitForSeconds(5);
			//move the aliens down
			moveDown();
		}
	}
}

function Update () {
	
	if (transform.position.x > rightborder)
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{
		//move to the right
		touchedleftwall = false;
		transform.Translate(Vector3.right * 5 * Time.deltaTime);
	}
	//
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 5 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 5 * Time.deltaTime);
	}
		

	
	
}