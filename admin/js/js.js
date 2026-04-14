// JavaScript Document
function checkFromUser()
{	
	if(document.getElementById('UPASS').value == document.getElementById('UREPASS').value && document.getElementById('UPASS').value.length > 5 && document.getElementById('UNAME').value.length > 5)	
		return true;
	alert('Error: Rewrite username and password.');	
	document.getElementById('UNAME').value = document.getElementById('UREPASS').value = document.getElementById('UPASS').value = "";
	return false;
}
function checkFromChangepass()
{
	if(document.getElementById('UPASS').value == document.getElementById('UREPASS').value && document.getElementById('UPASS').value.length > 5)
		return true;
	alert('Error: Rewrite password.');	
	document.getElementById('OPASS').value = document.getElementById('UREPASS').value = document.getElementById('UPASS').value = "";
	return false;
}
function checkFromFlugin()
{
	if(CheckNumber(document.getElementById('LEVEL')) == 1 || document.getElementById('LEVEL').value != "")
		return true;
	alert("Error: Level must be number.");
	document.getElementById('LEVEL').value = "";
	return false;
}
function checkFormMenu()
{
	if(document.getElementById('NAME').value == "" || document.getElementById('LINK').value == "")
	{
		alert("Error: Info not complete.");
		return false;
	}
	if(CheckNumber(document.getElementById('LEVEL')) == 0 || document.getElementById('LEVEL').value == "")
	{
		alert("Error: Level must be number.");
		document.getElementById('LEVEL').value = "";
		return false;
	}	
	return true;
}
function checkFromLang()
{
	if(document.getElementById('NAME').value != "" && document.getElementById('URL').value != "")	
		return true;
	alert('Error: Data no emty.');	
	document.getElementById('NAME').value = document.getElementById('URL').value = "";
	return false;
}
function checkFromDiaOc()
{
	if(document.getElementById('NAME').value == "")
	{
		alert("Tên địa ốc không được bỏ trống");
		return false;
	}
	else if(CheckNumber(document.getElementById('COST')) == 0)
	{
		alert("Giá cả phải là chữ số.");
		return false;
	}
	else if(CheckNumber(document.getElementById('ROOM')) == 0 || CheckNumber(document.getElementById('BED')) == 0 || CheckNumber(document.getElementById('BATH')) == 0)
	{
		alert("Phòng phải là chữ số.");
		return false;
	}
	else if(CheckNumber(document.getElementById('ROAD')) == 0)
	{
		alert("Lộ giới phải là chữ số.");
		return false;
	}
	else if(CheckNumber(document.getElementById('Scale')) == 0)
	{
		alert("Diện tích phải là chữ số.");
		return false;
	}
	return true;
}
function CheckNumber(obj)
{		
	for(var i = 0;i < str.length;i++)
		if(str[i] != '0' && str[i] != '1' && str[i] != '2' && str[i] != '3' && str[i] != '4' && str[i] != '5' && str[i] != '6' && str[i] != '7' && str[i] != '8' && str[i] != '9')
			return 0;
	return 1;
}