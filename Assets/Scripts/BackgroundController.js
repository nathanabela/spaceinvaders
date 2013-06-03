#pragma strict
var background:Material[];


function Start () {
	
	if(GameController.levelsPlayed==1)
	{
		renderer.sharedMaterial = background[0];
	}
	
	if(GameController.levelsPlayed==2)
	{
		renderer.sharedMaterial = background[1];
	}
	
	if(GameController.levelsPlayed==3)
	{
		renderer.sharedMaterial = background[2];
	}
}

function Update () {


}