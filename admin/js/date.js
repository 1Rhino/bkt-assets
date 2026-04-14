// JavaScript Document
function setListDate(day, month, year, begin_year)
{
	for(var i = 0; i < 12; i++)
	{
		month.options[i] = new Option(i + 1, i + 1);
		if(mCurrent == (i + 1))
			document.frm.elements["sltMonth"].options[i].selected = "selected";
	}
	by = yCurrent - begin_year;
	var j = 0;
	for(var i = yCurrent; i >= by; i--)		
	{
		year.options[j] = new Option(i, i);
		j++;
	}
	for(var i = 1; i <= 31; i++)
	{
		day.options[i-1] = new Option(i, i);		
		if(dCurrent == i)
			document.frm.elements["sltDate"].options[i-1].selected = "selected";
	}
}