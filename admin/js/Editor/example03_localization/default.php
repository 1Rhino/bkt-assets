<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style>
    body{font:11px verdana,arial,sans-serif;}
    a{color:#0000cc;font-size:xx-small;}
  </style>

  <!-- STEP 1: Editor Localization: Include language file -->
    <!--
  Or you can specify certain language directly using (for example) :
  <script language=JavaScript src='../scripts/language/german/editor_lang.js'></script>
  -->

  <script language=JavaScript SRC="../scripts/innovaeditor.js"></script>
</head>
<body>

<h4>Localization (PHP example) - <a HREF="../default.htm">Back</a></h4>

<form method="post" action="default.php" id="Form1">
  Select Language:
  <select ID="selLanguage" NAME="selLanguage" onchange="document.getElementById('btnSubmit').click()">
    <option value=""    selected >English</option>
    <option value="da-DK"   >Danish</option>
    <option value="nl-NL"  >Dutch</option>
    <option value="fi-FI"  >Finnish</option>
    <option value="fr-FR"   >French</option>
    <option value="de-DE"   >German</option>
    <option value="zh-CHS"   >Chinese Simplified</option>
    <option value="zh-CHT"   >Chinese Traditional</option>
    <option value="nn-NO"  >Norwegian</option>
    <option value="es-ES"  >Spanish</option>
    <option value="sv-SE"  >Swedish</option>
    <option value="it-IT"  >Italian</option>
  </select>

  <br><br>


  <textarea id="txtContent" name="txtContent" rows=4 cols=30>
    </textarea>

  <script>
    var oEdit1 = new InnovaEditor("oEdit1");

    //STEP 2: Asset Manager Localization: Add querystring lang=en-US/da-DK/nl-NL...
    oEdit1.cmdAssetManager="modalDialogShow('/Editor315/assetmanager/assetmanager.php@lan5C31EEE5";//Use "relative to root" path
    /*
    Or you can specify certain language directly using (for example) :
    oEdit1.cmdAssetManager="modalDialogShow('/Editor/assetmanager/assetmanager.php@lang=d544EC294";
    */

    oEdit1.REPLACE("txtContent");
  </script>

  <input type="submit" value="Submit" id="btnSubmit">
</form>























<!-- SPECIAL THANKS -->

<hr>
<ul>
<li>
  <b>Dansk Version</b>:<br>
  Special thanks to: <br>
  Lars Hansen / <a HREF="../../../../www.knappekragh.dk/index.htm">www.knappekragh.dk</a><br><br>
</li>
<li>
  <b>Dutch Version</b>:<br>
  Special thanks to: <br>
  Mike van den Berg<br><br>
</li>
<li>
  <b>Finnish Version</b>:<br>
  Special thanks to: <br>
  Mika Nieminen / <a HREF="../../../../www.itvision.org/index.htm">www.itvision.org</a><br><br>
</li>
<li>
  <b>French Version</b>:<br>
  Special thanks to: <br>
  Roland GALZY / <a HREF="../../../../www.mediadoo.com/index.htm">www.mediadoo.com</a><br><br>
</li>
<li>
  <b>German Version</b>:<br>
  Special thanks to: <br>
  Philipp Alexander Starkl / <a HREF="../../../../www.ddesign.at/index.htm">www.ddesign.at</a><br><br>
</li>
<li>
  <b>Chinese Version</b>:<br>
  Special thanks to: <br>
  Jimsun<br>
  Agog Digital Marketing Strategy<br>
  Provides quality search engine optimization and web development service.<br>
  <a HREF="../../../../www.agogdigital.com/index.htm">www.agogdigital.com</a><br><br>
</li>
<li>
  <b>Norwegian Version</b>:<br>
  Special thanks to: <br>
  Per Willy Buffelen<br><br>
</li>
<li>
  <b>Spanish Version</b>:<br>
  Special thanks to: <br>
  Fredi Vinyals<br><br>
</li>
<li>
  <b>Swedish Version</b>:<br>
  Special thanks to: <br>
  Tomas Wikers / <a HREF="../../../../www.wikers.com/index.htm">www.wikers.com</a><br><br>
</li>
<li>
  <b>Italian Version</b>:<br>
  Special thanks to: <br>
  Sam Morgan / <a HREF="../../../../www.wiredeyes.com/index.htm">WIREDEYES - Internet Consultancy</a><br><br>
</li>
</ul>


</body>
</html>