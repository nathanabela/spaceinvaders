#pragma strict

var shootingUp						:boolean;

function Update ()
{
	
	if(shootingUp)
	{
		transform.Translate(Vector3.up * 25 * Time.deltaTime);
	}

	else
	{
		transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}
}

function OnTriggerEnter(other:Collider)
{
	if(shootingUp == true)
	{
		if (other.gameObject.tag == "enemy")
		{
			GameController.score++;
			Destroy(other.gameObject);
			Destroy(this.gameObject);
		}
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

