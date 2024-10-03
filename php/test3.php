<?php
print "test<br>\n";	

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
	
	// drop the table
	$sql = "DROP TABLE `" . $table . "`";
	mysql_query($sql);
	echo $sql ."<br>\n";
	if(mysql_error()) {
	   echo mysql_error() ."<br>\n";
	}
	
	// create the table
	$sql = "CREATE TABLE `" . $table . "`(" . 
		"Foto VARCHAR(128) NOT NULL UNIQUE, " . 
		"Titel VARCHAR(128), " . 
		"Materiaal VARCHAR(128), " . 
		"Afmeting VARCHAR(128), " . 
		"Jaar VARCHAR(128), " . 
		"Prijs SMALLINT, " .
		"FULLTEXT(Foto), FULLTEXT(Titel), FULLTEXT(Materiaal), FULLTEXT(Afmeting), FULLTEXT(Jaar))";
	mysql_query($sql);
	echo $sql ."<br>\n";
	if(mysql_error()) {
	   echo mysql_error() ."<br>\n";
	}
	
	
	// read the data file	
	// expects the data file to be in the same dir as this script
	//$fcontents = file ('./cultuurschappen.txt');
	$table_file = strtolower($table);
	$table_file = $table_file . ".txt";
	$table_file = "./" . $table_file;
	//echo $table_file . "<br>\n";
	
	$fcontents = 0;
	if (file_exists($table_file)) {
		$fcontents = file($table_file);   
	} else {
		$fcontents = 0;
		echo "The file $table_file does not exist<br>\n";	
	}
		  
	
	// insert data into the table from the data file
	// if your data is comma separated instead of tab separated 
	// change the '\t' to ',' 
	for($i=0; $i<sizeof($fcontents); $i++) { 
	    $line = trim($fcontents[$i]); 
	    $arr = explode("\t", $line);
	    
	    // prefix euro sign to Prijs column
	    //if ($arr[5] != "Verkocht" && $arr[5] != "\N") {
	    //	$arr[5] = "€ " . $arr[5];   
	    //}
	    // NONO: we will store Prijs as an INT to allow ORDER to work properly
	    if ($arr[5] == "\N") {
	    	$arr[5] = 0;
	    } else 
	    if ($arr[5] == "Verkocht") {
	    	$arr[5] = -1;
	    } else {
	    	$arr[5] = str_replace(",-", "", $arr[5]);
	    }
	    
	   
	    $sql = "INSERT INTO `" . $table . "` VALUES ('" . implode("', '", $arr) . "')"; 
	    mysql_query($sql);
	    echo $sql . "<br>\n";
	    if(mysql_error()) {
	       echo mysql_error() . "<br>\n";
	    }
	    	  
	}
	
	echo "<br>\n";
	
}

?>
