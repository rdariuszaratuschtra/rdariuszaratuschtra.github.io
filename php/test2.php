<?php
//print "test";
$row = 1;
$fp = fopen ("cultuurschappen2.txt","r");
while ($data = fgetcsv ($fp, 1000, ",")) {
   $num = count ($data);
   print "<p> $num velden in regel $row: <br>\n";
   $row++;
   for ($c=0; $c < $num; $c++) {
       print $data[$c] . "<br>\n";
   }
}
fclose ($fp);
?> 