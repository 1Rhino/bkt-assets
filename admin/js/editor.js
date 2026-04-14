// JavaScript Document
function FullEditor(obj, name, height)
{		
	obj.width="100%";
	obj.height=height;

	/***************************************************
	ADDING CUSTOM BUTTONS
	***************************************************/

	/*obj.arrCustomButtons = [["CustomName1","alert(\'Command 1 here.\')","Caption 1 here","btnCustom1.gif"],
	["CustomName2","alert(\"Command \'2\' here.\")","Caption 2 here","btnCustom2.gif"],
	["CustomName3","alert(\'Command \"3\" here.\')","Caption 3 here","btnCustom3.gif"]]*/


	/***************************************************
	RECONFIGURE TOOLBAR BUTTONS
	***************************************************/

	obj.tabs=[
	["tabHome", "Cơ bản", ["grpEdit", "grpFont", "grpPara", "grpPage"]],
	["tabStyle", "Nâng cao", ["grpObjects", "grpLinks", "grpTables", "grpStyles"]]
	];

	obj.groups=[
	["grpEdit", "", ["Undo", "Redo", "Search", "SpellCheck", "ClearAll", "BRK", "Cut", "Copy", "Paste", "PasteWord", "PasteText", "RemoveFormat"]],
	["grpFont", "", ["FontName", "FontSize", "BRK", "Bold", "Italic", "Underline","Strikethrough","Superscript","Subscript", "ForeColor", "BackColor"]],
	["grpPara", "", ["Paragraph", "Indent", "Outdent", "LTR", "RTL", "BRK", "JustifyLeft", "JustifyCenter","JustifyRight","JustifyFull", "Numbering","Bullets"]],
	["grpPage", "", ["Print", "Preview", "BRK", "FullScreen", "XHTMLSource"]],
	["grpObjects", "", ["Image", "Flash","Media", "BRK","CustomTag", "Characters", "Line", "Form"]],
	["grpLinks", "", ["Hyperlink", "BRK", "Bookmark"]],
	["grpTables", "", ["Table", "BRK", "Guidelines"]],
	["grpStyles", "", ["StyleAndFormatting", "Styles", "BRK", "Absolute"]]
	];


	/***************************************************
	OTHER SETTINGS
	***************************************************/
	obj.css="style/test.css";//Specify external css file here

	if(navigator.appName.indexOf('Microsoft') != -1)
		obj.cmdAssetManager = "modalDialogShow('../assetmanager/assetmanager.php','700','500')"; 
	else
		obj.cmdAssetManager = "modalDialogShow('/admin/js/Editor/assetmanager/assetmanager.php','700','500')"; 
	obj.cmdInternalLink = "modelessDialogShow('links.htm',365,270)"; //Command to open your custom link lookup page.
	obj.cmdCustomObject = "modelessDialogShow('../../admin/js/Editor/scripts/objects.php','400','400')";

	obj.arrCustomTag=[["First Name","{%first_name%}"],
	["Last Name","{%last_name%}"],
	["Email","{%email%}"]];//Define custom tag selection

	obj.customColors=["#ff4500","#ffa500","#808000","#4682b4","#1e90ff","#9400d3","#ff1493","#a9a9a9"];//predefined custom colors

	obj.mode="XHTMLBody"; //Editing mode. Possible values: "HTMLBody" (default), "XHTMLBody", "HTML", "XHTML"

	obj.REPLACE(name);
}
function norEditor(obj, name, height)
{	
	obj.width="100%";
	obj.height=height;
	obj.features=["Save",
	"Cut","Copy","Paste","PasteWord","PasteText","|","XHTMLFullSource","XHTMLSource",
	"Undo","Redo","|","Hyperlink","Bookmark","Image","|",
	"JustifyLeft","JustifyCenter","JustifyRight","JustifyFull","|",
	"Numbering","Bullets","|",
	"Line","BRK","FontName","FontSize","|",
	"Bold","Italic","Underline","Strikethrough","|",
	"ForeColor","BackColor","Indent","Outdent"];// => Custom Button Placement
	/***************************************************
		OTHER SETTINGS
	***************************************************/
	obj.css="style/test.css";//Specify external css file here
	if(navigator.appName.indexOf('Microsoft') != -1)
		obj.cmdAssetManager = "modalDialogShow('../assetmanager/assetmanager.php','700','500')"; 
	else
		obj.cmdAssetManager = "modalDialogShow('/admin/js/Editor/assetmanager/assetmanager.php','700','500')"; 
	obj.mode="XHTMLBody"; //Editing mode. Possible values: "HTMLBody" (default), "XHTMLBody", "HTML", "XHTML"
	obj.REPLACE(name);
}
function miniEditor(obj, name, height)
{	
	obj.width="100%";
	obj.height=height;
	
	obj.features=["Save","FullScreen","FontSize","|",
		"Bold","Italic","Underline","Strikethrough","|",
		"ForeColor","BackColor","CustomObject", 
		"JustifyLeft","JustifyCenter","JustifyRight","JustifyFull"];
		
	obj.css="styles/test.css";
	obj.cmdCustomObject = "modelessDialogShow('../../js/Editor/scripts/objects.php','100%'," + obj.height + ")"; 

	obj.REPLACE(name);
}

function miniCKEditor(id, height, width)
{
	var editor = CKEDITOR.replace(id, {
			toolbar :
			[
				['Font','FontSize'],
				['TextColor','BGColor'],
                ['Bold','Underline', 'Italic', 'Strike','RemoveFormat'], 
                ['NumberedList', 'BulletedList'],
                ['Link', 'Image','Table','Smiley','SpecialChar']
			]
		});	
	CKEDITOR.config.height = height;
	CKEDITOR.config.width = width;
	return editor;
}