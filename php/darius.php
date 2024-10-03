<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<link rel="stylesheet" href="../darius3.css">
<script type="text/javascript" language="JavaScript" src="../scripts/imagepopup.js"></script>
</head>

<body>
<!-- Hallo<br> -->


<?php
//echo "hallo<br>\n";
?>


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

foreach($table_arr as $table) {

	// Performing SQL query
	$query = 'SELECT * FROM `' . $table . "`";
	$result = mysql_query($query) or die('Query failed: ' . mysql_error());
	
	// Printing results in HTML
	echo "<table bordercolor=\"gray\" border=1 cellspacing=0 cellpadding=3>\n";
	echo "\t<tr><th bgcolor=\"silver\" colspan=7>" . $table . "</th></tr>\n";
	
	echo "\t<tr bgcolor=\"#EEEEEE\">\n";
	echo "\t\t<th>&nbsp;</th>\n";
	
	// Get field names in table header
	//echo "\t\t<th>Foto</th>\n";
	//echo "\t\t<th>Titel</th>\n";
	//echo "\t\t<th>Materiaal</th>\n";
	//echo "\t\t<th>Afmeting</th>\n";
	//echo "\t\t<th>Jaar</th>\n";
	//echo "\t\t<th>Prijs</th>\n";
	//
	//$query2 = 'SHOW COLUMNS FROM ' . $table;
	//$result2 = mysql_query($query2) or die('Query failed: ' . mysql_error());
	//while ($line2 = mysql_fetch_array($result2, MYSQL_NUM)) {
	//	foreach ($line2 as $fieldname) {
	//		echo "\t\t<th>" . $fieldname . "</th>\n";
	//	}
	//}
	//		
	$numfields = mysql_num_fields($result);
	for ($i=0; $i < $numfields; $i++) {
		echo "\t\t<th>".mysql_field_name($result, $i)."</th>\n";
	}
	
	echo "\t</tr>\n";
	
	// fill the table rows
	while ($line = mysql_fetch_array($result, MYSQL_NUM)) {
	   echo "\t<tr>\n";
	   
	   // place thumbnail in first column
	   $thumbpath = "../gallery_" . strtolower($table) . "/tn_" . $line[0];	   
	   $imgpath = "../gallery_" . strtolower($table) . "/" . $line[0];	   
	   echo "\t\t<td>";
	   echo "<a href=\"" . $imgpath . "\" name=\"" . $line[1] . "\" target=\"_blank\" onClick=\"viewPic(this); return false\">";
	   //echo "<a href=\"" . $imgpath . "\" name=\"" . $line[1] . "\" target=\"_blank\" onClick=\"viewPic2('" . $imgpath . "', '" . $line[1] . "'); return false\">";
	   echo "<img src=\"" . $thumbpath . "\" border=0>";
	   echo "</a>";
	   echo "</td>\n";
	   
	   // fill all the other columns
	   foreach ($line as $col_value) {
	       echo "\t\t<td>" . $col_value . "</td>\n";
	   }
	   echo "\t</tr>\n";
	}
	
	echo "</table>\n";
	echo "<br><br><br>\n";
	
	// Free resultset
	mysql_free_result($result);
	
}

// Closing connection
mysql_close($link);
	

?>




</body>
</html>