<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
</head>

<body>
<!-- Hallo<br> -->


<?php
//echo "hallo<br>\n";
//echo "<br>\n";
//echo '<br>\n';
?>


<?php

// NOTE: echo is time-consuming like any I/O process
// It works fastest with single quotes
// It is best to concatenate output to one string and then output
// that string with one echo. Like so:
$output = "Hello ";
$output .= "World";
$output .= "!";
echo $output;

echo "<br>\n";


$year = 2000;
/*
//echo $year;
for ($i = 1984; $i < 2007; $i++) {
	//if ($i == $year)
	echo &i;
}
*/
echo "<br>\n";

for ($i = 1984; $i <= 2007; $i++) {
   //echo $i;
   //echo $year;
   if ($i == $year) echo $year;
   //printf("%d", &year);
}


echo "<br>\n";
?>


<?php

?>





</body>
</html>