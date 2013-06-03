#pragma strict

var 		playerLaser 		:Rigidbody;
var			ShieldMesh			:Transform;
var			ShieldKeyInput		:KeyCode;


var			time				:int			= 20;
var			rand				:int			= 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")								//hit by an alienLaser
	{
		GameController.health -= 1;											//reduce health by 1
	}
	
}
//Hit by alienLaser and Reduce health by 1


function Update ()
{
	//KEYS + ACTIONS
	if (Input.GetKeyDown(KeyCode.Space))									//fire a playerLaser + shotsCount: Spacebar
	{	
		Instantiate(playerLaser,transform.position,transform.rotation);		//create playerLaser at player tranforms
		GameController.shotsFired++;										//counter for shots fired
	}
	
	
	
	//BORDER
	var border:float=1.0;
		
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	 (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	
	//transform.Translate(Vector3.right * playerSpeed * Time.deltaTime * Input.GetAxis("Horizontal"));
	var transH : float = Input.GetAxis("Horizontal") * 10 * Time.deltaTime;

	transform.Translate(transH,0,0);

}


