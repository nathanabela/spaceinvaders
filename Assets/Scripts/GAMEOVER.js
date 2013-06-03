
#pragma strict


function OnGUI()
	{
	GUI.BeginGroup (Rect(Screen.width/2-50,Screen.height/2-50,100,150));
	GUI.Box(Rect(0,0,100,150),"Game Over");
	
	
		if(GUI.Button(Rect(10,30,80,30), "Main Menu"))
		{
			Application.LoadLevel("MainMenu");
		}
		
		
		if(GUI.Button(Rect(10,70,80,30), "Play Again"))
		{
			Application.LoadLevel("InGame");
		}
		
	GUI.EndGroup();
	}
