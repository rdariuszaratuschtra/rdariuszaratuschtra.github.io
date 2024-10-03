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
// that sting with one echo. Like so:
$output = "Hello ";
$output .= "World";
$output .= "!";
echo $output;

echo "<br>\n";
?>


<?php
echo "<br>\n";
echo "2 + 2 = " . 2+2; // This will print 4
echo "<br>\n";
echo "2 + 2 = " , 2+2; // This will print 2 + 2 = 4
echo "<br>\n";
echo "test " . 2+2; // This will print 2
echo "<br>\n";

echo "<br>\n";
echo "2 + 2 = " . 2+3; // This will print 5
echo "<br>\n";
echo "2 + 2 = " , 2+3; // This will print 2 + 2 = 5
echo "<br>\n";
echo "test " . 2+3; // This will print 3
echo "<br>\n";

echo "<br>\n";
echo "2 + 2 = " . (2+2); // This will print 2 + 2 = 4
echo "<br>\n";
echo "2 + 2 = " , (2+2); // This will print 2 + 2 = 4
echo "<br>\n";
echo "test " . (2+2); // This will print test 4
echo "<br>\n";

echo "<br>\n";
echo "test " , 2+2; // This will test 4
echo "<br>\n";
echo "2 + 2 = ";  // This will print 2 + 2 = 
echo "<br>\n";

echo "<br>\n";
echo "2" . "2"; // This will print 22
echo "<br>\n";
echo "2" + "2";  // This will print 4
echo "<br>\n";

echo "<br>\n";
echo 2 . 2; // This will print 22
echo "<br>\n";
echo 2 + 2;  // This will print 4
echo "<br>\n";

?>





</body>
</html>