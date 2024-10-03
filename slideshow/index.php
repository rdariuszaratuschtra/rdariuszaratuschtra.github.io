<html>
<head>
<LINK REL="stylesheet" HREF="../darius4.css">
<script type="text/javascript" language="JavaScript" src="../scripts/thumbover.js"></script>
<script type="text/javascript" language="JavaScript" src="../scripts/imgover.js"></script>


<?php
// first get a mysql connection
$db = mysql_connect("localhost", "rdariuszaratusc", "hkeZHsAD");
mysql_select_db("rdariuszaratusc", $db);


$table_arr = array(
	"Cultuurschappen",
	"Landschappen",
	"Zelfportretten",
	"Portretten",
	"Verhoudingen",
	"Studies",
	"Wachtenden",
	"Individuen",
	"Paardenschilderijen",
	"Paardenbeelden",
	"Glas-in-lood"
);



//$query = "SELECT * FROM `Cultuurschappen`";
$query = "(SELECT * FROM `Cultuurschappen`)" .
	" UNION (SELECT * FROM `Landschappen`)" .
	" UNION (SELECT * FROM `Zelfportretten`)" .
	" UNION (SELECT * FROM `Portretten`)" .
	" UNION (SELECT * FROM `Verhoudingen`)" .
	" UNION (SELECT * FROM `Studies`)" .
	" UNION (SELECT * FROM `Wachtenden`)" .
	" UNION (SELECT * FROM `Individuen`)" .
	" UNION (SELECT * FROM `Paardenschilderijen`)" .
	" UNION (SELECT * FROM `Paardenbeelden`)" .
	" UNION (SELECT * FROM `Glas-in-lood`)";

$cat = "-1";
if ($_GET['cat'] != NULL)
	$cat = $_GET['cat'];
	
//echo "cat: " . ($cat);
if ($cat == "0") $query = "SELECT * FROM `Cultuurschappen` 		";
if ($cat == "1") $query = "SELECT * FROM `Landschappen` 		";
if ($cat == "2") $query = "SELECT * FROM `Zelfportretten` 		";
if ($cat == "3") $query = "SELECT * FROM `Portretten` 			";
if ($cat == "4") $query = "SELECT * FROM `Verhoudingen` 		";
if ($cat == "5") $query = "SELECT * FROM `Studies` 				";
if ($cat == "6") $query = "SELECT * FROM `Wachtenden` 			";
if ($cat == "7") $query = "SELECT * FROM `Individuen` 			";
if ($cat == "8") $query = "SELECT * FROM `Paardenschilderijen` 	";
if ($cat == "9") $query = "SELECT * FROM `Paardenbeelden` 		";
if ($cat == "10") $query = "SELECT * FROM `Glas-in-lood` 		";




$result = mysql_query($query) or die('Query failed: ' . mysql_error());

// NOTE: Query gets total number of records from table
$records_found = mysql_num_rows($result);


//$speed = "3000";
//if ($_GET['speed'] != NULL)
//	$speed = $_GET['speed'];

$slide = "0";
if ($_GET['slide'] != NULL)
	$slide = $_GET['slide'];
	
$pause = "false";
if ($_GET['pause'] != NULL)
	$pause = $_GET['pause'];

?>


<script language="JavaScript">
<!--

// Let PHP build the image array
//var thumbimages = new Array()
var thumbimages = [

<?php
$count = 0;

$first_thumbs_arr = array();
$imgpath = "";


while ($line = mysql_fetch_array($result, MYSQL_NUM)) {
	
	foreach($table_arr as $table) {
		$imgpath = "../gallery_" . strtolower($table) . "/tn_" . $line[0];
		if (file_exists($imgpath)) break;
	}	
	
	// build array
	// NOTE: when there are titles with " or ' we have to escape them
	// We only need the thumb path and title
	if ($count < ($records_found-1)) {
		//echo "\t[\"" . $imgpath . "\", \"" . addslashes($line[1]) . "\", \"" . $line[2] . "\", \"" . $line[3] . "\", \"" . $line[4] . "\", \"" . $line[5] . "\"],\n";
		echo "\t[\"" . $imgpath . "\", \"" . addslashes($line[1]) . "\"],\n";
	} else {
		//echo "\t[\"" . $imgpath . "\", \"" . addslashes($line[1]) . "\", \"" . $line[2] . "\", \"" . $line[3] . "\", \"" . $line[4] . "\", \"" . $line[5] . "\"]\n"; // no comma
		echo "\t[\"" . $imgpath . "\", \"" . addslashes($line[1]) . "\"]\n"; // no comma
	}
	
	// get first 12 thumbnail images
	//if ($count < 12) {
	//	$first_thumbs_arr[$count] = $imgpath;	
	//}
	$index = floor($slide/12);
	if ( $count >= ($index*12) && $count < (($index*12)+12) ) {
		$first_thumbs_arr[$count] = $imgpath;	
	}
	
	$count++;
}
?>

]
//);



var num_indexpages = Math.ceil(thumbimages.length/12);
//alert(thumbimages.length + " images in " + num_indexpages + " pages");

//var current_index = 0;
var current_slide = <?php echo $slide; ?>;
var current_index = Math.floor(current_slide/12);
//alert("current index: " + current_index);




function prev() {
	current_index--;
	slidethumbs();	
}

function next() {
	current_index++;
	slidethumbs();
}


function slidethumbs() {
	//if (current_index > num_indexpages-1) current_index = num_indexpages-1;
	//if (current_index < 0) 				  current_index = 0;	
	
	if (current_index > num_indexpages-1) current_index = 0;
	if (current_index < 0) 				  current_index = num_indexpages-1;	
	
	
	for(i=0; i<12; i++) {
		if((current_index*12)+i < thumbimages.length) {			
			document.images[i].src = thumbimages[(current_index*12)+i][0];
			document.images[i].style.visibility = "visible";
		} else {
			//document.images[i].src = "";
			document.images[i].style.visibility = "hidden";
		}	
	}
	
/*	
	if (current_index == 0) {
		document.prev.style.visibility = "hidden";
		document.next.style.visibility = "visible";
	} else if (current_index == num_indexpages-1) {
		document.prev.style.visibility = "visible";
		document.next.style.visibility = "hidden";
	} else {
		document.prev.style.visibility = "visible";
		document.next.style.visibility = "visible";
	}
*/	
}


// Goto slide.php
function slide(thumb) {
	// determine which thumb was clicked and start slideshow from there
	//var slide = 0;
	var slide = current_index*12 + thumb;
	
	var cat = getQueryVariable("cat");
	var query = "";
	if (cat != null) 
		query = "?cat=" + cat + "&slide=" + slide + "&pause=" + <?php echo $pause; ?>;
	else
		query = "?slide=" + slide + "&pause=" + <?php echo $pause; ?>;;
		
	window.location = "slide.php" + query;
}



// Gets query variable if present, otherwise returns null
function getQueryVariable(variable) {
	var query = window.location.search; 
	query = query.substring(1, query.length);
	
    var vars = query.split("&"); 
    for (var i=0;i<vars.length;i++) { 
    	var pair = vars[i].split("="); 
    	if (pair[0] == variable) { 
        	return pair[1];
        }
  	}
  	
  	// return null if nothing found
	return null;
}


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
<body bgcolor="#FFFFFF" onLoad="slidethumbs()">
<center>

<div id="nav1"></div>
<!--  -->
<!--  -->

<div id="nav2"><div id="title"><!-- Test2 --></div></div>

<br><br>

<table border="0" cellpadding="5" cellspacing="30">
  <tr>
    <td align="center"><a href="javascript: slide(0)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[0]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(1)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[1]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(2)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[2]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(3)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[3]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
  </tr>
  <tr>
    <td align="center"><a href="javascript: slide(4)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[4]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(5)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[5]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(6)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[6]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(7)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[7]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
  </tr>
  <tr>
    <td align="center"><a href="javascript: slide(8)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[8]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(9)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[9]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(10)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[10]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
    <td align="center"><a href="javascript: slide(11)"><img id="thumb" name="Titel" src="<?php echo $first_thumbs_arr[11]; ?>" border="0" width="80" height="80" onmouseover="thumbOver(this)" onmouseout="thumbOut(this)"></a></td>
  </tr>
</table>




<!-- begin navigation -->
<table><tr>
  <td width="32">
    <a href="javascript: prev()"><img src="../images/prev.jpg" width=14 height=14 border=0 id="prev" name="img1" onmouseover="imgOver('img1');" onmouseout="imgOut('img1');"></a>
  </td>
  <td width="32">
    <a href="javascript: next()"><img src="../images/next.jpg" width=14 height=14 border=0 id="next" name="img2" onmouseover="imgOver('img2');" onmouseout="imgOut('img2');"></a>
  </td>
</tr></table>
<!-- end navigation -->



</center>
</body>
</html>
