#pragma strict

var alienlaser							

function shootLaser()
{
	//shots laser
	Instantiate(alienlaser,transform.position,transform.rotation);
}



function Start ()
{
	var shootdelay:float=0

	shootdelay = Random.Range(1.0,5.0);
	InvokeRepeating("shootLaser",shootdelay,shootdelay);
}