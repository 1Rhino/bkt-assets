// JavaScript Document
function getNews()
{
		var url = "getnews.php";
		getActNews(url);
}
function getActNews(url)
{	
	InitXmlHttpRequest();       
	xmlhttp.open('GET', url, true);	
	xmlhttp.onreadystatechange = getNewsText;
	xmlhttp.send(null);
}
function getNewsText()
{	
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var check = xmlhttp.responseText;			
	}
}
function CheckNumber(str)
{		
	for(var i = 0;i < str.length;i++)
		if(str[i] != '0' && str[i] != '1' && str[i] != '2' && str[i] != '3' && str[i] != '4' && str[i] != '5' && str[i] != '6' && str[i] != '7' && str[i] != '8' && str[i] != '9')
			return 0;
	return 1;
}