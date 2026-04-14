// JavaScript Document
function clsImgItem(itemID, itemTitle, itemUrl, itemContent, itemW, itemH)
{
	this.itemID= itemID;
    this.itemTitle= itemTitle;
	this.itemUrl = itemUrl;
	this.itemContent = itemContent;
	this.itemW = itemW;
	this.itemH = itemH;
}
//Cac ham lay du lieu
clsImgItem.prototype.getItemID = function()
{	return this.itemID;}
clsImgItem.prototype.getItemTitle = function()
{	return this.itemTitle;}
clsImgItem.prototype.getItemUrl = function()
{	return this.itemUrl;}
clsImgItem.prototype.getItemContent = function()
{	return this.itemContent;}
clsImgItem.prototype.getItemW = function()
{	return this.itemW;}
clsImgItem.prototype.getItemH = function()
{	return this.itemH;}
//Cac ham gan du lieu
clsImgItem.prototype.setItemID = function(itemID)
{	this.itemID = itemID;}
clsImgItem.prototype.setItemTitle = function(itemTitle)
{	this.itemTitle = itemTitle;}
clsImgItem.prototype.setItemUrl = function(itemUrl)
{	this.itemUrl = itemUrl;}
clsImgItem.prototype.setItemContent = function(itemContent)
{	this.itemUrl = itemContent;}
clsImgItem.prototype.setItemW = function(itemW)
{	this.itemW = itemW;}
clsImgItem.prototype.setItemH = function(itemH)
{	this.itemH = itemH;}