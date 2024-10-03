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


$speed = "3000";
if ($_GET['speed'] != NULL)
	$speed = $_GET['speed'];
	
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
//var slideimages = new Array()
var slideimages = [

<?php
$count = 0;

$first_image = "";
$imgpath = "";


while ($line = mysql_fetch_array($result, MYSQL_NUM)) {
	
	foreach($table_arr as $table) {
		$imgpath = "../gallery_" . strtolower($table) . "/" . $line[0];
		if (file_exists($imgpath)) break;
	}
	
	// build array
	// NOTE: when there are titles with " or ' we have to escape them
	if ($count < ($records_found-1)) {
		echo "\t[\"" . $imgpath . "\", \"" . addslashes($line[1]) . "\", \"" . $line[2] . "\", \"" . $line[3] . "\", \"" . $line[4] . "\", \"" . $line[5] . "\"],\n";
	} else {
		echo "\t[\"" . $imgpath . "\", \"" . addslashes($line[1]) . "\", \"" . $line[2] . "\", \"" . $line[3] . "\", \"" . $line[4] . "\", \"" . $line[5] . "\"]\n"; // no comma
	}
	
	// get first image
	if ($count == $slide) {
		$first_image = $imgpath;	
	}
	
	$count++;
}
?>

]
//);


/*
// Preload all images into browser cache
// NOTE: this will give smooth sliding but also takes a long time
// at page load when there are many images
var imageholder = new Array();

// HELL: this gives an error.
//document.getElementById("title").innerHTML = "Loading Slideshow..."; 

for (i=0; i<slideimages.length; i++) {
	imageholder[i] = new Image();
	imageholder[i].src = slideimages[i][0];
}
*/


//var paused = false;
var paused = <?php echo $pause; ?>;
var timerID = null;

//var current_slide = 0;
var current_slide = <?php echo $slide ?>;


// NOTE: we are using these in menu2/menu_data.js
// JavaScript seems to be one giant namespace
var titel 		= "";
var materiaal 	= "";
var afmeting 	= "";
var jaar 		= "";
var prijs 		= "";


function slide(which) {
	//document.location = "index.php?slide=" + which;
	//alert("slide: " + which);
	
	
	current_slide = which;
	if (current_slide > (slideimages.length-1)) current_slide = 0;
	if (current_slide < 0) 						current_slide = slideimages.length-1;

	
		
	
	// HELL: it seems FireFox does not get past this point
	// Effing around with the forward button that we have on the page 
	// and then going back will start the slideshow but it is a hassle.
	// Seems like it cannot properly do setTimeout(). No such probs on IE.
	// NONO: FireFox cannot properly recurse with setTimeout() in an <iframe>
	// At http://www.rdariuszaratuschtra.nl/slideshow/index.php there is no prob
	// Or is it that it cannot find test.src and wants a stricter name?
	// NOTE: doing a frame reload does start the slideshow in FireFox so we
	// can possibly kludge. Maybe FireFox 1.5 even works OK.
	//test.src = "../gallery_cultuurschappen/" + slideimages[current_slide][0];
	test.src = slideimages[current_slide][0];

		
	
	titel = slideimages[current_slide][1];
	document.getElementById("title").innerHTML = titel;   
	
	materiaal	= slideimages[current_slide][2];
	afmeting 	= slideimages[current_slide][3]; 
	jaar 		= slideimages[current_slide][4];    
	prijs 		= slideimages[current_slide][5];
	
	// process prijs and add euro sign			
	if (prijs == 0) {
		prijs = "N";
	} else 
	if (prijs == -1) {
		prijs = "Verkocht";
	} else {
		prijs = "&euro; " +  prijs + ",-";
	}	
	
	mm_changeItemProperty(2, materiaal);
	mm_changeItemProperty(3, afmeting);
	mm_changeItemProperty(4, jaar);
	mm_changeItemProperty(5, prijs);
	
	
	// TEST:
	//mm_changeMenuProperty(menuName, propertyRef, newValue)
	//mm_changeMenuProperty("Info", 0, "xxx");
	//mm_changeItemProperty(menuName, itemName, codeRef, newValue, updateDisplay) 
	//mm_changeItemProperty("Info", "qqq", 1, "aaaaaa", true);
		
	//ImageFadeIn();	
	
	//timerID = setTimeout("slide(current_slide+1)", 3000);
	timerID = setTimeout("slide(current_slide+1)", <?php echo $speed; ?>);
	
	// pause immediately if paused is set to true with query string
	if (paused) setpause();
		
}


function pause() {
	paused=!paused;
	if (paused) {
		img4.src  	= '../images/play_over.jpg';
		img4.alt  	= 'Play slideshow';
		
		img4on.src  = '../images/play_over.jpg';
		img4off.src = '../images/play.jpg';
		
		clearTimeout(timerID);
	} else {
		img4.src  	= '../images/stop_over.jpg';
		img4.alt  	= 'Stop slideshow';
		
		img4on.src  = '../images/stop_over.jpg';
		img4off.src = '../images/stop.jpg';
		
		slide(current_slide+1);
	}
}

function setpause() {
	//img4.src  	= '../images/play_over.jpg';
	//img4.alt  	= 'Play slideshow';
		
	img4on.src  = '../images/play_over.jpg';
	img4off.src = '../images/play.jpg';

	clearTimeout(timerID);
}
	

function prev() {
	clearTimeout(timerID);
	slide(current_slide-1);
	if (paused) clearTimeout(timerID);
}

function next() {
	clearTimeout(timerID);
	slide(current_slide+1);
	if (paused) clearTimeout(timerID);
}


// Goto index.php
function index() {
	var cat = getQueryVariable("cat");
	var query = "";
	if (cat != null) 
		query = "?cat=" + cat + "&slide=" + current_slide + "&pause=" + paused;
	else
		query = "?slide=" + current_slide + "&pause=" + paused;
	
	window.location = "index.php" + query;
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

<body onLoad="slide(current_slide)">

<div id="nav1"></div>
<a href="javascript: prev()"><img src="../images/prev.jpg" alt="Vorige" width=14 height=14 border=0 id="prev" name="img1" onmouseover="imgOver('img1');" onmouseout="imgOut('img1');"></a>
<a href="javascript: next()"><img src="../images/next.jpg" alt="Volgende" width=14 height=14 border=0 id="next" name="img2" onmouseover="imgOver('img2');" onmouseout="imgOut('img2');"></a>
<a href="javascript: index()"><img src="../images/index.jpg" alt="Index" width=14 height=14 border=0 id="index" name="img3" onmouseover="imgOver('img3');" onmouseout="imgOut('img3');"></a>

<a href="javascript: pause()">
<?php
// <img src="../images/stop.jpg" alt="Stop slideshow" width=14 height=14 border=0 id="play" name="img4" onmouseover="imgOver('img4');" onmouseout="imgOut('img4');">
if ($pause == "true") {
	echo "<img src=\"../images/play.jpg\" alt=\"Play slideshow\" width=14 height=14 border=0 id=\"play\" name=\"img4\" onmouseover=\"imgOver('img4');\" onmouseout=\"imgOut('img4');\">\n";
} else {
	echo "<img src=\"../images/stop.jpg\" alt=\"Stop slideshow\" width=14 height=14 border=0 id=\"play\" name=\"img4\" onmouseover=\"imgOver('img4');\" onmouseout=\"imgOut('img4');\">\n";
}
?>
</a>

<div id="nav2">
<div id="title">Loading slideshow...</div>
</div>







<center>

  <table border="0" cellspacing="0" cellpadding="0">
    <tr><td align="center">
      <!-- <img id="test" name="test" src="161.jpg"> -->
      <!-- <img id="test" name="test" src="../gallery_cultuurschappen/161.jpg"> -->
      <!-- <img id="test" name="test" src="../gallery_cultuurschappen/161.jpg" style="visibility:hidden; filter:blendTrans(duration=1)"> -->
      
      
<?php      
//echo "<img id=\"test\" name=\"test\" src=\"" . $imgpath . "\">";
//echo "<img id=\"test\" name=\"test\" src=\"" . $imgpath . "\" style=\"visibility:hidden; filter:blendTrans(duration=1)\">";
echo "<img id=\"test\" name=\"test\" src=\"" . $first_image . "\">";
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
<script type="text/javascript" src="../menu2/menu_data_slideshow.js"></script>
  
</center>
</body>
</html>
