<html>
<head>
<LINK REL="stylesheet" HREF="../darius4.css">
<script type="text/javascript" language="JavaScript" src="../scripts/imagepopup.js"></script>
<script type="text/javascript" language="JavaScript" src="../scripts/imgover.js"></script>
<script type="text/javascript" language="JavaScript" src="../scripts/imagefadein.js"></script>


<?php
// first get a mysql connection
$db = mysql_connect("localhost", "rdariuszaratusc", "hkeZHsAD");
mysql_select_db("rdariuszaratusc", $db);


$query = "SELECT * FROM `Cultuurschappen`";
$result = mysql_query($query) or die('Query failed: ' . mysql_error());
// NOTE: Query gets total number of records from table
$records_found = mysql_num_rows($result);
?>


<script language="JavaScript">
<!--

function slide(which) {
	document.location = "index.php?slide=" + which;
	//alert("slide: " + which);
}

//setTimeout("slide()", 2000);

<?php
$slide = 0;
if ($_GET['slide'] != NULL)
	$slide = $_GET['slide'];


if ($slide == ($records_found-1))
	$next_slide = 0;
else
	$next_slide = $slide+1;
	
// TODO: instead of a page refresh only do a image source refresh
// TODO: fading: use two divs with images and alternate between them
echo "setTimeout(\"slide(" . $next_slide . ")\", 3000);"
	
//echo "slide: " . $slide;
?>

//-->
</script>


<title></title>
</head>

<body onLoad="ImageFadeIn()">

<div id="nav1"></div>
<!-- <a href="prev.html"><img src="../images/prev.jpg" width=14 height=14 border=0 id="prev" name="img1" onmouseover="imgOver('img1');" onmouseout="imgOut('img1');"></a> -->
<a href="162.html"><img src="../images/next.jpg" width=14 height=14 border=0 id="next" name="img2" onmouseover="imgOver('img2');" onmouseout="imgOut('img2');"></a>
<a href="index.html"><img src="../images/index.jpg" width=14 height=14 border=0 id="index" name="img3" onmouseover="imgOver('img3');" onmouseout="imgOut('img3');"></a>

<div id="nav2">
<div id="title">Titel</div>
</div>




<?php
$query = "SELECT * FROM `Cultuurschappen` LIMIT 1 OFFSET " . $slide;

$result = mysql_query($query) or die('Query failed: ' . mysql_error());

$line = mysql_fetch_array($result, MYSQL_NUM);

$imgpath = "../gallery_cultuurschappen/" . $line[0];

// Free resultset
mysql_free_result($result);


// Closing connection
mysql_close($db);
?>


<center>

  <table border="0" cellspacing="0" cellpadding="0">
    <tr><td align="center">
      <!--<img id="test" name="test" src="161.jpg">-->
<?php      
echo "<img id=\"test\" name=\"test\" src=\"" . $imgpath . "\">";
//echo "<img id=\"test\" name=\"test\" src=\"" . $imgpath . "\" style=\"visibility:hidden; filter:blendTrans(duration=1)\">";
?>      	
      <!-- <img id="fullimg" src="161.jpg"> -->
      <!-- <a href="../../Darius_original/cultuurschappen_original/161_big.jpg" target="_blank" name="Cultuurschap 1" onClick="viewPic(this); return false"><img id="test" name="test" src="161.jpg" border=0></a> -->

    </td></tr>
  </table>




<?php
//echo "test";

//$slide = 0;
//if ($_GET['slide'] != NULL)
//	$slide = $_GET['slide'];
	
//echo "<br>slide: " . $slide;
//echo "<br>records_found: " . $records_found;
	

//header("Location: index.php?slide=1");

?>




<!-- begin navigation
<table><tr>
  <td width="32">
    &nbsp;
  </td>
  <td width="32">
    &nbsp;
  </td>
  <td width="32">
    <a href="index.html"><img src="bw_index.gif" border="0" alt="[Index]"></a>
  </td>
  <td width="32">
    <a href="162.html"><img src="bw_next.gif" border="0" alt="[Next]"></a>
  </td>
  <td width="32">
    <a href="schilderijen 04 en schilderijen amsterdam 028.html"><img src="bw_last.gif" border="0" alt="[Last]"></a>
  </td>
</tr></table>
end navigation -->


  
<script type="text/javascript" src="../menu2/milonic_src.js"></script>
<noscript><!-- <a href="http://www.milonic.com/">JavaScript DHTML Pull Down Menus From Milonic.com</a> --></noscript>
<script	type="text/javascript">
if(ns4)_d.write("<scr"+"ipt type=text/javascript src=../menu2/mmenuns4.js><\/scr"+"ipt>");		
  else _d.write("<scr"+"ipt type=text/javascript src=../menu2/mmenudom.js><\/scr"+"ipt>"); 
</script>
<!-- <script type="text/javascript" src="../menu2/changecolorsbyclick.js"></script> -->
<script type="text/javascript" src="../menu2/menu_data.js"></script>
  
</center>
</body>
</html>
