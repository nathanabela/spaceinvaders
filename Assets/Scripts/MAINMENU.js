#pragma strict

function OnGUI()
{
	GUI.BeginGroup (Rect(Screen.width/2-50,Screen.height/2-50,100,150));
	GUI.Box(Rect(0,0,100,125),"Main menu");
	
	
		if(GUI.Button(Rect(10,30,80,30), "Start"))
		{
			Application.LoadLevel("InGame");
		}
		
		if(GUI.Button(Rect(10,80,80,30), "Exit"))
		{
			Application.Quit();
		}
		
	GUI.EndGroup();
}