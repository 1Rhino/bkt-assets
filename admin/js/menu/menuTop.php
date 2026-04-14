
<?php 
	echo '		
	<script type="text/javascript">
<!--
stm_bm(["menu61b2",860,"","js/menu/blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand",""],this);
stm_bp("p0",[0,4,0,0,1,1,15,0,100,"",-2,"",-2,50,0,0,"#799BD8","transparent","",3,0,0,"#000000","",-1,-1,0,"transparent","",0,"",-1,-1,0,"transparent","",0,"",-1,-1,0,"transparent","",0,"",-1,-1,0,"transparent","",0,"","","","",0,0,0,0,0,0,0,0]);
stm_ai("p0i0",[1,"Trang ch&#7911;","","",-1,-1,0,"index.php","_self","","","","",15,15,0,"","",0,0,0,0,1,"#FFFFF7",1,"#FFFFF7",1,"","",2,2,0,0,"#999999","#999999","#FFFFFF","#CCFF66","bold 8pt Verdana","bold 8pt Verdana",0,0],80,21);
stm_aix("p0i1","p0i0",[1,"&#272;&#259;ng xu&#7845;t","","",-1,-1,0,"login.php?mode=error"],80,21);

stm_aix("p0i2","p0i0",[1,"&#272;&#7893;i m&#7853;t kh&#7849;u","","",-1,-1,0,"userManager.php?x=change","window"],80,21);
stm_aix("p0i3","p0i0",[1,"Giao di&#7879;n","","",-1,-1,0,"","_self","","","","",15,15,0,"","",-1,-1],80,21);
stm_bp("p1",[1,4,0,1,1,1,5,0,100,"progid:DXImageTransform.Microsoft.Iris(irisStyle=plus,motion=in,enabled=0,Duration=0.50)",-2,"progid:DXImageTransform.Microsoft.Iris(irisStyle=plus,motion=out,enabled=0,Duration=0.50)",-2,60,0,0,"#799BD8","#FFFFFF","",3,1,1,"#b3ca32"]); ';

$strSQL = "SELECT * FROM styles WHERE PSTATUS = 1";
$query = mysql_query($strSQL);
while($rows = mysql_fetch_array($query))
{
	echo 'stm_aix("p1i0","p0i0",[1,"'.$rows['STNAME'].'","","",-1,-1,0,"index.php?styles='.$rows['STID'].'","_self","","","","",5,18,0,"","",0,0,0,0,1,"#FFFFF7",1,"#b3ca32",0,"","",3,3,0,0,"#FFFFCC","#FFFFCC","#000099","#FFFFFF","8pt Verdana","8pt Verdana"],0,18);
	stm_ai("p1i1",[6,1,"#b3ca32","",-1,-1,0]);';
}

echo '
stm_ep();
stm_aix("p0i4","p0i0",[1,"Qu&#7843;n l&#253; user","","",-1,-1,0,"userManager.php","window"],80,21);';

if($_SESSION['KCPSECX'] == 'ANHKHOA')
{
	echo '
	stm_aix("p0i5","p0i0",[1,"Qu&#7843;n l&#253; d&#7921; &#225;n","","",-1,-1,0,"","_self","","","","",15,15,0,"","",-1,-1,0,0,1,"#FFFFF7",1,"#FFFFF7",1,"","",3,3,0,0,"#999999","#b3ca32","#FFFFFF","#CCFF33"],80,21);
	stm_bpx("p2","p1",[]); ';
	
	$strSQL = "SELECT * FROM admindb WHERE PSTATUS = 1 ORDER BY PORDER ASC";
	$query = mysql_query($strSQL);
	while($rows = mysql_fetch_array($query))
	{
		echo '
		stm_aix("p2i0","p1i0",[1,"'.$rows['NAME'].'","","",-1,-1,0,"'.$rows['URL'].'","window"],0,18);
		stm_aix("p2i1","p1i1",[]);';
	}
}
echo '
stm_ep();
stm_ep();
stm_sc(1,["transparent","transparent","","",3,3,0,0,"#FFFFF7","#000000","js/menu/up_disabled.gif","js/menu/up_enabled.gif",7,9,0,"js/menu/down_disabled.gif","js/menu/down_enabled.gif",7,9,0,0,200]);
stm_em();
//-->
</script>

';
?>
			