<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<link rel="stylesheet" href="../darius3.css">
<script type="text/javascript" language="JavaScript" src="../scripts/imagepopup.js"></script>
</head>

<body>
<!-- Hallo<br> -->


<?php
//$out .= "hallo<br>\n";
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
	$out = "";
	$out .= "<table bordercolor=\"gray\" border=1 cellspacing=0 cellpadding=3>\n";
	$out .= "\t<tr><th bgcolor=\"silver\" colspan=7>" . $table . "</th></tr>\n";
	
	$out .= "\t<tr bgcolor=\"#EEEEEE\">\n";
	$out .= "\t\t<th>&nbsp;</th>\n";
	
	// Get field names in table header
	//$out .= "\t\t<th>Foto</th>\n";
	//$out .= "\t\t<th>Titel</th>\n";
	//$out .= "\t\t<th>Materiaal</th>\n";
	//$out .= "\t\t<th>Afmeting</th>\n";
	//$out .= "\t\t<th>Jaar</th>\n";
	//$out .= "\t\t<th>Prijs</th>\n";
	//
	//$query2 = 'SHOW COLUMNS FROM ' . $table;
	//$result2 = mysql_query($query2) or die('Query failed: ' . mysql_error());
	//while ($line2 = mysql_fetch_array($result2, MYSQL_NUM)) {
	//	foreach ($line2 as $fieldname) {
	//		$out .= "\t\t<th>" . $fieldname . "</th>\n";
	//	}
	//}
	//		
	$numfields = mysql_num_fields($result);
	for ($i=0; $i < $numfields; $i++) {
		$out .= "\t\t<th>".mysql_field_name($result, $i)."</th>\n";
	}
	
	$out .= "\t</tr>\n";
	
	// fill the table rows
	while ($line = mysql_fetch_array($result, MYSQL_NUM)) {
	   $out .= "\t<tr>\n";
	   
	   // place thumbnail in first column
	   $thumbpath = "../gallery_" . strtolower($table) . "/tn_" . $line[0];	   
	   $imgpath = "../gallery_" . strtolower($table) . "/" . $line[0];	   
	   $out .= "\t\t<td>";
	   $out .= "<a href=\"" . $imgpath . "\" name=\"" . $line[1] . "\" target=\"_blank\" onClick=\"viewPic(this); return false\">";
	   //$out .= "<a href=\"" . $imgpath . "\" name=\"" . $line[1] . "\" target=\"_blank\" onClick=\"viewPic2('" . $imgpath . "', '" . $line[1] . "'); return false\">";
	   $out .= "<img src=\"" . $thumbpath . "\" border=0>";
	   $out .= "</a>";
	   $out .= "</td>\n";
	   
	   // fill all the other columns
	   foreach ($line as $col_value) {
	       $out .= "\t\t<td>" . $col_value . "</td>\n";
	   }
	   $out .= "\t</tr>\n";
	}
	
	$out .= "</table>\n";
	$out .= "<br><br><br>\n";	
	echo $out;
	
	// Free resultset
	mysql_free_result($result);
	
}

// Closing connection
mysql_close($link);
	

?>




</body>
</html>