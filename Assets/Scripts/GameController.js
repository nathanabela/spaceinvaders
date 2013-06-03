#pragma strict
static var levelsPlayed:int=1;
var shotsMissed:int;
static var score:int;
static var health:int=100;
static var shotsFired:int=0;
static var rows:int=3;
static var cols:int=5;

function Awake()
{
	if(GameObject.FindGameObjectsWithTag("GameController").Length > 1)
	{
		Destroy(this);
	}
}

function Start () 
{
	DontDestroyOnLoad(this);
	
	
}
    
function Update () 
{
		shotsMissed = shotsFired - score;
		
		var numberOfAliens:int;													
		
		numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;		

		if ((numberOfAliens == 0) && (levelsPlayed < 4))													
		{
			levelsPlayed++;
			rows++;
			Application.LoadLevel("InGame");
			
		}
		
		
		if ((health <= 0) || (levelsPlayed >= 4))
		{
			Destroy(GameObject.FindGameObjectWithTag("player"));						
			Destroy(GameObject.FindGameObjectWithTag("enemy"));
			Application.LoadLevel("GameOver");
			health = 3;
		}
}


function OnGUI()
{
	GUI.color = Color.green;
	GUI.Label(Rect(10,0,200,50),"Health: "+health);
	GUI.Label(Rect(90,0,200,50),"Score: "+score);
	GUI.Label(Rect(160,0,200,50),"Shots: "+shotsFired);
	GUI.Label(Rect(230,0,200,50),"Shots Missed: "+shotsMissed);
	GUI.Label(Rect(340,0,200,50),"Level: "+levelsPlayed);
}