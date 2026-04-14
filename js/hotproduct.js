// JavaScript Document
function hotProduct()
{
	var left = parseInt(document.getElementById("hotproduct").style.left);
	left = left - 60;
	if(left * (-1) >= (parseInt(document.getElementById("hotproduct").style.width)))
		left = 0;
	document.getElementById("hotproduct").style.left = left + "px";
	if(((-1) * left) % 180 == 0)	
		setTimeout("hotProduct()",3000);
	else
		setTimeout("hotProduct()",50);	
}
function delayMarqee()
{
	var left = parseInt(document.getElementById("hotproduct").style.left);
	left = left - 90;
	if((left * (-1)) % 190 == 0)
	{
		
		return l;
	}
	setTimeout("delayMarqee()",50);
}