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

// Let PHP build the image array
var slideimages = new Array(
<?php
$count = 0;

while ($line = mysql_fetch_array($result, MYSQL_NUM)) {
	if ($count != ($records_found-1)) {
		echo "\t\"../gallery_cultuurschappen/" . $line[0] . "\",\n";
	} else {
		echo "\t\"../gallery_cultuurschappen/" . $line[0] . "\"\n"; // no comma
	}
	$count++;
}
?>
);



var next_slide = 0;

var titel = "qqq";
var materiaal = "qqq";
var afmeting = "qqq";
var prijs = "qqq";
var jaar = "qqq";


function slide(which) {
	//document.location = "index.php?slide=" + which;
	//alert("slide: " + which);
	test.src = slideimages[which];
	
	if (next_slide != (slideimages.length-1)) {
		next_slide++;
	} else {
		next_slide = 0
	}	
	
	titel = which;
	document.getElementById("title").innerHTML = titel;   
	
	//materiaal = next_slide;
	//afmeting = next_slide; 
	//prijs = next_slide;    
	jaar = next_slide;
	
	//mm_changeMenuProperty(menuName, propertyRef, newValue)
	//mm_changeMenuProperty("Info", 0, "xxx");
	//mm_changeItemProperty(menuName, itemName, codeRef, newValue, updateDisplay) 
	//mm_changeItemProperty("Info", "qqq", 1, "aaaaaa", true);
	mm_changeItemProperty("Test: " + which);
	
	
	setTimeout("slide(next_slide)", 2000);
}   
    
//setTimeout("slide()", 2000);



//-->
</script>


<?php
// Free resultset
mysql_free_result($result);


// Closing connection
mysql_close($db);
?>



<title></title>
</head>

<body onLoad="slide(0)">

<div id="nav1"></div>
<!-- <a href="prev.html"><img src="../images/prev.jpg" width=14 height=14 border=0 id="prev" name="img1" onmouseover="imgOver('img1');" onmouseout="imgOut('img1');"></a> -->
<a href="162.html"><img src="../images/next.jpg" width=14 height=14 border=0 id="next" name="img2" onmouseover="imgOver('img2');" onmouseout="imgOut('img2');"></a>
<a href="index.html"><img src="../images/index.jpg" width=14 height=14 border=0 id="index" name="img3" onmouseover="imgOver('img3');" onmouseout="imgOut('img3');"></a>

<div id="nav2">
<div id="title">Titel</div>
</div>







<center>

  <table border="0" cellspacing="0" cellpadding="0">
    <tr><td align="center">
      <!--<img id="test" name="test" src="161.jpg">-->
      <img id="test" name="test" src="../gallery_cultuurschappen/161.jpg">
<?php      
//echo "<img id=\"test\" name=\"test\" src=\"" . $imgpath . "\">";
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
