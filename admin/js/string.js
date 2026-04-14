// JavaScript Document
function isNumber(str)
{
	var test = /[0-9]/;
	return test.test(str);
}
function replacePoint(str)
{
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	str = str.replace('.', "");
	return str;
}
function partMonney(str)
{
	str = replacePoint(str);
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