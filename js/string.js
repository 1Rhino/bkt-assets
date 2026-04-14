// JavaScript Document
function ShowString(str, len)
{
	if(str.length > len)
		return str.substr(0, len) + "...";
	return str;
}
function getInternetExplorerVersion()
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

function partMonney(str)
{	
	if (window.ActiveXObject && getInternetExplorerVersion() == 6)
		return str;
	var j = 0;
	var temp = "";
	var result = "";
	for(var i = str.length - 1; i >= 0; i--)
	{		
		if(j==3)
		{
			temp = "." + temp;
			result = temp + result;
			j = 0;
			temp = "";
		}
		temp = str[i] + temp;
		j++;
		if(i == 0)
		{
			result = temp + result;
		}		
	}
	return result;
}