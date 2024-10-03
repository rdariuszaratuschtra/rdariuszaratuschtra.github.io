<?php
print "test<br>\n";	

// first get a mysql connection
$db=mysql_connect("localhost", "rdariuszaratusc", "hkeZHsAD");
mysql_select_db("rdariuszaratusc", $db);


$sql = "CREATE TABLE Cultuurschappen (Foto VARCHAR(64), Titel VARCHAR(64),
	Materiaal VARCHAR(64), Afmeting VARCHAR(64), Jaar VARCHAR(64), Prijs VARCHAR(64))";	
mysql_query($sql);
if(mysql_error()) {
	echo mysql_error() ."<br>\n";
}   
 

// expects the data file to be in the same dir as this script
$fcontents = file ('./cultuurschappen.txt');   

// if your data is comma separated instead of tab separated 
// change the '\t' to ',' 
for($i=0; $i<sizeof($fcontents); $i++) { 
    $line = trim($fcontents[$i]); 
    $arr = explode("\t", $line);
     
    
   
    $sql = "INSERT INTO Cultuurschappen VALUES ('". 
                IMPLODE("','", $arr) ."')"; 
    mysql_query($sql);
    echo $sql ."<br>\n";
    if(mysql_error()) {
       echo mysql_error() ."<br>\n";
    } 
}
?>
