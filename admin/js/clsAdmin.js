// JavaScript Document
//set trang thai User
function SetStatus(user)
{	
	var id = "checkbox" + user;
	var obj = document.getElementById(id);
	var url = "Ajax.php?task=user&user=" + user + "&status=" + obj.checked;
	SetStatusUser(url);
}
function SetStatusUser(url)
{	
	InitXmlHttpRequest();       
	xmlhttp.open('GET', url, true);	
	xmlhttp.onreadystatechange = SetStatusUserText;
	xmlhttp.send(null);
}
function SetStatusUserText()
{	
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var check = xmlhttp.responseText;
		if(check == '0')
			alert("Error: Connect DB fail ...");		
	}
}
//set trang thai cac Flugin (Sections)
function SetStatusFlugin(index)
{	
	var id = "checkbox" + index;
	var obj = document.getElementById(id);
	var url = "Ajax.php?task=flugin&id=" + index + "&status=" + obj.checked;
	SetStatusFluginClient(url);
}
function SetStatusFluginClient(url)
{	
	InitXmlHttpRequest();       
	xmlhttp.open('GET', url, true);	
	xmlhttp.onreadystatechange = SetStatusFluginText;
	xmlhttp.send(null);
}
function SetStatusFluginText()
{	
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var check = xmlhttp.responseText;
		if(check == '0')
			alert("Error: Connect DB fail ...");		
	}
}
function SetReceiNews()
{
	var url = "admin/0650Construction/Ajax.php?task=receiNews&user=" + user;
	SetReceiNewsClient(url);
}
function SetReceiNewsClient(url)
{	
	InitXmlHttpRequest();       
	xmlhttp.open('GET', url, true);	
	xmlhttp.onreadystatechange = SetReceiNewsText;
	xmlhttp.send(null);
}
function SetReceiNewsText()
{	
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var check = xmlhttp.responseText;
		if(check == '0')
			alert("Error: Connect DB fail ...");
		else
			alert("Chúng tôi sẽ gửi tin tức cho bạn hàng tuần.");
	}	
}
function SetListDistrict()
{			
	document.getElementById('loading').style.height = '25px';
	document.getElementById('divLoading').style.height = '40px';
	if(document.frmBuySell != null)
	{
		var provinces= document.frmBuySell.elements["sltProvinces"].value;
		document.frmBuySell.elements["sltDistrict"].options.length = 0;
	}
	else
	{
		var provinces= document.frmSearch.elements["sltProvinces"].value;	
		document.frmSearch.elements["sltDistrict"].options.length = 0;
	}
	var url = "admin/0650Construction/Ajax.php?task=district&provinces=" + provinces;
	SetListDistrictClient(url);
}
function SetListDistrictClient(url)
{	
	InitXmlHttpRequest();       
	xmlhttp.open('GET', url, true);	
	xmlhttp.onreadystatechange = SetListDistrictXML;
	xmlhttp.send(null);
}
function SetListDistrictXML()
{	
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	 try {
		 var lst = xmlhttp.responseXML.getElementsByTagName('lst');		 
		 for(var i = 0;i < lst.length;i++)
		 {			 				 		
		 	 var id = lst[i].childNodes[0].firstChild.nodeValue;
			 var name = lst[i].childNodes[1].firstChild.nodeValue;
			 if(document.frmBuySell != null)
				 document.frmBuySell.elements["sltDistrict"].options[i] = new Option(name, id);
			 else
				 document.frmSearch.elements["sltDistrict"].options[i] = new Option(name, id);
		 }				 
		 document.getElementById('loading').style.height = '0px';
		 document.getElementById('divLoading').style.height = '0px';
	 }
	 catch (e) {
			alert(e.message);
	  }
	}
}
function SetImgSlice(id)
{			
	if(document.getElementById(id) != null)
	{
		var obj = document.getElementById(id);
		obj.innerHTML = "<center style='padding-top:0px'><img src='images/Loading.gif' border='0'></center>";	
		var url = "admin/0650Construction/Ajax.php?task=sliceImg";
		SetImgSliceClient(url);
	}
}
function SetImgSliceClient(url)
{	
	InitXmlHttpRequest();       
	xmlhttp.open('GET', url, true);	
	xmlhttp.onreadystatechange = SetImgSliceXML;
	xmlhttp.send(null);
}
function SetImgSliceXML()
{	
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	 try {
		 var imgs = xmlhttp.responseXML.getElementsByTagName('img');			   
		 for(var i = 0;i < imgs.length;i++)
		 {			 				 							 
			 var ID = imgs[i].childNodes[0].firstChild.nodeValue;
			 var Title = imgs[i].childNodes[1].firstChild.nodeValue;
			 var Img = imgs[i].childNodes[2].firstChild.nodeValue;
			 var MainContent = "";		 
			 clsImg.addItem(ID, Title, Img, MainContent, '300', '300');
		 }
		 WriteImg();
	 }
	 catch (e) {
			alert(e.message);
	  }
	}
}