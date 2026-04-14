<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style>
    body{font:11px verdana,arial,sans-serif;}
    a{color:#0000cc;font-size:xx-small;}
  </style>

  <!-- STEP 1: Editor Localization: Include language file -->
  <%
  sLanguage=Request("selLanguage")
  if sLanguage<>"" then Response.Write "<script language=JavaScript SRC="../scripts/language/-22%20&%20sLanguage%20&%20-22/editor_lang.js"></script>"
  %>
  <!--
  Or you can specify certain language directly using (for example) :
  <script language=JavaScript src='../scripts/language/german/editor_lang.js'></script>
  -->

  <script language=JavaScript SRC="../scripts/innovaeditor.js"></script>
</head>
<body>

<h4>Localization (ASP example) - <a HREF="../default.htm">Back</a></h4>

<form method="post" action="default.asp" id="Form1">

  Select Language:
  <select ID="selLanguage" NAME="selLanguage" onchange="document.getElementById('btnSubmit').click()">
    <option value=""    <%if sLanguage="" then response.Write "selected"%> >English</option>
    <option value="da-DK"  <%if sLanguage="da-DK" then response.Write "selected"%> >Danish</option>
    <option value="nl-NL" <%if sLanguage="nl-NL" then response.Write "selected"%> >Dutch</option>
    <option value="fi-FI" <%if sLanguage="fi-FI" then response.Write "selected"%> >Finnish</option>
    <option value="fr-FR"  <%if sLanguage="fr-FR" then response.Write "selected"%> >French</option>
    <option value="de-DE"  <%if sLanguage="de-DE" then response.Write "selected"%> >German</option>
    <option value="zh-CHS"  <%if sLanguage="zh-CHS" then response.Write "selected"%> >Chinese Simplified</option>
    <option value="zh-CHT"  <%if sLanguage="zh-CHT" then response.Write "selected"%> >Chinese Traditional</option>
    <option value="nn-NO" <%if sLanguage="nn-NO" then response.Write "selected"%> >Norwegian</option>
    <option value="es-ES" <%if sLanguage="es-ES" then response.Write "selected"%> >Spanish</option>
    <option value="sv-SE" <%if sLanguage="sv-SE" then response.Write "selected"%> >Swedish</option>
    <option value="it-IT" <%if sLanguage="it-IT" then response.Write "selected"%> >Italian</option>
  </select>

  <br><br>

  <textarea id="txtContent" name="txtContent" rows=4 cols=30>
  <%
  function encodeHTML(sHTML)
    sHTML=replace(sHTML,"&","&amp;")
    sHTML=replace(sHTML,"<","&lt;")
    sHTML=replace(sHTML,">","&gt;")
    encodeHTML=sHTML
  end function

  Response.Write encodeHTML(Request("txtContent"))
  %>
  </textarea>

  <script>
    var oEdit1 = new InnovaEditor("oEdit1");

    //STEP 2: Asset Manager Localization: Add querystring lang=en-US/da-DK/nl-NL...
    oEdit1.cmdAssetManager="modalDialogShow('/Editor/assetmanager/assetmanager.asp?lang=<%=sLanguage%>',640,465)";
    /*
    Or you can specify certain language directly using (for example) :
    oEdit1.cmdAssetManager="modalDialogShow('/Editor/assetmanager/assetmanager.asp@lang=dDD2E24D9";
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