<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Chọn biểu tượng</title>
<script src="clienthint.js"></script>
<script language="javascript">
	function modelessDialogShow(url, width, height)
	{
		window.showModelessDialog(url,'_self',
			"dialogWidth:"+width+"px;dialogHeight:"+height+"px;edge:Raised;center:Yes;help:No;Resizable:No;");

	}
	function doSelected(ID)
	{
		var imgID = document.getElementById(ID);
		var imgURL = imgID.src;
		dialogArguments.oUtil.obj.doCmd("InsertImage",imgURL);
		self.close()
	}

</script>
<?php
if(!isset($_GET['id']))
echo '
<center>
<br>
<select name="cboSmiley" onchange="showHint(this.value,\'txtHint\');">
<option value="">-- Chọn biểu tượng --</option>
<option value="0">Yahoo IM</option>
<option value="1">Happy</option>
<option value="2">Angry</option>
<option value="3">Love</option>
<option value="4">Sad</option>
<option value="5">Shocked</option>
<option value="6">Teasing</option>
</select>
</center>
';

class Smiley
{
	var $i = 1;
	
	function show($Types)
	{
		switch ($Types)
		{
			case 0: { $num=88; $folder = "YahooIM"; break; }
			case 1: { $num=26; $folder = "Happy"; break; }
			case 2: { $num=7;  $folder = "Angry"; break; }
			case 3: { $num=26; $folder = "Love"; break; }
			case 4: { $num=11; $folder = "Sad"; break; }
			case 5: { $num=6;  $folder = "Shocked"; break; }
			case 6: { $num=23; $folder = "Teasing"; break; }
		}
		echo '<br>';
		while($this->i <= $num)
		{
			$img = '<img style="cursor:hand; padding:3px;" id="'.$this->i.'"';
			$img .= ' src="../smileys/'.$folder.'/'.$this->i.'.gif"';
			$img .= ' onclick="doSelected('.$this->i.')" />&nbsp;&nbsp;';
			echo $img;
			$this->i++;
		}
	}
}
$id = isset($_GET['id']) ? $_GET['id'] : 0;
$smiley = new Smiley($id);
?>
<span id="txtHint"><?php $smiley->show($id); ?></span>