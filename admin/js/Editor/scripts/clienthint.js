var xmlHttp
function showHint(id, idShow)
{
	//var idShow = "txtHint";
	/*if (id.length == 0)
	{
		document.getElementById("txtHint").innerHTML="";
		return;
	}*/
	xmlHttp = GetXmlHttpObject();
	if (xmlHttp == null)
	{
		alert("Your browser does not support AJAX!");
		return;
	}
	var url = "objects.php";
	url = url + "?id=" + id;
	xmlHttp.onreadystatechange = function() 
	{
		if (xmlHttp.readyState == 4)
			document.getElementById(idShow).innerHTML=xmlHttp.responseText;
	}
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function GetXmlHttpObject()
{
	var xmlHttp = null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
	// Internet Explorer
		try
		{  // IE6 +
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{	// IE5 +
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}
