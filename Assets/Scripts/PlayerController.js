#pragma strict

var 		playerLaser 		:Rigidbody;
var			ShieldMesh			:Transform;
var			ShieldKeyInput		:KeyCode;


var			time				:int			= 20;
var			rand				:int			= 0;



function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")								
	{
		GameController.health -= 1;											
	}
	
}



function Update ()
{

	if (Input.GetKeyDown(KeyCode.Space))									
	{	
		Instantiate(playerLaser,transform.position,transform.rotation);	
		GameController.shotsFired++;									
	}
	
	
	

	var border:float=1.0;
		
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	if (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	

	var transH : float = Input.GetAxis("Horizontal") * 10 * Time.deltaTime;

	transform.Translate(transH,0,0);

}
