// JavaScript Document
function clsImg(name)
{	
	this.name = name;
	this.items = new Array();	
}
//Cac ham lay du lieu
clsImg.prototype.getName = function()
{	return this.name;}
clsImg.prototype.getItemsLength = function()
{	return this.items.length;}
//Cac ham gan du lieu
clsImg.prototype.setName = function(name)
{	this.name = name;}
clsImg.prototype.setItemsLength = function(length)
{	this.items.length = length;}

clsImg.prototype.addItem = function(itemID, itemTitle, itemUrl, itemContent, itemW, itemH)
{
	var id = this.items.length;
	this.items[id] = new clsImgItem(itemID, itemTitle, itemUrl, itemContent, itemW, itemH);
}