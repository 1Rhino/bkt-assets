var xmlhttp = false;
function InitXmlHttpRequest()
{
	if (window.ActiveXObject)
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	else
		xmlhttp = new XMLHttpRequest();	
}

