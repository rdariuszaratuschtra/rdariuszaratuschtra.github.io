<!doctype html public "-//W3C//DTD HTML 3.2 Final//EN">
<html>
<head>
	<title>R. Darius Zaratuschtra</title>
	
<link rel="stylesheet" href="darius3.css">



</head>

<body>


<!-- 
<table cellspacing=1 bgcolor="Gray" cellpadding=0 align="center">
<tr>
	<td><img src="images/dariusheader8.jpg" width=760 height=160 border=0></td>
</tr>
</table>
<br>
 -->

<div id="shadow1">
<div id="header"></div>
</div>


<div id="shadow2">
<div id="nav">
<script type="text/javascript" src="milonic_src.js"></script>
<noscript><!-- <a href="http://www.milonic.com/">JavaScript DHTML Pull Down Menus From Milonic.com</a> --></noscript>
<script	type="text/javascript">
if(ns4)_d.write("<scr"+"ipt type=text/javascript src=mmenuns4.js><\/scr"+"ipt>");		
  else _d.write("<scr"+"ipt type=text/javascript src=mmenudom.js><\/scr"+"ipt>"); 
</script>
<!-- <script type="text/javascript" src="changecolorsbyclick.js"></script> -->
<script type="text/javascript" src="menu_data.js"></script>
</div>	

<div id="content">
<!-- NOTE: need containing div to draw border for Firefox counts padding toward width and height -->
<div id="test2">
	<!-- NOTE: we need the closing iframe tag or our footer div won't show!!! -->
	<!-- NOTE: when any of the enclosing divs has filter:alpha set, some pictures will show specks in IE -->

<?php	
$cat = "-1";
if ($_GET['cat'] != NULL)
	$cat = $_GET['cat'];
	
$speed = "3000";
if ($_GET['speed'] != NULL)
	$speed = $_GET['speed'];
?>
	
	<iframe name="dariusframe" align=center src="slideshow/slide.php?cat=<?php echo $cat; ?>&speed=<?php echo $speed; ?>" frameborder=0 width=705 height=529 scrolling="no" marginheight=0 marginwidth=0></iframe>
</div>
</div>

</div>



<!-- 
<table cellspacing=0 bgcolor="Gray" cellpadding=0 width=762 align="center">
<tr valign="BOTTOM">
	<td height=20 bgcolor="White"><p class="footer">Copyright &copy; 2005 R. Darius Zaratuschtra | Webdesign: R. Goossens</p></td>
</tr>
</table>
 -->

<div id="footer">
<p class="footer">Copyright &copy; 2005 R. Darius Zaratuschtra | Webdesign: R. Goossens</p>
</div>

<!-- <br><br><br><br><br> -->





</body>
</html>

